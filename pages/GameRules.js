const games = {
  mc: {
    title: "Cara Main – Mandarin Catcher",
    bgImage: "/images/bg-mandarin-catcher.webp",
    bgOpacity: "bg-white/70",
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
    bgOpacity: "bg-white/70",
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
    bgOpacity: "bg-white/60",
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
    bgOpacity: "bg-white/60",
    gameName: "VOCABULARY QUIZ",
    rules: [
      "<strong class='text-[#AA9F8D]'>Hover / arahkan kursor</strong> ke huruf Mandarin untuk melihat <strong class='text-[#AA9F8D]'>Pinyin</strong>.",
      "Pilih <strong>salah satu dari 4 arti</strong> yang tersedia. Jawaban <span class='text-[#AA9F8D]'>benar</span> akan menghilangkan kata tersebut dari level.",
      "Setiap jawaban <span class='text-red-300 font-bold'>salah</span> akan mengurangi 1 nyawa. Jika habis → <span class='font-bold'>GAME OVER</span>.",
      "Skor tertinggi akan tercatat di <strong>Top Scorer</strong> (setelah Game Over atau Menang). Masukkan namamu dan raih posisi puncak!",
    ],
    gamePage: "/pages/VocabularyQuiz.html",
  },
};

// Pesan landscape (dengan ikon halus)
const LANDSCAPE_MSG =
  "<span class='inline-flex items-center gap-1'><i class='fas fa-mobile-alt text-[#AA9F8D] text-sm'></i> putar layar ke mode landscape untuk pengalaman bermain terbaik</span>";

// Sisipkan pesan ke setiap game
for (let key in games) {
  if (games.hasOwnProperty(key)) {
    games[key].rules.push(LANDSCAPE_MSG);
  }
}

// Ambil parameter game dari URL
const urlParams = new URLSearchParams(window.location.search);
let gameCode = urlParams.get("game");
const selected = games[gameCode] || games.mc;

// Set background dan title
document.title = selected.title;
document.body.style.backgroundImage = `url('${selected.bgImage}')`;
document.body.style.backgroundSize = "cover";

// Bangun kartu dengan ukuran teks yang sudah diperkecil & tanpa scroll
const card = document.getElementById("mainCard");
card.className = `rules-card ${selected.bgOpacity} backdrop-blur-xl border border-white/20`;

const contentDiv = document.createElement("div");
contentDiv.className = "card-content text-center";

// Judul H1
const titleEl = document.createElement("h1");
titleEl.className = "main-title font-['BobbyJones']";
titleEl.innerText = "Aturan MAIN";
contentDiv.appendChild(titleEl);

// Nama game
const gameNameEl = document.createElement("p");
gameNameEl.className = "game-name font-['BobbyJones']";
gameNameEl.innerText = selected.gameName;
contentDiv.appendChild(gameNameEl);

// Daftar rules (tanpa bullet)
const rulesWrapper = document.createElement("div");
rulesWrapper.className = "mt-3 mb-2";
const rulesList = document.createElement("ul");
rulesList.className = "space-y-1 md:space-y-1.5";
selected.rules.forEach((ruleHTML) => {
  const li = document.createElement("li");
  li.className = "rule-item";
  li.innerHTML = ruleHTML;
  li.style.listStyle = "none";
  rulesList.appendChild(li);
});
rulesWrapper.appendChild(rulesList);
contentDiv.appendChild(rulesWrapper);

// Tombol start
const btnWrap = document.createElement("div");
btnWrap.className = "mt-2 flex justify-center";
const startBtn = document.createElement("button");
startBtn.className = "btn-start font-['BobbyJones']";
startBtn.innerHTML = 'MULAI BERMAIN';
startBtn.addEventListener("click", () => {
  window.location.href = selected.gamePage;
});
btnWrap.appendChild(startBtn);
contentDiv.appendChild(btnWrap);

card.appendChild(contentDiv);

// Tambahan CSS dinamis untuk memastikan tidak ada scroll dan ukuran kartu pas
const styleFix = document.createElement("style");
styleFix.textContent = `
      /* Force no vertical scroll */
      .rules-card {
        overflow: visible !important;
      }
      body {
        overflow: hidden;
      }
      /* Pastikan konten tidak melebihi viewport */
      @media (orientation: landscape) {
        .card-content {
          max-height: 92vh;
          overflow-y: auto;
          scrollbar-width: none;
        }
        .card-content::-webkit-scrollbar {
          display: none;
        }
      }
      /* Namun karena kita sudah perkecil teks, scroll tidak akan muncul. Jika tetap muncul, sembunyikan dengan aman */
      @media (min-width: 1280px) and (orientation: landscape) {
        .card-content {
          max-height: 90vh;
          overflow-y: auto;
        }
        .rule-item {
          font-size: 0.9rem;
        }
      }
    `;
document.head.appendChild(styleFix);
