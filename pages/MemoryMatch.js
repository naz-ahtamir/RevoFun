  // ---------- DATABASE KOSAKATA (unik) ----------
  const hanziDatabase = [
  { char: "爱", pinyin: "ài", arti: "cinta" },
  { char: "安", pinyin: "ān", arti: "aman" },
  { char: "办", pinyin: "bàn", arti: "urus" },
  { char: "保", pinyin: "bǎo", arti: "jaga" },
  { char: "备", pinyin: "bèi", arti: "siap" },
  { char: "变", pinyin: "biàn", arti: "ubah" },
  { char: "表", pinyin: "biǎo", arti: "tampil" },
  { char: "别", pinyin: "bié", arti: "pisah" },
  { char: "并", pinyin: "bìng", arti: "gabung" },
  { char: "部", pinyin: "bù", arti: "bagian" },

  { char: "才", pinyin: "cái", arti: "bakat" },
  { char: "参", pinyin: "cān", arti: "ikut" },
  { char: "产", pinyin: "chǎn", arti: "hasil" },
  { char: "常", pinyin: "cháng", arti: "sering" },
  { char: "成", pinyin: "chéng", arti: "jadi" },
  { char: "程", pinyin: "chéng", arti: "proses" },
  { char: "持", pinyin: "chí", arti: "pegang" },
  { char: "充", pinyin: "chōng", arti: "isi" },
  { char: "除", pinyin: "chú", arti: "hapus" },
  { char: "传", pinyin: "chuán", arti: "sebar" },

  { char: "达", pinyin: "dá", arti: "capai" },
  { char: "代", pinyin: "dài", arti: "ganti" },
  { char: "单", pinyin: "dān", arti: "tunggal" },
  { char: "当", pinyin: "dāng", arti: "jadi" },
  { char: "导", pinyin: "dǎo", arti: "arah" },
  { char: "得", pinyin: "dé", arti: "dapat" },
  { char: "等", pinyin: "děng", arti: "tunggu" },
  { char: "低", pinyin: "dī", arti: "rendah" },
  { char: "底", pinyin: "dǐ", arti: "dasar" },
  { char: "第", pinyin: "dì", arti: "urutan" },

  { char: "定", pinyin: "dìng", arti: "tetap" },
  { char: "动", pinyin: "dòng", arti: "gerak" },
  { char: "断", pinyin: "duàn", arti: "putus" },
  { char: "对", pinyin: "duì", arti: "benar" },
  { char: "发", pinyin: "fā", arti: "kirim" },
  { char: "法", pinyin: "fǎ", arti: "hukum" },
  { char: "反", pinyin: "fǎn", arti: "balik" },
  { char: "方", pinyin: "fāng", arti: "arah" },
  { char: "分", pinyin: "fēn", arti: "bagi" },
  { char: "风", pinyin: "fēng", arti: "angin" },

  { char: "改", pinyin: "gǎi", arti: "ubah" },
  { char: "感", pinyin: "gǎn", arti: "rasa" },
  { char: "高", pinyin: "gāo", arti: "tinggi" },
  { char: "各", pinyin: "gè", arti: "masing" },
  { char: "更", pinyin: "gèng", arti: "lebih" },
  { char: "公", pinyin: "gōng", arti: "publik" },
  { char: "共", pinyin: "gòng", arti: "bersama" },
  { char: "构", pinyin: "gòu", arti: "susun" },
  { char: "关", pinyin: "guān", arti: "tutup" },
  { char: "管", pinyin: "guǎn", arti: "atur" },

  { char: "国", pinyin: "guó", arti: "negara" },
  { char: "过", pinyin: "guò", arti: "lewat" },
  { char: "还", pinyin: "hái", arti: "masih" },
  { char: "好", pinyin: "hǎo", arti: "baik" },
  { char: "号", pinyin: "hào", arti: "nomor" },
  { char: "合", pinyin: "hé", arti: "gabung" },
  { char: "何", pinyin: "hé", arti: "apa" },
  { char: "和", pinyin: "hé", arti: "damai" },
  { char: "很", pinyin: "hěn", arti: "sangat" },
  { char: "后", pinyin: "hòu", arti: "setelah" },

  { char: "化", pinyin: "huà", arti: "ubah" },
  { char: "话", pinyin: "huà", arti: "bicara" },
  { char: "会", pinyin: "huì", arti: "bisa" },
  { char: "机", pinyin: "jī", arti: "mesin" },
  { char: "级", pinyin: "jí", arti: "tingkat" },
  { char: "极", pinyin: "jí", arti: "sangat" },
  { char: "计", pinyin: "jì", arti: "hitung" },
  { char: "记", pinyin: "jì", arti: "ingat" },
  { char: "加", pinyin: "jiā", arti: "tambah" },
  { char: "家", pinyin: "jiā", arti: "rumah" },

  { char: "间", pinyin: "jiān", arti: "ruang" },
  { char: "见", pinyin: "jiàn", arti: "lihat" },
  { char: "将", pinyin: "jiāng", arti: "akan" },
  { char: "教", pinyin: "jiào", arti: "ajar" },
  { char: "接", pinyin: "jiē", arti: "sambung" },
  { char: "结", pinyin: "jié", arti: "ikat" },
  { char: "解", pinyin: "jiě", arti: "jelas" },
  { char: "进", pinyin: "jìn", arti: "masuk" },
  { char: "经", pinyin: "jīng", arti: "lewat" },
  { char: "开", pinyin: "kāi", arti: "buka" },

  { char: "看", pinyin: "kàn", arti: "lihat" },
  { char: "考", pinyin: "kǎo", arti: "uji" },
  { char: "可", pinyin: "kě", arti: "boleh" },
  { char: "空", pinyin: "kōng", arti: "kosong" },
  { char: "口", pinyin: "kǒu", arti: "mulut" },
  { char: "快", pinyin: "kuài", arti: "cepat" },
  { char: "来", pinyin: "lái", arti: "datang" },
  { char: "理", pinyin: "lǐ", arti: "logika" },
  { char: "力", pinyin: "lì", arti: "tenaga" },
  { char: "立", pinyin: "lì", arti: "berdiri" }
];

  let currentCards = [];
  let flippedIndices = [];
  let lockBoard = false;
  let moves = 0;
  let matches = 0;
  let gameActive = true;

  const boardEl = document.getElementById("gameBoard");
  const resetBtn = document.getElementById("resetBtn");
  const topScorerCompact = document.getElementById("topScorerCompact");
  const currentScoreSpan = document.getElementById("currentScore");
  const currentMovesSpan = document.getElementById("currentMoves");

  // Score : max 1250 jika 6 langkah, minus 25 tiap langkah tambahan
  function calculateScore(movesCount, matchedPairs) {
    if (matchedPairs < 6) return 0;
    return Math.max(0, 1250 - (movesCount - 6) * 25);
  }

  function updateStatsUI() {
    currentMovesSpan.innerText = moves;
    const score = calculateScore(moves, matches);
    currentScoreSpan.innerText = score;
  }

  // Pilih 6 pasangan acak dari database
  function selectRandomPairs() {
    const shuffled = [...hanziDatabase];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selected = shuffled.slice(0, 6);
    let deck = [];
    selected.forEach(item => { deck.push(item.char, item.char); });
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck.map((char, idx) => ({ id: idx, char, flipped: false, matched: false }));
  }

  function renderBoard() {
    boardEl.innerHTML = "";
    currentCards.forEach((card, idx) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";
      if (card.matched) cardDiv.classList.add("matched");
      if (card.flipped && !card.matched) cardDiv.classList.add("flipped");

      if (card.flipped || card.matched) {
        const data = hanziDatabase.find(h => h.char === card.char);
        if (data) {
          cardDiv.innerHTML = `
            <div class="card-hanzi">${data.char}</div>
            <div class="card-pinyin">${data.pinyin}</div>
            <div class="card-arti">${data.arti}</div>
          `;
        } else {
          cardDiv.innerHTML = `<div class="card-hanzi">${card.char}</div>`;
        }
      } else {
        cardDiv.innerHTML = `<div class="card-question">?</div>`;
      }
      cardDiv.addEventListener("click", () => onCardClick(idx));
      boardEl.appendChild(cardDiv);
    });
  }

  function onCardClick(idx) {
    if (lockBoard || !gameActive) return;
    const card = currentCards[idx];
    if (card.matched || card.flipped) return;

    card.flipped = true;
    flippedIndices.push(idx);
    renderBoard();

    if (flippedIndices.length === 2) {
      moves++;
      updateStatsUI();
      lockBoard = true;
      const idxA = flippedIndices[0];
      const idxB = flippedIndices[1];
      const cardA = currentCards[idxA];
      const cardB = currentCards[idxB];

      if (cardA.char === cardB.char) {
        cardA.matched = true;
        cardB.matched = true;
        cardA.flipped = false;
        cardB.flipped = false;
        matches++;
        flippedIndices = [];
        lockBoard = false;
        renderBoard();
        updateStatsUI();

        if (matches === 6 && gameActive) {
          gameActive = false;
          const finalScore = calculateScore(moves, 6);
          setTimeout(() => showGameOverModal(finalScore), 80);
        }
      } else {
        setTimeout(() => {
          if (gameActive) {
            currentCards[idxA].flipped = false;
            currentCards[idxB].flipped = false;
            flippedIndices = [];
            lockBoard = false;
            renderBoard();
          }
        }, 600);
      }
    }
  }

  // ---------- TOP SCORER (hanya 1 terbaik ditampilkan di header) ----------
  const STORAGE_KEY = "memory_match_topscorers";
  function getTopScorers() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw).slice(0, 8) : [];
  }
  function saveTopScorer(name, score, movesCount) {
    let scorers = getTopScorers();
    scorers.push({ name: name.trim() || "Anonim", score, moves: movesCount, date: Date.now() });
    scorers.sort((a, b) => b.score - a.score);
    if (scorers.length > 8) scorers.pop();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scorers));
    updateTopScorerUI();
  }
  function updateTopScorerUI() {
    const topList = getTopScorers();
    if (!topList.length) {
      topScorerCompact.innerHTML = "-";
      return;
    }
    const best = topList[0];
    // tampilkan hanya 1 terbaik dengan skor
    topScorerCompact.innerHTML = `${best.name} : ${best.score} pts`;
  }

  // MODAL GAME OVER lengkap dengan daftar top scorer (tetap 5 besar)
  function showGameOverModal(finalScore) {
    const modalDiv = document.createElement("div");
    modalDiv.className = "modal-overlay";
    const currentTop = getTopScorers();
    let topHtml = "<div class='font-bold text-lg mb-1 text-amber-900'>TOP SCORER</div>";
    if (currentTop.length === 0) topHtml += "<div class='text-sm'>Belum ada skor</div>";
    else {
      currentTop.slice(0, 5).forEach((s, i) => {
        topHtml += `<div class='text-md'>${i+1}. ${s.name} — ${s.score} pts (${s.moves} langkah)</div>`;
      });
    }
    modalDiv.innerHTML = `
      <div class="modal-card">
        <h2 class="text-3xl font-bold text-red-800 mb-1">✨ SELAMAT! ✨</h2>
        <p class="text-xl text-stone-800">Anda menyelesaikan semua kartu!</p>
        <div class="bg-amber-100 rounded-xl p-3 my-3">
          <p class="text-2xl font-bold">Skor Akhir: ${finalScore} poin</p>
          <p class="text-md">Total langkah: ${moves}</p>
        </div>
        <p class="text-xl font-semibold">Masukkan nama:</p>
        <input id="playerNameInput" class="bg-white/80 text-xl text-center p-2 rounded-full w-full my-2 border border-amber-600" placeholder="Nama pemain" maxlength="20">
        <div id="modalTopScorerList" class="bg-white/50 rounded-xl p-3 my-3 max-h-36 overflow-y-auto text-left text-sm">${topHtml}</div>
        <button id="saveScoreModalBtn" class="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2 rounded-full mt-2">💾 Simpan & Main Lagi</button>
      </div>
    `;
    document.body.appendChild(modalDiv);
    const inputName = modalDiv.querySelector("#playerNameInput");
    const saveBtn = modalDiv.querySelector("#saveScoreModalBtn");
    saveBtn.onclick = () => {
      const name = inputName.value.trim() || "Pemenang";
      saveTopScorer(name, finalScore, moves);
      modalDiv.remove();
      resetFullGame();
    };
    inputName.addEventListener("keypress", (e) => { if (e.key === "Enter") saveBtn.click(); });
  }

  function resetFullGame() {
    currentCards = selectRandomPairs();
    flippedIndices = [];
    lockBoard = false;
    moves = 0;
    matches = 0;
    gameActive = true;
    updateStatsUI();
    renderBoard();
  }

  function initGame() {
    resetFullGame();
    updateTopScorerUI();
  }

  resetBtn.addEventListener("click", () => initGame());
  initGame();