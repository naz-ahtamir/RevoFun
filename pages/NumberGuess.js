// ======================= KONVERSI HANZI -> ANGKA (1-100) =======================
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
    let tens = 0;
    if (left === "") {
      tens = 1;
    } else {
      tens = digitMap[left];
      if (tens === undefined) return NaN;
    }
    let ones = 0;
    if (right !== "") {
      ones = digitMap[right];
      if (ones === undefined) return NaN;
    }
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
    let result = "";
    if (tens === 1) result = "十";
    else result = digitChars[tens] + "十";
    if (ones !== 0) result += digitChars[ones];
    return result;
  }
  return String(num);
}

// ======================= STATE PERMAINAN =======================
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 8;
let gameActive = true;

// DOM elements
const chineseInput = document.getElementById("chineseNumberInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const dynamicMessageSpan = document.getElementById("dynamicMessage");
const gameStatusBadge = document.getElementById("gameStatusBadge");

// Update pesan & badge (menampilkan sisa kesempatan)
function updateGameUI() {
  if (gameActive) {
    gameStatusBadge.innerHTML = `❤️ Sisa kesempatan: ${attemptsLeft}`;
  }
}

// Akhiri permainan
function endGame(won) {
  gameActive = false;
  guessBtn.disabled = true;
  if (won) {
    gameStatusBadge.innerHTML = "MENANG!";
    gameStatusBadge.classList.add(
      "text-[#ADA18A]",
      "font-bold",
      "text-center",
      "text-6xl",
    );
    dynamicMessageSpan.innerHTML = `Benar! Angka rahasianya adalah ${secretNumber} (${numberToChinese(secretNumber)}).<br>Kamu hebat! Tekan "Game Baru" untuk bermain lagi.`;
  } else {
    const chineseAnswer = numberToChinese(secretNumber);
    dynamicMessageSpan.innerHTML = `💀 GAME OVER 💀<br>Angka rahasia adalah ${secretNumber} (${chineseAnswer}). Tekan "Game Baru" untuk bermain lagi.`;
    gameStatusBadge.innerHTML = "❌ KALAH · Coba lagi ❌";
    gameStatusBadge.classList.add("font-bold", "text-center", "text-6xl");
  }
}

// Reset permainan
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 8;
  gameActive = true;
  guessBtn.disabled = false;
  dynamicMessageSpan.innerHTML =
    "GAME BARU!<br>Masukkan angka dalam Hanzi 1-100.";
  gameStatusBadge.innerHTML = `❤️ Sisa kesempatan: ${attemptsLeft}`;
  gameStatusBadge.classList.remove(
    "bg-green-800/60",
    "bg-red-800/60",
    "text-yellow-200",
    "text-red-200",
  );
  gameStatusBadge.classList.add("text-[#ADA18A]");
  chineseInput.value = "";
  chineseInput.focus();
}

// Proses tebakan
function handleChineseGuess() {
  if (!gameActive) {
    dynamicMessageSpan.innerHTML =
      "⚠️ Permainan sudah berakhir.<br>Klik 'Game Baru' untuk bermain lagi.";
    return;
  }

  const rawInput = chineseInput.value.trim();
  if (rawInput === "") {
    dynamicMessageSpan.innerHTML =
      "📝 Silakan tulis angka dalam Hanzi<br>(contoh: 二十五 , 六十八 , 一百)";
    return;
  }

  const numericValue = chineseToNumber(rawInput);
  if (isNaN(numericValue) || numericValue < 1 || numericValue > 100) {
    dynamicMessageSpan.innerHTML = `❌ "${rawInput}" bukan angka Mandarin 1-100.<br>Pelajari format: 十五, 五十六, 三十三, 一百, 七, dst.`;
    return;
  }

  attemptsLeft--;
  updateGameUI();

  if (numericValue === secretNumber) {
    dynamicMessageSpan.innerHTML = `JITU! ${rawInput} = ${secretNumber} ！ Selamat!`;
    endGame(true);
    return;
  }

  if (attemptsLeft === 0) {
    dynamicMessageSpan.innerHTML = `😭 Tebakan salah. Angka sebenarnya adalah ${secretNumber} (${numberToChinese(secretNumber)}).<br>Kesempatan habis.`;
    endGame(false);
    return;
  }

  let petunjuk = "";
  if (numericValue < secretNumber) {
    petunjuk = `Terlalu KECIL!<br>Coba angka lain.`;
  } else {
    petunjuk = `Terlalu BESAR!<br>Coba angka lain.`;
  }
  dynamicMessageSpan.innerHTML = `${petunjuk}`;
  chineseInput.value = "";
  chineseInput.focus();

  const msgDiv = document.getElementById("messageArea");
  msgDiv.classList.add("feedback-pulse");
  setTimeout(() => msgDiv.classList.remove("feedback-pulse"), 500);
}

// Tombol contoh cepat
function fillExample(exampleChinese) {
  if (!gameActive) {
    dynamicMessageSpan.innerHTML =
      "Game sudah berakhir. Tekan 'Game Baru' dulu ya.";
    return;
  }
  chineseInput.value = exampleChinese;
  chineseInput.focus();
  dynamicMessageSpan.innerHTML = `Klik "Tebak"<br>untuk menjawab.`;
}

// Event listeners
guessBtn.addEventListener("click", handleChineseGuess);
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
    if (!guessBtn.disabled) handleChineseGuess();
  }
});

// Inisialisasi
updateGameUI();
chineseInput.focus();
