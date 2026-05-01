// ======================= DATABASE HSK 1-6 =======================
const HSK_DATA = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };

const rawHSK1 = [
  { word: "爱", meaning: "Cinta, menyayangi", pinyin: "ài" },
  { word: "八", meaning: "Delapan", pinyin: "bā" },
  { word: "爸爸", meaning: "Ayah", pinyin: "bàba" },
  { word: "杯子", meaning: "Gelas, cangkir", pinyin: "bēizi" },
  { word: "本", meaning: "Kata bilangan untuk buku", pinyin: "běn" },
  { word: "不客气", meaning: "Terima kasih kembali", pinyin: "bù kèqì" },
  { word: "不", meaning: "Tidak", pinyin: "bù" },
  { word: "菜", meaning: "Sayur, masakan", pinyin: "cài" },
  { word: "茶", meaning: "Teh", pinyin: "chá" },
  { word: "吃", meaning: "Makan", pinyin: "chī" },
  { word: "出租车", meaning: "Taksi", pinyin: "chūzū chē" },
  { word: "打电话", meaning: "Menelepon", pinyin: "dǎ diànhuà" },
  { word: "大", meaning: "Besar", pinyin: "dà" },
  { word: "的", meaning: "Partikel kepemilikan", pinyin: "de" },
  { word: "点", meaning: "Titik, jam", pinyin: "diǎn" },
  { word: "电脑", meaning: "Komputer", pinyin: "diànnǎo" },
  { word: "电视", meaning: "Televisi", pinyin: "diànshì" },
  { word: "电影", meaning: "Film", pinyin: "diànyǐng" },
  { word: "东西", meaning: "Barang, benda", pinyin: "dōngxi" },
  { word: "都", meaning: "Semua", pinyin: "dōu" },
  { word: "读", meaning: "Membaca", pinyin: "dú" },
  { word: "对不起", meaning: "Maaf", pinyin: "duìbuqǐ" },
  { word: "多", meaning: "Banyak", pinyin: "duō" },
  { word: "多少", meaning: "Berapa banyak", pinyin: "duōshǎo" },
  { word: "儿子", meaning: "Anak laki-laki", pinyin: "érzi" },
  { word: "二", meaning: "Dua", pinyin: "èr" },
  { word: "饭店", meaning: "Hotel, restoran", pinyin: "fàndiàn" },
  { word: "飞机", meaning: "Pesawat", pinyin: "fēijī" },
  { word: "分钟", meaning: "Menit", pinyin: "fēnzhōng" },
  { word: "高兴", meaning: "Senang", pinyin: "gāoxìng" },
  { word: "个", meaning: "Kata bilangan umum", pinyin: "gè" },
  { word: "工作", meaning: "Bekerja, pekerjaan", pinyin: "gōngzuò" },
  { word: "狗", meaning: "Anjing", pinyin: "gǒu" },
  { word: "汉语", meaning: "Bahasa Mandarin", pinyin: "hànyǔ" },
  { word: "好", meaning: "Baik", pinyin: "hǎo" },
  { word: "号", meaning: "Nomor", pinyin: "hào" },
  { word: "喝", meaning: "Minum", pinyin: "hē" },
  { word: "和", meaning: "Dan", pinyin: "hé" },
  { word: "很", meaning: "Sangat", pinyin: "hěn" },
  { word: "后面", meaning: "Belakang", pinyin: "hòumiàn" },
  { word: "回", meaning: "Kembali", pinyin: "huí" },
  { word: "会", meaning: "Bisa", pinyin: "huì" },
  { word: "几", meaning: "Berapa", pinyin: "jǐ" },
  { word: "家", meaning: "Rumah", pinyin: "jiā" },
  { word: "叫", meaning: "Memanggil", pinyin: "jiào" },
  { word: "今天", meaning: "Hari ini", pinyin: "jīntiān" },
  { word: "九", meaning: "Sembilan", pinyin: "jiǔ" },
  { word: "开", meaning: "Membuka", pinyin: "kāi" },
  { word: "看", meaning: "Melihat", pinyin: "kàn" },
  { word: "看见", meaning: "Melihat", pinyin: "kànjiàn" },
  { word: "块", meaning: "Keping, yuan", pinyin: "kuài" },
  { word: "来", meaning: "Datang", pinyin: "lái" },
  { word: "老师", meaning: "Guru", pinyin: "lǎoshī" },
  { word: "了", meaning: "Telah", pinyin: "le" },
  { word: "冷", meaning: "Dingin", pinyin: "lěng" },
  { word: "里", meaning: "Di dalam", pinyin: "lǐ" },
  { word: "六", meaning: "Enam", pinyin: "liù" },
  { word: "妈妈", meaning: "Ibu", pinyin: "māma" },
  { word: "吗", meaning: "Apakah", pinyin: "ma" },
  { word: "买", meaning: "Membeli", pinyin: "mǎi" },
  { word: "猫", meaning: "Kucing", pinyin: "māo" },
  { word: "没", meaning: "Belum", pinyin: "méi" },
  { word: "没关系", meaning: "Tidak apa-apa", pinyin: "méi guānxi" },
  { word: "米饭", meaning: "Nasi", pinyin: "mǐfàn" },
  { word: "明天", meaning: "Besok", pinyin: "míngtiān" },
  { word: "名字", meaning: "Nama", pinyin: "míngzi" },
  { word: "哪", meaning: "Yang mana", pinyin: "nǎ" },
  { word: "那", meaning: "Itu", pinyin: "nà" },
  { word: "你好", meaning: "Halo", pinyin: "nǐ hǎo" },
  { word: "年", meaning: "Tahun", pinyin: "nián" },
  { word: "女儿", meaning: "Anak perempuan", pinyin: "nǚ'ér" },
  { word: "朋友", meaning: "Teman", pinyin: "péngyou" },
  { word: "漂亮", meaning: "Cantik", pinyin: "piàoliang" },
  { word: "苹果", meaning: "Apel", pinyin: "píngguǒ" },
  { word: "七", meaning: "Tujuh", pinyin: "qī" },
  { word: "钱", meaning: "Uang", pinyin: "qián" },
  { word: "请", meaning: "Silakan", pinyin: "qǐng" },
  { word: "去", meaning: "Pergi", pinyin: "qù" },
  { word: "热", meaning: "Panas", pinyin: "rè" },
  { word: "人", meaning: "Orang", pinyin: "rén" },
  { word: "三", meaning: "Tiga", pinyin: "sān" },
  { word: "商店", meaning: "Toko", pinyin: "shāngdiàn" },
  { word: "上", meaning: "Atas", pinyin: "shàng" },
  { word: "上午", meaning: "Pagi hari", pinyin: "shàngwǔ" },
  { word: "少", meaning: "Sedikit", pinyin: "shǎo" },
  { word: "谁", meaning: "Siapa", pinyin: "shéi" },
  { word: "什么", meaning: "Apa", pinyin: "shénme" },
  { word: "十", meaning: "Sepuluh", pinyin: "shí" },
  { word: "时候", meaning: "Waktu", pinyin: "shíhou" },
  { word: "是", meaning: "Adalah", pinyin: "shì" },
  { word: "书", meaning: "Buku", pinyin: "shū" },
  { word: "水", meaning: "Air", pinyin: "shuǐ" },
  { word: "水果", meaning: "Buah", pinyin: "shuǐguǒ" },
  { word: "睡觉", meaning: "Tidur", pinyin: "shuìjiào" },
  { word: "说", meaning: "Bicara", pinyin: "shuō" },
  { word: "四", meaning: "Empat", pinyin: "sì" },
  { word: "岁", meaning: "Umur", pinyin: "suì" },
  { word: "他", meaning: "Dia (laki)", pinyin: "tā" },
  { word: "她", meaning: "Dia (perempuan)", pinyin: "tā" },
  { word: "天气", meaning: "Cuaca", pinyin: "tiānqì" },
  { word: "听", meaning: "Mendengar", pinyin: "tīng" },
  { word: "同学", meaning: "Teman sekelas", pinyin: "tóngxué" },
  { word: "我", meaning: "Saya", pinyin: "wǒ" },
  { word: "我们", meaning: "Kami", pinyin: "wǒmen" },
  { word: "五", meaning: "Lima", pinyin: "wǔ" },
  { word: "喜欢", meaning: "Suka", pinyin: "xǐhuan" },
  { word: "下", meaning: "Bawah", pinyin: "xià" },
  { word: "下午", meaning: "Sore", pinyin: "xiàwǔ" },
  { word: "先生", meaning: "Tuan", pinyin: "xiānsheng" },
  { word: "现在", meaning: "Sekarang", pinyin: "xiànzài" },
  { word: "想", meaning: "Ingin", pinyin: "xiǎng" },
  { word: "小", meaning: "Kecil", pinyin: "xiǎo" },
  { word: "写", meaning: "Menulis", pinyin: "xiě" },
  { word: "谢谢", meaning: "Terima kasih", pinyin: "xièxie" },
  { word: "星期", meaning: "Minggu", pinyin: "xīngqī" },
  { word: "学生", meaning: "Siswa", pinyin: "xuésheng" },
  { word: "学习", meaning: "Belajar", pinyin: "xuéxí" },
  { word: "学校", meaning: "Sekolah", pinyin: "xuéxiào" },
  { word: "一", meaning: "Satu", pinyin: "yī" },
  { word: "医生", meaning: "Dokter", pinyin: "yīshēng" },
  { word: "有", meaning: "Ada", pinyin: "yǒu" },
  { word: "月", meaning: "Bulan", pinyin: "yuè" },
  { word: "再见", meaning: "Sampai jumpa", pinyin: "zàijiàn" },
  { word: "在", meaning: "Di", pinyin: "zài" },
  { word: "怎么", meaning: "Bagaimana", pinyin: "zěnme" },
  { word: "中国", meaning: "China", pinyin: "zhōngguó" },
  { word: "住", meaning: "Tinggal", pinyin: "zhù" },
  { word: "桌子", meaning: "Meja", pinyin: "zhuōzi" },
  { word: "走", meaning: "Jalan", pinyin: "zǒu" },
  { word: "昨天", meaning: "Kemarin", pinyin: "zuótiān" },
  { word: "坐", meaning: "Duduk", pinyin: "zuò" },
  { word: "做", meaning: "Melakukan", pinyin: "zuò" },
];
rawHSK1.forEach((item) => HSK_DATA[1].push({ ...item }));
const rawHSK2 = [
  { word: "吧", meaning: "Partikel usul", pinyin: "ba" },
  { word: "白", meaning: "Putih", pinyin: "bái" },
  { word: "百", meaning: "Seratus", pinyin: "bǎi" },
  { word: "帮助", meaning: "Membantu", pinyin: "bāngzhù" },
  { word: "报纸", meaning: "Koran", pinyin: "bàozhǐ" },
  { word: "比", meaning: "Lebih dari", pinyin: "bǐ" },
  { word: "别", meaning: "Jangan", pinyin: "bié" },
  { word: "长", meaning: "Panjang", pinyin: "cháng" },
  { word: "唱歌", meaning: "Menyanyi", pinyin: "chànggē" },
  { word: "出", meaning: "Keluar", pinyin: "chū" },
  { word: "穿", meaning: "Memakai", pinyin: "chuān" },
  { word: "从", meaning: "Dari", pinyin: "cóng" },
  { word: "错", meaning: "Salah", pinyin: "cuò" },
  { word: "打篮球", meaning: "Main basket", pinyin: "dǎ lánqiú" },
  { word: "但", meaning: "Tetapi", pinyin: "dàn" },
  { word: "到", meaning: "Sampai", pinyin: "dào" },
  { word: "得", meaning: "Partikel", pinyin: "de" },
  { word: "等", meaning: "Menunggu", pinyin: "děng" },
  { word: "第", meaning: "Ke-", pinyin: "dì" },
  { word: "对", meaning: "Benar", pinyin: "duì" },
  { word: "方便", meaning: "Nyaman", pinyin: "fāngbiàn" },
  { word: "房间", meaning: "Kamar", pinyin: "fángjiān" },
  { word: "非常", meaning: "Sangat", pinyin: "fēicháng" },
  { word: "高", meaning: "Tinggi", pinyin: "gāo" },
  { word: "告诉", meaning: "Memberi tahu", pinyin: "gàosu" },
  { word: "哥哥", meaning: "Kakak laki", pinyin: "gēge" },
  { word: "给", meaning: "Memberi", pinyin: "gěi" },
  { word: "跟", meaning: "Dengan", pinyin: "gēn" },
  { word: "公共汽车", meaning: "Bis umum", pinyin: "gōnggòng qìchē" },
  { word: "公司", meaning: "Perusahaan", pinyin: "gōngsī" },
  { word: "贵", meaning: "Mahal", pinyin: "guì" },
  { word: "国家", meaning: "Negara", pinyin: "guójiā" },
  { word: "果汁", meaning: "Jus buah", pinyin: "guǒzhī" },
  { word: "还", meaning: "Masih", pinyin: "hái" },
  { word: "还是", meaning: "Atau", pinyin: "háishì" },
  { word: "害怕", meaning: "Takut", pinyin: "hàipà" },
  { word: "黑", meaning: "Hitam", pinyin: "hēi" },
  { word: "红", meaning: "Merah", pinyin: "hóng" },
  { word: "欢迎", meaning: "Selamat datang", pinyin: "huānyíng" },
  { word: "黄", meaning: "Kuning", pinyin: "huáng" },
  { word: "回答", meaning: "Menjawab", pinyin: "huídá" },
  { word: "或者", meaning: "Atau", pinyin: "huòzhě" },
  { word: "几乎", meaning: "Hampir", pinyin: "jīhū" },
  { word: "机会", meaning: "Kesempatan", pinyin: "jīhuì" },
  { word: "极", meaning: "Sangat", pinyin: "jí" },
  { word: "记得", meaning: "Ingat", pinyin: "jìde" },
  { word: "家", meaning: "Rumah", pinyin: "jiā" },
  { word: "价格", meaning: "Harga", pinyin: "jiàgé" },
  { word: "坚持", meaning: "Bertahan", pinyin: "jiānchí" },
  { word: "检查", meaning: "Periksa", pinyin: "jiǎnchá" },
  { word: "简单", meaning: "Sederhana", pinyin: "jiǎndān" },
  { word: "健康", meaning: "Sehat", pinyin: "jiànkāng" },
  { word: "见面", meaning: "Bertemu", pinyin: "jiànmiàn" },
  { word: "教", meaning: "Mengajar", pinyin: "jiāo" },
  { word: "教室", meaning: "Kelas", pinyin: "jiàoshì" },
  { word: "街道", meaning: "Jalan", pinyin: "jiēdào" },
  { word: "结束", meaning: "Berakhir", pinyin: "jiéshù" },
  { word: "姐姐", meaning: "Kakak perempuan", pinyin: "jiějie" },
  { word: "介绍", meaning: "Memperkenalkan", pinyin: "jièshào" },
  { word: "紧张", meaning: "Gugup", pinyin: "jǐnzhāng" },
  { word: "近", meaning: "Dekat", pinyin: "jìn" },
  { word: "经常", meaning: "Sering", pinyin: "jīngcháng" },
  { word: "经理", meaning: "Manajer", pinyin: "jīnglǐ" },
  { word: "久", meaning: "Lama", pinyin: "jiǔ" },
  { word: "就", meaning: "Kemudian", pinyin: "jiù" },
  { word: "决定", meaning: "Memutuskan", pinyin: "juédìng" },
  { word: "觉得", meaning: "Merasa", pinyin: "juéde" },
];
rawHSK2.forEach((item) => HSK_DATA[2].push({ ...item }));
const rawHSK3 = [
  { word: "阿姨", meaning: "Bibi", pinyin: "āyí" },
  { word: "爱好", meaning: "Hobi", pinyin: "àihào" },
  { word: "安静", meaning: "Diam", pinyin: "ānjìng" },
  { word: "安全", meaning: "Aman", pinyin: "ānquán" },
  { word: "把", meaning: "Memegang", pinyin: "bǎ" },
  { word: "半", meaning: "Setengah", pinyin: "bàn" },
  { word: "办法", meaning: "Cara", pinyin: "bànfǎ" },
  { word: "办公室", meaning: "Kantor", pinyin: "bàngōngshì" },
  { word: "帮忙", meaning: "Membantu", pinyin: "bāngmáng" },
  { word: "包", meaning: "Tas", pinyin: "bāo" },
  { word: "饱", meaning: "Kenyang", pinyin: "bǎo" },
  { word: "保持", meaning: "Menjaga", pinyin: "bǎochí" },
  { word: "保护", meaning: "Melindungi", pinyin: "bǎohù" },
  { word: "保证", meaning: "Menjamin", pinyin: "bǎozhèng" },
  { word: "抱", meaning: "Memeluk", pinyin: "bào" },
  { word: "抱歉", meaning: "Maaf", pinyin: "bàoqiàn" },
  { word: "北方", meaning: "Utara", pinyin: "běifāng" },
  { word: "被", meaning: "Oleh", pinyin: "bèi" },
  { word: "比较", meaning: "Membandingkan", pinyin: "bǐjiào" },
  { word: "比赛", meaning: "Pertandingan", pinyin: "bǐsài" },
  { word: "必须", meaning: "Harus", pinyin: "bìxū" },
  { word: "变化", meaning: "Perubahan", pinyin: "biànhuà" },
  { word: "表示", meaning: "Mengekspresikan", pinyin: "biǎoshì" },
  { word: "表演", meaning: "Pertunjukan", pinyin: "biǎoyǎn" },
  { word: "宾馆", meaning: "Hotel", pinyin: "bīnguǎn" },
  { word: "冰箱", meaning: "Kulkas", pinyin: "bīngxiāng" },
  { word: "菜单", meaning: "Menu", pinyin: "càidān" },
  { word: "参加", meaning: "Berpartisipasi", pinyin: "cānjiā" },
  { word: "草", meaning: "Rumput", pinyin: "cǎo" },
  { word: "层", meaning: "Lantai", pinyin: "céng" },
  { word: "差", meaning: "Perbedaan", pinyin: "chà" },
  { word: "超市", meaning: "Supermarket", pinyin: "chāoshì" },
  { word: "衬衫", meaning: "Kemeja", pinyin: "chènshān" },
  { word: "成绩", meaning: "Prestasi", pinyin: "chéngjì" },
  { word: "城市", meaning: "Kota", pinyin: "chéngshì" },
  { word: "迟到", meaning: "Terlambat", pinyin: "chídào" },
  { word: "出现", meaning: "Muncul", pinyin: "chūxiàn" },
  { word: "厨房", meaning: "Dapur", pinyin: "chúfáng" },
  { word: "除了", meaning: "Kecuali", pinyin: "chúle" },
  { word: "船", meaning: "Kapal", pinyin: "chuán" },
  { word: "春", meaning: "Musim semi", pinyin: "chūn" },
  { word: "词语", meaning: "Kata", pinyin: "cíyǔ" },
  { word: "聪明", meaning: "Cerdas", pinyin: "cōngming" },
  { word: "打扫", meaning: "Membersihkan", pinyin: "dǎsǎo" },
  { word: "打算", meaning: "Merencanakan", pinyin: "dǎsuàn" },
  { word: "大家", meaning: "Semua", pinyin: "dàjiā" },
  { word: "大学", meaning: "Universitas", pinyin: "dàxué" },
  { word: "担心", meaning: "Khawatir", pinyin: "dānxīn" },
  { word: "蛋糕", meaning: "Kue", pinyin: "dàngāo" },
  { word: "当然", meaning: "Tentu saja", pinyin: "dāngrán" },
];
rawHSK3.forEach((item) => HSK_DATA[3].push({ ...item }));
const level4words = [
  { word: "爱情", meaning: "Cinta", pinyin: "àiqíng" },
  { word: "把握", meaning: "Memegang kendali", pinyin: "bǎwò" },
  { word: "抱怨", meaning: "Mengeluh", pinyin: "bàoyuàn" },
  { word: "背", meaning: "Punggung", pinyin: "bèi" },
  { word: "毕竟", meaning: "Bagaimanapun", pinyin: "bìjìng" },
  { word: "毕业", meaning: "Lulus", pinyin: "bìyè" },
  { word: "避免", meaning: "Menghindari", pinyin: "bìmiǎn" },
  { word: "标准", meaning: "Standar", pinyin: "biāozhǔn" },
  { word: "表现", meaning: "Penampilan", pinyin: "biǎoxiàn" },
  { word: "表扬", meaning: "Memuji", pinyin: "biǎoyáng" },
  { word: "并且", meaning: "Dan juga", pinyin: "bìngqiě" },
  { word: "博士", meaning: "Doktor", pinyin: "bóshì" },
  { word: "财富", meaning: "Kekayaan", pinyin: "cáifù" },
  { word: "材料", meaning: "Bahan", pinyin: "cáiliào" },
  { word: "参与", meaning: "Berpartisipasi", pinyin: "cānyù" },
  { word: "产生", meaning: "Menghasilkan", pinyin: "chǎnshēng" },
  { word: "长期", meaning: "Jangka panjang", pinyin: "chángqī" },
  { word: "超过", meaning: "Melebihi", pinyin: "chāoguò" },
  { word: "成功", meaning: "Sukses", pinyin: "chénggōng" },
  { word: "成熟", meaning: "Matang", pinyin: "chéngshú" },
];
level4words.forEach((w) => HSK_DATA[4].push(w));
const level5words = [
  { word: "辩论", meaning: "Debat", pinyin: "biànlùn" },
  { word: "采纳", meaning: "Menerima", pinyin: "cǎinà" },
  { word: "成分", meaning: "Komponen", pinyin: "chéngfèn" },
  { word: "承担", meaning: "Memikul", pinyin: "chéngdān" },
  { word: "程度", meaning: "Tingkat", pinyin: "chéngdù" },
  { word: "持续", meaning: "Berkelanjutan", pinyin: "chíxù" },
  { word: "冲突", meaning: "Konflik", pinyin: "chōngtū" },
  { word: "充分", meaning: "Cukup", pinyin: "chōngfèn" },
  { word: "重复", meaning: "Mengulang", pinyin: "chóngfù" },
  { word: "重视", meaning: "Mementingkan", pinyin: "zhòngshì" },
];
level5words.forEach((w) => HSK_DATA[5].push(w));
const level6words = [
  { word: "奥秘", meaning: "Misteri", pinyin: "àomì" },
  { word: "变迁", meaning: "Perubahan", pinyin: "biànqiān" },
  { word: "倡导", meaning: "Menganjurkan", pinyin: "chàngdǎo" },
  { word: "沉淀", meaning: "Mengendap", pinyin: "chéndiàn" },
  { word: "蓬勃", meaning: "Mekar", pinyin: "péngbó" },
  { word: "严谨", meaning: "Teliti", pinyin: "yánjǐn" },
  { word: "永恒", meaning: "Abadi", pinyin: "yǒnghéng" },
  { word: "障碍", meaning: "Halangan", pinyin: "zhàng'ài" },
];
level6words.forEach((w) => HSK_DATA[6].push(w));
for (let lvl = 1; lvl <= 6; lvl++)
  if (HSK_DATA[lvl].length === 0)
    HSK_DATA[lvl].push({ word: "测试", meaning: "Tes", pinyin: "cèshì" });

let currentLevel = 1,
  currentLevelWords = [],
  wrongCount = 0,
  currentQuestion = null,
  answered = false,
  waitingNext = false;
let historyStack = [];

const hanziEl = document.getElementById("hanziText");
const pinyinEl = document.getElementById("pinyinText");
const livesSpan = document.getElementById("livesCount");
const currentLevelNumSpan = document.getElementById("currentLevelNum");
const optionsDiv = document.getElementById("optionsContainer");
const resetBtn = document.getElementById("resetButton");
const topScorerDisplay = document.getElementById("topScorerDisplay");
const badgeLevel = document.getElementById("badgeLevel");

function updateTopScorerUI() {
  const scores = JSON.parse(localStorage.getItem("hsk_topscorers") || "[]");
  if (scores.length)
    topScorerDisplay.innerText = `${scores[0].name} (HSK ${scores[0].level} | ${scores[0].score} pts)`;
  else topScorerDisplay.innerText = "Belum ada";
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function updateUILevelInfo() {
  currentLevelNumSpan.innerText = currentLevel;
  if (badgeLevel) badgeLevel.innerText = `HSK ${currentLevel}`;
  livesSpan.innerText = 3 - wrongCount;
}
function resetCurrentLevel() {
  currentLevelWords = shuffleArray([...HSK_DATA[currentLevel]]);
  updateUILevelInfo();
}
function generateOptions(correctMeaning, level) {
  let pool = [];
  for (let lvl = Math.max(1, level - 1); lvl <= Math.min(6, level + 1); lvl++)
    HSK_DATA[lvl].forEach((w) => pool.push(w.meaning));
  pool = [...new Set(pool.filter((m) => m !== correctMeaning))];
  let opts = [correctMeaning];
  while (opts.length < 4 && pool.length) {
    let rand = Math.floor(Math.random() * pool.length);
    opts.push(pool[rand]);
    pool.splice(rand, 1);
  }
  while (opts.length < 4) opts.push("???", "Tidak tahu", "Lainnya");
  return shuffleArray(opts);
}
function renderQuestion() {
  if (!currentQuestion) return;
  hanziEl.innerText = currentQuestion.word;
  pinyinEl.innerText = currentQuestion.pinyin;
  const opts = generateOptions(currentQuestion.meaning, currentLevel);
  optionsDiv.innerHTML = "";
  opts.forEach((opt, idx) => {
    const colorClass = `opt-bg-${idx % 4}`;
    const btn = document.createElement("div");
    btn.className = `option-card ${colorClass} p-4 rounded-2xl shadow-md cursor-pointer font-semibold text-gray-800 text-center text-xl transition`;
    btn.textContent = opt;
    btn.addEventListener("click", () => handleAnswer(idx, opt, btn));
    optionsDiv.appendChild(btn);
  });
  answered = false;
  waitingNext = false;
}
function loadNewQuestion() {
  if (currentLevelWords.length === 0) {
    switch (currentLevel) {
      case 6:
        gameOver(true);
        break;
      default:
        currentLevel++;
        resetCurrentLevel();
        alert(`✨ Naik ke HSK ${currentLevel} ✨`);
        setTimeout(() => loadNewQuestion(), 1000);
        break;
    }
    return;
  }
  const randomIndex = Math.floor(Math.random() * currentLevelWords.length);
  currentQuestion = { ...currentLevelWords[randomIndex] };
  renderQuestion();
}
function handleAnswer(optIdx, selectedMeaning, btnElement) {
  if (answered || waitingNext) return;
  const isCorrect = selectedMeaning === currentQuestion.meaning;
  answered = true;
  waitingNext = true;

  // Simpan history dengan benar
  historyStack.push({
    question: currentQuestion,
    userCorrect: isCorrect,
    selectedMeaning: selectedMeaning,
    levelBefore: currentLevel,
    wrongCountBefore: wrongCount,
    remainingWords: [...currentLevelWords],
  });

  let action = "";
  if (isCorrect) {
    const idx = currentLevelWords.findIndex((w) => w.word === currentQuestion.word);
    if (idx !== -1) currentLevelWords.splice(idx, 1);
    action = "correct";
  } else {
    wrongCount++;
    livesSpan.innerText = 3 - wrongCount;
    action = wrongCount >= 3 ? "game_over" : "wrong";
  }

  if (action === "game_over") {
    gameOver(false);
    return;
  }

  // Highlight pilihan
  document.querySelectorAll(".option-card").forEach((card, idx) => {
    if (card.textContent === currentQuestion.meaning)
      card.classList.add("opt-correct-global");
    if (idx === optIdx && card.textContent !== currentQuestion.meaning)
      card.classList.add("opt-wrong-global");
    card.style.pointerEvents = "none";
  });
  updateUILevelInfo();

  const delay = action === "correct" ? 400 : 3000;
  setTimeout(() => {
    if (wrongCount >= 3) return;
    if (currentLevelWords.length === 0) {
      if (currentLevel < 6) {
        currentLevel++;
        resetCurrentLevel();
        alert(`✨ Naik ke HSK ${currentLevel} ✨`);
        loadNewQuestion();
      } else {
        gameOver(true);
      }
    } else {
      loadNewQuestion();
    }
  }, delay);
}
function gameOver(isWin) {
  const modalDiv = document.createElement("div");
  modalDiv.className = "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50";
  let message = isWin ? "SELAMAT! Anda menyelesaikan semua HSK 1-6!" : "GAME OVER!";
  const scoreValue = (currentLevel - 1) * 100 + (HSK_DATA[currentLevel].length - currentLevelWords.length);
  modalDiv.innerHTML = `<div class="bg-[#DBCEB2] rounded-2xl p-6 max-w-md w-full text-center shadow-2xl font-['BobbyJones']">
                <h2 class="text-4xl text-red font-bold mb-2">${message}</h2>
                <p class="mb-2 text-xl">Skor akhir: ${scoreValue} poin</p>
                <p class="text-2xl">Masukkan nama:</p>
                <input id="playerName" class="bg-white/50 text-3xl text-center p-2 rounded-xl w-full my-2" placeholder="Nama" maxlength="20">
                <div id="highScoreList" class="bg-white/50 rounded-xl p-3 my-2 text-center max-h-40 overflow-auto text-xl"></div>
                <button id="saveScoreBtn" class="bg-green-600 text-white px-6 py-2 rounded-full mt-2">Simpan & Main Lagi</button>
            </div>`;
  document.body.appendChild(modalDiv);
  const scores = JSON.parse(localStorage.getItem("hsk_topscorers") || "[]");
  const listDiv = modalDiv.querySelector("#highScoreList");
  listDiv.innerHTML = "<p class='font-bold'>TOP SCORER</p>";
  scores.slice(0, 5).forEach((s) => {
    listDiv.innerHTML += `<div>${s.name} - HSK ${s.level} | ${s.score} pts</div>`;
  });
  document.getElementById("saveScoreBtn").onclick = () => {
    const name = document.getElementById("playerName").value.trim() || "Anonim";
    let newScores = JSON.parse(localStorage.getItem("hsk_topscorers") || "[]");
    newScores.push({ name, level: currentLevel, score: scoreValue, date: Date.now() });
    newScores.sort((a, b) => b.score - a.score);
    if (newScores.length > 10) newScores.pop();
    localStorage.setItem("hsk_topscorers", JSON.stringify(newScores));
    updateTopScorerUI();
    modalDiv.remove();
    resetFullGame();
  };
}
function resetFullGame() {
  currentLevel = 1;
  wrongCount = 0;
  historyStack = [];
  resetCurrentLevel();
  answered = false;
  waitingNext = false;
  updateUILevelInfo();
  loadNewQuestion();
}

resetBtn.addEventListener("click", resetFullGame);
updateTopScorerUI();
resetCurrentLevel();
loadNewQuestion();