// Data untuk setiap game
const games = {
  mc: {
    title: "Cara Main – Mandarin Catcher",
    bgImage: "/images/bg-mandarin-catcher.webp",
    bgOpacity: "bg-white/69",
    gameName: "MANDARIN CATCHER",
    rules: [
      "<strong class='text-[#AA9F8D]'>Geser keranjang dengan mouse</strong> untuk menangkap kotak yang sesuai pertanyaan.",
      "Tangkapan benar dapat +10 poin dan soal baru; <strong class='text-[#AA9F8D]'>salah mengurangi kesempatan.</strong>",
      "Kesempatan hanya 3. <strong class='text-red-300'>Habis = game over</strong>, simpan skor dengan nama di Top Scorer.",
    ],
    gamePage: "/pages/MandarinCatcher.html",
  },
  mm: {
    title: "Cara Main – Memory Match",
    bgImage: "/images/bg-memory-match.webp",
    bgOpacity: "bg-white/69",
    gameName: "MEMORY MATCH",
    rules: [
      "Klik kartu untuk membuka dan lihat karakter Mandarin beserta pinyin & artinya!",
      "<strong class='text-[#AA9F8D]'>Jodohkan dua kartu</strong> dengan HURUF (Hanzi) yang SAMA.",
      "Kalau cocok, kartu akan tetap terbuka dan berubah warna merah keemasan",
      "Kalau salah, kartu akan tutup lagi setelah 0,65 detik. <strong class='text-red-300'>Ulangi terus!</strong>",
      "Cocokkan semua 6 pasang untuk MENANG",
    ],
    gamePage: "/pages/MemoryMatch.html",
  },
  ng: {
    title: "Cara Main – Number Guess",
    bgImage: "/images/bg-number-guess.webp",
    bgOpacity: "bg-white/50",
    gameName: "NUMBER GUESS",
    rules: [
      "<strong class='text-[#AA9F8D]'>Game akan memilih satu angka rahasia</strong> secara acak dari 1 sampai 100.",
      "Kamu tidak tahu angkanya, jadi harus menebak dengan tulisan Mandarin.",
      "<strong class='text-red-300'>Ketik angka Mandarin</strong> di kotak input, misalnya 十五 (15), 五十六 (56), atau 一百 (100).",
      "<strong class='text-[#AA9F8D]'>Klik tombol Tebak atau tekan Enter</strong> untuk mengirim jawaban.",
      "Setiap tebakan menghabiskan satu dari delapan kesempatan.",
      "Kamu menang jika tebakan tepat, dan kalah jika semua kesempatan habis.",
    ],
    gamePage: "/pages/NumberGuess.html",
  },
  vq: {
    title: "Cara Main – Vocabulary Quiz",
    bgImage: "/images/bg-vocabulary-quiz.webp",
    bgOpacity: "bg-white/50",
    gameName: "VOCABULARY QUIZ",
    rules: [
      "<strong class='text-[#AA9F8D]'>Hover / arahkan kursor</strong> ke huruf Mandarin untuk melihat <strong class='text-[#AA9F8D]'>Pinyin</strong>.",
      "Pilih <strong>salah satu dari 4 arti</strong> yang tersedia. Jawaban <span class='text-[#AA9F8D]'>benar</span> akan menghilangkan kata tersebut dari level.",
      "Setelah menjawab, game <strong>otomatis lanjut</strong> ke soal berikutnya (tanpa tombol next).",
      "Jika semua kata dalam level selesai, kamu akan <strong class='text-[#AA9F8D]'>naik ke level berikutnya</strong> secara otomatis.",
      "Setiap jawaban <span class='text-red-300 font-bold'>salah</span> akan mengurangi 1 nyawa. Jika habis → <span class='font-bold'>GAME OVER</span>.",
      "Skor tertinggi akan tercatat di <strong>Top Scorer</strong> (setelah Game Over atau Menang). Masukkan namamu dan raih posisi puncak!",
    ],
    gamePage: "/pages/VocabularyQuiz.html",
  },
};

// Ambil parameter 'game' dari URL
const params = new URLSearchParams(window.location.search);
const gameCode = params.get("game"); // misal 'mc', 'mm', dst.

// Validasi: jika tidak ada atau tidak dikenal, default ke 'mc'
const selectedGame = games[gameCode] || games.mc;

// Terapkan data ke halaman
document.title = selectedGame.title;
document.getElementById("gameName").innerText = selectedGame.gameName;

// Set background body
document.body.style.backgroundImage = `url('${selectedGame.bgImage}')`;
// Atur opacity container (backdrop-blur sudah ada, kita tambahkan kelas)
const container = document.getElementById("mainContainer");
container.classList.add(selectedGame.bgOpacity); // bg-white/69 atau bg-white/50

// Isi daftar aturan
const rulesUl = document.getElementById("rulesList");
rulesUl.innerHTML = ""; // kosongkan dulu
selectedGame.rules.forEach((ruleText) => {
  const li = document.createElement("li");
  li.innerHTML = ruleText; // pakai innerHTML karena ada tag <strong>
  rulesUl.appendChild(li);
});

// Atur tombol start
const startBtn = document.getElementById("startGameBtn");
startBtn.onclick = () => {
  window.location.href = selectedGame.gamePage;
};
