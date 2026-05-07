// ========================= UTILITIES KONVERSI HANZI =========================
function chineseToNumber(chineseStr) {
  if (!chineseStr || typeof chineseStr !== "string") return NaN;
  let cleaned = chineseStr.trim().replace(/\s/g, "");
  if (cleaned === "") return NaN;
  const digitMap = {
    零: 0,
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    十: 10,
  };
  if (cleaned === "一百") return 100;
  if (cleaned === "十") return 10;
  const matchTen = cleaned.match(
    /^([零一二三四五六七八九]?)十([一二三四五六七八九]?)$/,
  );
  if (matchTen) {
    let left = matchTen[1];
    let right = matchTen[2];
    let tens = left === "" ? 1 : digitMap[left];
    if (tens === undefined) return NaN;
    let ones = right !== "" ? digitMap[right] : 0;
    if (right !== "" && ones === undefined) return NaN;
    return tens * 10 + ones;
  }
  if (cleaned.length === 1) {
    const val = digitMap[cleaned];
    if (val !== undefined && val >= 1 && val <= 9) return val;
    return NaN;
  }
  return NaN;
}
function numberToChinese(num) {
  if (num === 100) return "一百";
  if (num === 10) return "十";
  const digitChars = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  if (num >= 1 && num <= 9) return digitChars[num];
  if (num >= 11 && num <= 99) {
    const tens = Math.floor(num / 10);
    const ones = num % 10;
    let result = tens === 1 ? "十" : digitChars[tens] + "十";
    if (ones !== 0) result += digitChars[ones];
    return result;
  }
  return String(num);
}

// ========================= GAME STATE =========================
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 8;
let gameActive = true;
let currentWinScore = 0;

// DOM elements
const chineseInput = document.getElementById("chineseNumberInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const dynamicMessageSpan = document.getElementById("dynamicMessage");
const gameStatusBadge = document.getElementById("gameStatusBadge");
const topScorerListDiv = document.getElementById("topScorerList");

// ========================= TOP SCORER (STORAGE) =========================
let topScores = [];

function loadTopScores() {
  const stored = localStorage.getItem("numguess_topscorers");
  if (stored) {
    topScores = JSON.parse(stored);
    topScores.sort((a, b) => b.score - a.score);
    if (topScores.length > 10) topScores = topScores.slice(0, 10);
  } else {
    topScores = [];
  }
  updateTopScorerUI();
}

function saveTopScoresToLocal() {
  localStorage.setItem(
    "numguess_topscorers",
    JSON.stringify(topScores.slice(0, 10)),
  );
  updateTopScorerUI();
}

function updateTopScorerUI() {
  if (!topScorerListDiv) return;
  if (topScores.length === 0) {
    topScorerListDiv.innerHTML = "Belum ada skor";
    return;
  }
  // Ambil skor tertinggi pertama
  const top = topScores[0];
  topScorerListDiv.innerHTML = `<div class="flex justify-between gap-1 text-[10px] md:text-xs"><span>${escapeHtml(top.name)}</span><span>: ${top.score}</span> pts</div>`;
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>]/g, function (m) {
    if (m === "&") return "&amp;";
    if (m === "<") return "&lt;";
    if (m === ">") return "&gt;";
    return m;
  });
}

function addScoreEntry(name, score) {
  if (score <= 0) return false;
  const newEntry = {
    name: name.trim().substring(0, 20) || "Pemain Hebat",
    score: score,
    date: Date.now(),
  };
  topScores.push(newEntry);
  topScores.sort((a, b) => b.score - a.score);
  if (topScores.length > 10) topScores.pop();
  saveTopScoresToLocal();
  return true;
}

// ========================= MODAL GAME OVER (dengan scoring) =========================
function showGameOverModal(isWin, finalScore) {
  const oldModal = document.querySelector(".modal-gameover-custom");
  if (oldModal) oldModal.remove();

  const modalDiv = document.createElement("div");
  modalDiv.className =
    "modal-gameover-custom fixed inset-0 flex items-center justify-center z-50";
  const titleMsg = isWin ? "SELAMAT!" : "GAME OVER";
  const subtitleMsg = isWin
    ? `Skor Kamu: ${finalScore} poin`
    : `Skor Akhir: 0 poin`;

  const tempScores = [...topScores];
  tempScores.sort((a, b) => b.score - a.score);
  let scoreListHtml =
    "<div class='font-bold text-amber-800 text-center mb-2 text-sm'>🏆 TOP SCORER 🏆</div>";
  if (tempScores.length === 0)
    scoreListHtml +=
      "<div class='text-center text-gray-600 text-xs'>Belum ada skor teratas</div>";
  else {
    tempScores.slice(0, 5).forEach((s, idx) => {
      scoreListHtml += `<div class="flex justify-between gap-4 text-xs md:text-sm border-b border-amber-200/50 py-1"><span>${idx + 1}. ${escapeHtml(s.name)}</span><span class="font-bold">${s.score}</span></div>`;
    });
  }

  modalDiv.innerHTML = `
        <div class="bg-[#FEF3D6] rounded-3xl p-4 max-w-[85%] w-[320px] text-center shadow-2xl font-['BobbyJones'] border-4 border-amber-500">
          <h2 class="text-2xl md:text-3xl font-extrabold text-red-700 mb-1">${titleMsg}</h2>
          <p class="text-lg md:text-xl text-amber-800 font-bold mb-1">${subtitleMsg}</p>
          ${isWin ? `<p class="text-xs mb-1">Sisa kesempatan: ${attemptsLeft} ✨</p>` : `<p class="text-xs mb-1">Angka rahasia: ${secretNumber} (${numberToChinese(secretNumber)})</p>`}
          <p class="text-sm mt-2">Nama Kamu:</p>
          <input id="playerNameInput" class="bg-white text-lg text-center p-1 rounded-xl w-full my-1 border border-amber-400 focus:ring-1" placeholder="Nama" maxlength="20">
          <div id="modalScoreList" class="bg-white/80 rounded-xl p-2 my-2 max-h-36 overflow-auto text-xs shadow-inner">
            ${scoreListHtml}
          </div>
          <button id="saveScoreBtn" class="bg-green-700 hover:bg-green-800 text-white font-bold px-4 py-1 rounded-full mt-1 transition shadow-md text-sm">💾 SIMPAN & MAIN LAGI</button>
        </div>
      `;
  document.body.appendChild(modalDiv);

  const saveBtn = modalDiv.querySelector("#saveScoreBtn");
  const inputName = modalDiv.querySelector("#playerNameInput");
  saveBtn.addEventListener("click", () => {
    let playerName = inputName.value.trim();
    if (playerName === "") playerName = "Pemenang";
    if (isWin && finalScore > 0) {
      addScoreEntry(playerName, finalScore);
    }
    modalDiv.remove();
    resetGame();
  });
  inputName.addEventListener("keypress", (e) => {
    if (e.key === "Enter") saveBtn.click();
  });
}

// ========================= AKHIRI PERMAINAN =========================
function endGameAndShowModal(won) {
  if (!gameActive) return;
  gameActive = false;
  guessBtn.disabled = true;
  let finalScore = 0;
  if (won) {
    finalScore = 300 + attemptsLeft * 100;
    if (finalScore > 1000) finalScore = 1000;
    currentWinScore = finalScore;
    dynamicMessageSpan.innerHTML = `BENAR! Angka ${secretNumber} (${numberToChinese(secretNumber)}). Skor: ${finalScore} 🎉`;
    gameStatusBadge.innerHTML = `MENANG!`;
  } else {
    finalScore = 0;
    currentWinScore = 0;
    dynamicMessageSpan.innerHTML = `GAME OVER Angka = ${secretNumber} (${numberToChinese(secretNumber)}). Skor 0.`;
    gameStatusBadge.innerHTML = `KALAH`;
  }
  showGameOverModal(won, finalScore);
}

function updateGameUI() {
  if (gameActive) {
    gameStatusBadge.innerHTML = `❤️ Sisa: ${attemptsLeft}`;
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 8;
  gameActive = true;
  guessBtn.disabled = false;
  dynamicMessageSpan.innerHTML = "GAME BARU!<br>Masukkan Hanzi 1-100.";
  gameStatusBadge.innerHTML = `❤️ Sisa Kesempatan: ${attemptsLeft}`;
  gameStatusBadge.classList.remove("text-red-500", "text-green-600");
  gameStatusBadge.classList.add("text-[#FD3E62]");
  chineseInput.value = "";
  chineseInput.focus();
  currentWinScore = 0;
}

function handleGuess() {
  if (!gameActive) {
    dynamicMessageSpan.innerHTML =
      "Game selesai. Tekan tombol reset untuk baru.";
    return;
  }
  const rawInput = chineseInput.value.trim();
  if (rawInput === "") {
    dynamicMessageSpan.innerHTML = "Tulis Hanzi (contoh: 十五, 一百)";
    return;
  }
  const numericValue = chineseToNumber(rawInput);
  if (isNaN(numericValue) || numericValue < 1 || numericValue > 100) {
    dynamicMessageSpan.innerHTML = `❌ "${rawInput}" bukan Hanzi 1-100. Gunakan tombol bantuan.`;
    return;
  }

  attemptsLeft--;
  updateGameUI();

  if (numericValue === secretNumber) {
    dynamicMessageSpan.innerHTML = `JITU! ${rawInput} = ${secretNumber}！ 🎉`;
    endGameAndShowModal(true);
    return;
  }

  if (attemptsLeft === 0) {
    dynamicMessageSpan.innerHTML = `Salah. Angka = ${secretNumber} (${numberToChinese(secretNumber)}). Habis.`;
    endGameAndShowModal(false);
    return;
  }

  let petunjuk = "";
  if (numericValue < secretNumber)
    petunjuk = `Terlalu KECIL! Sisa ${attemptsLeft}`;
  else petunjuk = `Terlalu BESAR! Sisa ${attemptsLeft}`;
  dynamicMessageSpan.innerHTML = `${petunjuk}<br>"${rawInput}" → ${numericValue}`;
  chineseInput.value = "";
  chineseInput.focus();

  const msgDiv = document.getElementById("messageArea");
  msgDiv.classList.add("feedback-pulse");
  setTimeout(() => msgDiv.classList.remove("feedback-pulse"), 400);
}

function fillExample(exampleChinese) {
  if (!gameActive) {
    dynamicMessageSpan.innerHTML = "Game selesai. Tekan reset biru.";
    return;
  }
  chineseInput.value = exampleChinese;
  chineseInput.focus();
  dynamicMessageSpan.innerHTML = `Siap menebak: "${exampleChinese}"`;
}

// Event listeners
guessBtn.addEventListener("click", handleGuess);
resetBtn.addEventListener("click", resetGame);
document.querySelectorAll(".example-chip").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const val = btn.getAttribute("data-example");
    if (val) fillExample(val);
  });
});
chineseInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (!guessBtn.disabled) handleGuess();
  }
});

// Inisialisasi
loadTopScores();
resetGame();

// Perbaikan orientasi landscape paksa
const fixOrientation = () => {
  const container = document.querySelector(".landscape-force");
  if (!container) return;
  if (window.matchMedia("(orientation: portrait)").matches) {
    container.style.transform = "rotate(90deg) translateY(-100%)";
    container.style.width = "100vh";
    container.style.height = "100vw";
  } else {
    container.style.transform = "none";
    container.style.width = "100%";
    container.style.height = "100%";
  }
};
window.addEventListener("resize", fixOrientation);
fixOrientation();
