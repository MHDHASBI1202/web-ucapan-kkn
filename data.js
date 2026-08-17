/**
 * data.js — General message + 19 personal member messages
 *
 * LOGIN UTAMA : username = "umum" | password = "kkn2024"
 *
 * Setiap member punya password unik sendiri.
 * Password member: teman01 – teman19 (bisa diubah per orang)
 * Ubah `name` dan `nickname` sesuai nama asli anggota.
 */

/* ============================================================
   AKUN UTAMA (untuk login halaman umum)
============================================================ */
const GENERAL_AUTH = {
  username: "umum",
  password: "kkn2024"
};

/* ============================================================
   ISI HALAMAN UMUM
============================================================ */
const GENERAL = {
  letterBody: [
    "Tidak ada kata yang cukup untuk merangkum apa yang telah kita lalui bersama. Dua bulan yang terasa seperti seumur hidup — penuh keringat di lapangan, tawa yang meledak di tengah malam, dan air mata yang diam-diam kita tahan ketika hari-hari terakhir tiba.",
    "Kita datang sebagai dua puluh orang asing dari berbagai penjuru. Kita pergi sebagai satu keluarga. Di antara perbedaan kita — cara bicara, kebiasaan, mimpi yang berlainan — ada satu benang merah yang menyatukan kita: ketulusan untuk berjalan bersama, melewati hari-hari yang tidak mudah.",
    "Saya tidak akan bilang perpisahan ini tidak menyakitkan. Bohong jika saya berkata biasa saja. Setiap sudut desa ini menyimpan jejak kita. Setiap malam yang kita habiskan bersama akan terus hidup dalam lipatan ingatan yang paling aku jaga.",
    "Terima kasih sudah menjadi rumah, ketika kita jauh dari rumah kita masing-masing. Terima kasih sudah menjadi alasan untuk tersenyum, bahkan di hari-hari terberat sekalipun. Kita mungkin akan berpencar — ke kota-kota berbeda, mimpi-mimpi yang berbeda — tapi ikatan ini tidak akan luntur oleh jarak.",
    "Sampai kita bertemu lagi — entah di mana, entah kapan — jaga dirimu baik-baik. Dunia di luar sana butuh kebaikan yang kalian bawa."
  ],
  memories: [
    { icon: "🌅", text: "Pagi pertama di posko — semua masih canggung, tapi sudah tertawa bersama" },
    { icon: "🍳", text: "Memasak bersama dengan bahan seadanya, hasilnya justru yang paling enak" },
    { icon: "🌧️", text: "Kehujanan di jalan pulang dari program, basah kuyup tapi bahagia" },
    { icon: "🌙", text: "Malam-malam lesehan, bercerita tentang masa depan hingga dini hari" }
  ],
  quote: "Bukan lamanya waktu yang membuat kenangan abadi, tapi dalamnya rasa yang kita titipkan di sana."
};

/* ============================================================
   DATA 19 ANGGOTA
   password : password unik tiap orang (bisa diganti bebas)
   name     : ganti dengan nama asli
   nickname : ganti dengan panggilan khas / julukan
============================================================ */
const MEMBERS = [

  /* ——— ANGGOTA 1 ——— */
  {
    id: 1,
    name: "Anggota 1",
    nickname: "Si Tulang Punggung Kelompok",
    password: "teman01",
    salutation: "Untuk kamu yang selalu jadi sandaran,",
    letterBody: [
      "Ada orang-orang yang kehadirannya membuat segala sesuatu terasa lebih mungkin — dan kamu adalah salah satu dari mereka. Saat kelompok ini hampir goyah, kamu yang tetap berdiri tegak dan mengajak kami untuk tidak menyerah.",
      "Aku ingat betul bagaimana kamu diam-diam mengerjakan hal-hal yang tidak ada yang mau lakukan. Tanpa keluhan, tanpa pamrih. Keikhlasanmu adalah pelajaran paling berharga yang aku bawa pulang dari KKN ini.",
      "Kini saat kalian berpisah, ada rasa yang sulit dijelaskan. Seperti kehilangan seseorang yang sudah lama menjadi bagian dari rutinitasku. Aku harap kamu tahu bahwa kebaikanmu tidak pernah luput dari pandanganku.",
      "Pergilah ke tempat yang lebih tinggi. Kamu lebih dari layak mendapatkannya. Dan ketahuilah — di manapun nanti kita berada, namamu akan selalu kusebut dengan senyum."
    ],
    memories: [
      { icon: "💪", text: "Kamu yang pertama bangkit saat semua sudah lelah dan hampir menyerah" },
      { icon: "☕", text: "Kopi pagi bersamamu yang selalu memulai hari dengan lebih baik" },
      { icon: "📋", text: "Rapat tengah malam, kamu yang paling fokus dan paling sabar" }
    ],
    quote: "Kekuatan sejati bukan soal tidak pernah lelah — tapi soal tetap berdiri meski lelah."
  },

  /* ——— ANGGOTA 2 ——— */
  {
    id: 2,
    name: "Anggota 2",
    nickname: "Jiwa yang Menghangatkan",
    password: "teman02",
    salutation: "Untuk kamu yang selalu membawa kehangatan,",
    letterBody: [
      "Kalau ada satu hal yang membuat posko ini terasa seperti rumah, itu adalah kehadiranmu. Tawamu yang mudah menular, perhatianmu yang tulus pada setiap orang — kamu adalah perekat tak kasat mata di antara kita semua.",
      "Aku tidak akan lupa bagaimana kamu selalu tahu kapan seseorang sedang tidak baik-baik saja, bahkan tanpa perlu ditanya. Kemampuanmu merasakan orang lain adalah anugerah yang langka dan sangat berharga.",
      "Berpisah darimu rasanya seperti meninggalkan sumber cahaya. Tapi aku percaya, di manapun kamu pergi, cahaya itu akan terus menyinari orang-orang di sekitarmu.",
      "Terima kasih sudah menjadi tempat yang aman. Terima kasih sudah ada. Aku rindu bahkan sebelum kita benar-benar berpisah."
    ],
    memories: [
      { icon: "🌸", text: "Cara kamu menyambut semua orang tanpa terkecuali, hangat dan tulus" },
      { icon: "🫂", text: "Pelukanmu yang selalu tepat waktu saat seseorang membutuhkannya" },
      { icon: "🎶", text: "Senandungmu di pagi hari yang membuat semua terasa lebih ringan" }
    ],
    quote: "Ada orang yang ketika pergi, meninggalkan lubang yang tidak bisa diisi oleh siapapun."
  },

  /* ——— ANGGOTA 3 ——— */
  {
    id: 3,
    name: "Anggota 3",
    nickname: "Pikiran yang Selalu Bergerak",
    password: "teman03",
    salutation: "Untuk kamu yang tak pernah berhenti berpikir,",
    letterBody: [
      "Dua bulan bersamamu adalah dua bulan diajak berpikir lebih jauh dari yang biasanya aku lakukan. Kamu selalu punya pertanyaan, selalu punya sudut pandang baru — dan itu membuatku tumbuh tanpa aku sadari.",
      "Diskusi panjang bersamamu di malam hari, tentang hal-hal besar dan kecil, adalah salah satu bagian dari KKN ini yang paling aku syukuri. Kamu mengajarkanku bahwa berpikir kritis bukan berarti tidak peka, tapi justru bentuk kepedulian yang lebih dalam.",
      "Bawa semua ide besarmu ke dunia. Dunia butuh orang sepertimu — yang tidak puas dengan 'cukup', yang selalu ingin tahu, yang tidak takut untuk mempertanyakan.",
      "Sampai bertemu di titik kesuksesan kita masing-masing. Aku yakin perjalananmu akan luar biasa."
    ],
    memories: [
      { icon: "💡", text: "Saat kamu tiba-tiba punya ide brilian di tengah situasi yang paling kacau" },
      { icon: "📚", text: "Diskusi-diskusi malam yang terasa seperti kuliah terbaik yang pernah ada" },
      { icon: "🔭", text: "Cara kamu melihat masalah dari sudut yang tidak terpikirkan orang lain" }
    ],
    quote: "Rasa ingin tahu adalah kompas terbaik yang akan selalu membawamu ke tempat yang tepat."
  },

  /* ——— ANGGOTA 4 ——— */
  {
    id: 4,
    name: "Anggota 4",
    nickname: "Sang Periang Sejati",
    password: "teman04",
    salutation: "Untuk kamu yang membawa tawa ke mana-mana,",
    letterBody: [
      "Tidak ada yang bisa membuat suasana tegang menjadi cair secepat kamu. Di momen-momen paling melelahkan, saat semua orang sudah hampir putus asa, tawamu datang dan segalanya terasa lebih ringan.",
      "Tapi aku tahu — di balik tawa yang mudah itu, ada hati yang sangat dalam dan penuh perhatian. Kamu adalah bukti bahwa keceriaan bisa jadi bentuk keberanian. Tidak semua orang mampu tetap hangat di tengah kesulitan.",
      "Terima kasih sudah mengisi hari-hari KKN ini dengan warna. Tanpamu, cerita kita akan jauh lebih sepi. Kamu adalah bagian dari alasan mengapa aku akan mengenang masa ini dengan senyum.",
      "Jangan pernah padamkan tawa itu. Dunia sangat membutuhkannya."
    ],
    memories: [
      { icon: "😂", text: "Leluconmu yang tidak pernah gagal membuat semua orang tertawa" },
      { icon: "🎭", text: "Drama spontanmu saat program berlangsung — selalu menghibur" },
      { icon: "🌈", text: "Cara kamu mengubah momen biasa jadi penuh warna dan cerita" }
    ],
    quote: "Tawa bukan pelarian dari kenyataan — tawa adalah cara berani menghadapinya."
  },

  /* ——— ANGGOTA 5 ——— */
  {
    id: 5,
    name: "Anggota 5",
    nickname: "Diam yang Berbicara Lewat Karya",
    password: "teman05",
    salutation: "Untuk kamu yang bicara melalui apa yang kamu buat,",
    letterBody: [
      "Kamu mungkin bukan yang paling banyak bicara. Tapi setiap kali kamu bicara — entah lewat kata, lewat tindakan, atau lewat karya yang kamu hasilkan — semua orang memperhatikan. Ada kualitas dan kejujuran dalam setiap hal yang kamu lakukan.",
      "Ketelitianmu, kesabaranmu dengan detail-detail kecil yang orang lain lewatkan — itulah yang membuat hasil kerja tim kita selalu satu tingkat lebih baik. Banyak hal yang berjalan lancar diam-diam karena tanganmu.",
      "Aku belajar dari caramu: bahwa tidak semua hal perlu diucapkan keras-keras. Kadang, melakukan saja sudah cukup berbicara.",
      "Semoga jalan yang kamu pilih dipenuhi dengan karya-karya yang meninggalkan jejak. Dunia menantikan apa yang akan kamu ciptakan selanjutnya."
    ],
    memories: [
      { icon: "🎨", text: "Hasil karyamu yang selalu jauh melampaui ekspektasi semua orang" },
      { icon: "🔍", text: "Ketelitianmu memeriksa setiap detail kecil yang sering terlewatkan" },
      { icon: "🌿", text: "Ketenanganmu yang justru menjadi kekuatan terbesar di saat-saat genting" }
    ],
    quote: "Karya yang tulus akan selalu menemukan jalan menuju hati yang tepat."
  },

  /* ——— ANGGOTA 6 ——— */
  {
    id: 6,
    name: "Anggota 6",
    nickname: "Pemimpin yang Tidak Pernah Merasa Paling Depan",
    password: "teman06",
    salutation: "Untuk kamu yang memimpin tanpa harus selalu di depan,",
    letterBody: [
      "Definisi pemimpin yang sesungguhnya bukan yang paling keras suaranya atau paling banyak memberi perintah. Kamu mengajarkan itu. Kamu memimpin dengan cara yang paling langka: dengan mendengarkan, dengan memberi ruang, dan dengan memastikan semua orang merasa dihargai.",
      "Ada ketenangan dalam caramu menghadapi konflik. Di saat-saat yang paling menekan, kamu tetap dingin dan jernih. Itu bukan sesuatu yang bisa diajarkan — itu karakter, dan karaktermu sangat kuat.",
      "Aku beruntung pernah satu tim dengan seseorang sepertimu. Banyak hal yang aku pelajari dari cara kamu bersikap, lebih dari yang bisa aku jelaskan dengan kata-kata.",
      "Pergilah, dan pimpinlah hal-hal yang lebih besar. Kamu sudah siap."
    ],
    memories: [
      { icon: "🧭", text: "Saat kamu memimpin diskusi yang nyaris pecah dengan sangat bijaksana" },
      { icon: "🤝", text: "Cara kamu memastikan tidak ada anggota yang merasa tertinggal" },
      { icon: "⚡", text: "Kecepatanmu mengambil keputusan di saat waktu sangat terbatas" }
    ],
    quote: "Kepemimpinan sejati tidak diukur dari seberapa banyak pengikutmu, tapi seberapa besar kamu menumbuhkan mereka."
  },

  /* ——— ANGGOTA 7 ——— */
  {
    id: 7,
    name: "Anggota 7",
    nickname: "Hati yang Penuh Empati",
    password: "teman07",
    salutation: "Untuk kamu yang selalu merasakan apa yang orang lain rasakan,",
    letterBody: [
      "Dunia ini tidak selalu mudah untuk orang-orang dengan hati yang besar sepertimu. Kamu terlalu dalam merasakan — rasa sakit orang lain terasa seperti rasa sakitmu sendiri, kebahagiaan orang lain membuatmu ikut bahagia dengan sepenuh hati.",
      "Sifatmu itu adalah kekuatan, meski kadang mungkin terasa seperti beban. Di KKN ini, kamu adalah kompas moral kita. Kamu yang selalu mengingatkan kita untuk tidak kehilangan kemanusiaan di tengah kesibukan dan tekanan program.",
      "Tolong jaga hatimu yang besar itu. Jangan biarkan dunia membuatnya mengeras. Empatimu adalah hal yang paling dibutuhkan dunia saat ini.",
      "Aku menyayangimu, dan aku akan selalu mendoakanmu dari jauh."
    ],
    memories: [
      { icon: "💙", text: "Cara kamu duduk di samping yang sedang sedih, tanpa perlu berkata apa-apa" },
      { icon: "🌙", text: "Malam saat kamu mendengarkan cerita seseorang hingga larut, tulus tanpa batas" },
      { icon: "🕊️", text: "Kata-katamu yang selalu tepat saat situasi paling membutuhkannya" }
    ],
    quote: "Empati adalah jembatan yang menghubungkan satu hati ke hati yang lain."
  },

  /* ——— ANGGOTA 8 ——— */
  {
    id: 8,
    name: "Anggota 8",
    nickname: "Si Pekerja Keras Tanpa Tanda",
    password: "teman08",
    salutation: "Untuk kamu yang bekerja tanpa menunggu pengakuan,",
    letterBody: [
      "Ada kemuliaan dalam cara kamu bekerja. Tidak pernah mencari sorot lampu, tidak pernah meminta tepuk tangan. Kamu hadir, bekerja, dan pergi — meninggalkan hasil yang jauh lebih besar dari yang orang-orang sadari.",
      "Banyak hal yang berjalan lancar dalam program kita karena tangan-tanganmu yang bekerja di belakang layar. Jasamu tidak selalu tampak di permukaan, tapi pondasi yang kita bangun sangat terasa kekuatannya.",
      "Aku ingin kamu tahu: aku melihatmu. Aku melihat semua yang kamu lakukan. Dan aku sangat menghargainya, bahkan jika aku tidak selalu mengatakannya dengan lantang.",
      "Kerja kerasmu akan berbuah. Tidak hari ini, mungkin tidak besok — tapi akan datang masanya."
    ],
    memories: [
      { icon: "🌙", text: "Masih bekerja saat semua sudah terlelap — diam-diam memastikan semua siap" },
      { icon: "🔧", text: "Tanganmu yang selalu ada saat ada yang perlu diperbaiki" },
      { icon: "📦", text: "Perlengkapan yang selalu terorganisir — karena kamu yang selalu menjaganya" }
    ],
    quote: "Benih yang ditanam tanpa penonton pun akan tumbuh menjadi pohon yang kuat."
  },

  /* ——— ANGGOTA 9 ——— */
  {
    id: 9,
    name: "Anggota 9",
    nickname: "Petualang yang Berani",
    password: "teman09",
    salutation: "Untuk kamu yang selalu siap untuk hal baru,",
    letterBody: [
      "Kamu adalah salah satu orang yang paling berani aku kenal. Bukan berani dalam arti tidak pernah takut — tapi berani dalam arti tetap melangkah meski takut. Dan itu jauh lebih berharga.",
      "Di setiap program yang kita jalankan, kamu selalu jadi yang pertama mengangkat tangan, yang pertama mencoba, yang pertama bilang 'ayo kita coba'. Semangatmu menular, dan tanpamu — jujur saja — banyak hal tidak akan pernah terjadi.",
      "Keberanian bukan tentang tidak merasakan ketakutan. Keberanian adalah melakukannya meskipun takut. Dan kamu sudah membuktikan itu berkali-kali.",
      "Teruslah berpetualang. Dunia yang lebar itu menunggumu untuk dijelajahi."
    ],
    memories: [
      { icon: "🚀", text: "Kamu yang pertama mengangkat tangan saat semua orang ragu-ragu" },
      { icon: "🗺️", text: "Inisiatifmu mengajak semua menjelajahi sudut desa yang tak terduga" },
      { icon: "⭐", text: "Semangatmu yang tidak pernah padam bahkan di hari paling melelahkan" }
    ],
    quote: "Tidak ada perjalanan yang sia-sia bagi mereka yang memilih untuk terus berjalan."
  },

  /* ——— ANGGOTA 10 ——— */
  {
    id: 10,
    name: "Anggota 10",
    nickname: "Pendengar Terbaik yang Pernah Ada",
    password: "teman10",
    salutation: "Untuk kamu yang selalu punya waktu untuk mendengar,",
    letterBody: [
      "Di dunia yang penuh orang yang ingin didengar, kamu memilih untuk mendengarkan. Dan itu adalah hadiah yang sangat besar. Setiap orang di kelompok ini pernah merasakannya — betapa mudahnya bercerita kepadamu, betapa amannya berbagi denganmu.",
      "Kamu tidak selalu memberi solusi, kamu tidak selalu punya jawaban. Tapi kamu hadir. Kamu mendengar dengan matamu, dengan hatimu — dan itu sering kali jauh lebih berharga dari seribu kata nasihat.",
      "Terima kasih sudah menjadi telinga yang aman. Terima kasih sudah menjadi ruang yang nyaman. Aku harap kamu tahu bahwa kamu pun bisa bercerita — dan aku akan selalu ada untuk mendengarmu.",
      "Jaga dirimu, dan teruslah menjadi cahaya yang tenang itu."
    ],
    memories: [
      { icon: "👂", text: "Cara kamu mendengarkan — benar-benar mendengarkan — tanpa menghakimi" },
      { icon: "🍵", text: "Obrolan-obrolan panjang bersamamu di sudut yang paling tenang" },
      { icon: "🌿", text: "Ketenanganmu yang menjadi jangkar saat suasana mulai kacau" }
    ],
    quote: "Mendengarkan dengan sepenuh hati adalah cara paling mulia untuk mencintai seseorang."
  },

  /* ——— ANGGOTA 11 ——— */
  {
    id: 11,
    name: "Anggota 11",
    nickname: "Kreatif yang Mengubah Biasa Jadi Luar Biasa",
    password: "teman11",
    salutation: "Untuk kamu yang melihat keindahan di mana-mana,",
    letterBody: [
      "Bersamamu, hal-hal biasa menjadi tidak biasa. Kamu punya kemampuan langka untuk melihat potensi di tempat yang orang lain hanya melihat keterbatasan. Dan kamu tidak hanya melihat — kamu mewujudkan.",
      "Setiap program yang kita jalankan terasa lebih hidup dengan sentuhan kreatifmu. Bukan karena kamu paling keras bekerja, tapi karena kamu memberi jiwa pada apa yang kita buat. Ada roh dalam setiap hal yang kamu sentuh.",
      "Kreativitasmu bukan sekadar bakat — itu cara pandangmu pada hidup. Dan itu adalah sesuatu yang tidak bisa diajarkan, hanya bisa dikagumi.",
      "Teruslah berkarya. Teruslah melihat dunia dengan mata yang tidak pernah berhenti takjub itu."
    ],
    memories: [
      { icon: "✨", text: "Ide-idemu yang selalu datang di momen paling tak terduga" },
      { icon: "🎪", text: "Saat program terasa membosankan, kamu yang mengubah segalanya" },
      { icon: "🖌️", text: "Sentuhan estetikamu yang membuat setiap output tampak lebih bermakna" }
    ],
    quote: "Kreativitas adalah memberi kehidupan baru pada hal-hal yang sudah ada."
  },

  /* ——— ANGGOTA 12 ——— */
  {
    id: 12,
    name: "Anggota 12",
    nickname: "Kompas Moral Kelompok",
    password: "teman12",
    salutation: "Untuk kamu yang selalu tahu apa yang benar,",
    letterBody: [
      "Ada orang-orang yang kehadirannya membuat kelompok menjadi lebih baik hanya dengan cara mereka bersikap. Kamu adalah orang itu. Integritas yang kamu pegang tidak pernah goyah, bahkan di saat-saat yang paling menggoda untuk berkompromi.",
      "Aku belajar banyak dari caramu memegang prinsip. Bukan dengan cara yang kaku atau menghakimi, tapi dengan konsistensi yang tenang namun kuat. Kamu mengajarkan bahwa karakter dibangun dari pilihan-pilihan kecil yang tidak ada yang menyaksikan.",
      "Dunia sangat butuh lebih banyak orang sepertimu. Orang yang tidak kehilangan dirinya di tengah tekanan, yang tetap jujur ketika jujur itu tidak nyaman.",
      "Pegang terus prinsipmu. Itu adalah hartamu yang paling berharga."
    ],
    memories: [
      { icon: "⚖️", text: "Saat kamu dengan tenang mengingatkan kita untuk tetap pada jalur yang benar" },
      { icon: "🕊️", text: "Cara kamu menyelesaikan perselisihan dengan adil dan bijaksana" },
      { icon: "🌟", text: "Konsistensimu yang tidak pernah goyah, bahkan di momen paling kacau" }
    ],
    quote: "Karakter sejati adalah apa yang kamu lakukan saat tidak ada yang melihat."
  },

  /* ——— ANGGOTA 13 ——— */
  {
    id: 13,
    name: "Anggota 13",
    nickname: "Energi yang Tak Pernah Habis",
    password: "teman13",
    salutation: "Untuk kamu yang selalu memberi energi,",
    letterBody: [
      "Aku tidak tahu dari mana kamu mendapatkan energimu. Di saat orang lain sudah tumbang kelelahan, kamu masih berlari. Di saat semua orang sudah ingin menyerah, matamu masih bersinar. Itu adalah kekuatan yang luar biasa.",
      "Tapi lebih dari sekadar energi fisik, yang lebih aku kagumi adalah semangatmu yang menular. Kamu bisa membuat seseorang yang tadinya tidak mau ikut, akhirnya berdiri dan ikut berjalan bersamamu.",
      "KKN ini tidak akan sama tanpa semangat yang kamu bawa. Kamu adalah bahan bakar yang membuat mesin ini terus bergerak.",
      "Jaga energimu. Istirahat juga perlu. Tapi ketahuilah — semangatmu adalah hadiah untuk dunia."
    ],
    memories: [
      { icon: "⚡", text: "Semangatmu di pagi hari yang membuat semua orang ikut semangat" },
      { icon: "🏃", text: "Kamu yang paling bersemangat saat program lapangan dimulai" },
      { icon: "🎉", text: "Cara kamu merayakan setiap pencapaian kecil dengan penuh sukacita" }
    ],
    quote: "Semangat yang tulus tidak akan pernah habis — ia hanya berganti bentuk menjadi inspirasi."
  },

  /* ——— ANGGOTA 14 ——— */
  {
    id: 14,
    name: "Anggota 14",
    nickname: "Penjaga Cerita Kita",
    password: "teman14",
    salutation: "Untuk kamu yang mengingat hal-hal yang orang lain lupakan,",
    letterBody: [
      "Kamu adalah arsip hidup dari semua yang kita lalui. Detail-detail kecil yang terlewatkan orang lain — tanggal, momen, kata-kata yang diucapkan di sudut posko tengah malam — kamu ingat semua. Dan itu indah sekali.",
      "Bersamamu, kenangan kita terjaga. Ada rasa aman yang aneh ketika tahu bahwa ada seseorang yang akan mengingat, bahkan ketika kita sendiri mulai lupa.",
      "Terima kasih sudah menjadi penjaga cerita kita. Terima kasih sudah memastikan bahwa semua momen ini tidak hilang begitu saja ditelan waktu.",
      "Teruslah menulis cerita itu, teruslah mengingat. Karena ingatan yang kamu jaga adalah warisan yang paling berharga yang kita miliki bersama."
    ],
    memories: [
      { icon: "📸", text: "Cara kamu mendokumentasikan momen-momen yang terasa biasa tapi bermakna" },
      { icon: "📖", text: "Cerita-ceritamu tentang hari-hari lalu yang membuat semua tertawa dan terharu" },
      { icon: "🗓️", text: "Kamu yang selalu ingat tanggal, nama, dan detail yang tidak ada yang ingat" }
    ],
    quote: "Orang yang mengingat adalah orang yang paling setia mencintai kenangan."
  },

  /* ——— ANGGOTA 15 ——— */
  {
    id: 15,
    name: "Anggota 15",
    nickname: "Suara Ketenangan di Saat Ribut",
    password: "teman15",
    salutation: "Untuk kamu yang selalu tenang dalam badai,",
    letterBody: [
      "Di kelompok yang penuh energi ini, kamu adalah pusat yang diam. Dan di pusat yang diam itulah sering kali letak kekuatan yang paling besar. Kamu tidak pernah panik, tidak pernah ikut larut dalam kegaduhan — kamu hanya hadir, tenang, dan entah bagaimana itu membuat segalanya terasa lebih terkendali.",
      "Ketenangan bukan berarti tidak peduli. Ketenangan adalah bentuk kepedulian yang paling dewasa — dan kamu sudah menguasainya. Banyak situasi yang bisa menjadi jauh lebih buruk kalau bukan karena kehadiranmu yang menstabilkan.",
      "Aku belajar dari caramu: bahwa tidak semua hal perlu ditanggapi dengan reaksi berlebihan. Bahwa kadang, diam dan tenang adalah pilihan paling kuat yang bisa diambil.",
      "Bawa ketenangan itu ke manapun kamu pergi. Dunia sangat membutuhkannya."
    ],
    memories: [
      { icon: "🌊", text: "Cara kamu tetap seperti laut yang tenang saat situasi paling bergejolak" },
      { icon: "🧘", text: "Nasihatmu yang singkat namun selalu tepat sasaran" },
      { icon: "🕯️", text: "Kehadiranmu yang senyap tapi selalu terasa — seperti cahaya lilin di ruang gelap" }
    ],
    quote: "Ketenangan bukan kosong. Ketenangan adalah samudera yang sangat dalam."
  },

  /* ——— ANGGOTA 16 ——— */
  {
    id: 16,
    name: "Anggota 16",
    nickname: "Penyambung Hati Antar Anggota",
    password: "teman16",
    salutation: "Untuk kamu yang selalu mempererat yang renggang,",
    letterBody: [
      "Kalau kelompok ini adalah sebuah kain, kamu adalah benang yang menjahit semua potongannya menjadi satu. Ketika ada yang mulai merenggang, kamu yang bergerak pertama untuk mempererat. Ketika ada yang merasa tidak terlihat, kamu yang memastikan mereka tahu bahwa mereka penting.",
      "Kemampuanmu membaca dinamika kelompok dan merespons dengan cara yang tepat adalah keterampilan yang tidak dimiliki semua orang. Kamu sudah membuat kelompok ini lebih utuh dari yang seharusnya.",
      "Terima kasih sudah menjadi jembatan. Terima kasih sudah merawat keutuhan kita dengan caramu yang halus tapi sangat nyata.",
      "Di tempat barumu nanti, aku yakin kamu akan melakukan hal yang sama — menjadi pemersatu, menjadi penyambung. Itu adalah panggilanmu."
    ],
    memories: [
      { icon: "🧵", text: "Momenmu mendamaikan dua pihak yang hampir bertengkar dengan sangat halus" },
      { icon: "🤲", text: "Cara kamu memastikan semua orang merasa diterima dan dihargai" },
      { icon: "💬", text: "Percakapan-percakapan kecilmu yang menjaga koneksi antar anggota tetap hangat" }
    ],
    quote: "Orang yang mempererat hubungan orang lain adalah orang yang paling kaya secara batiniah."
  },

  /* ——— ANGGOTA 17 ——— */
  {
    id: 17,
    name: "Anggota 17",
    nickname: "Otak Strategis yang Terselubung Kerendahan Hati",
    password: "teman17",
    salutation: "Untuk kamu yang selalu punya rencana cadangan,",
    letterBody: [
      "Aku sering kagum diam-diam pada cara berpikirmu. Saat yang lain masih mencari arah, kamu sudah dua langkah ke depan. Saat yang lain baru menyadari masalah, kamu sudah menyiapkan solusi.",
      "Tapi yang paling mengesankan bukan kecerdasanmu sendiri — melainkan cara kamu menggunakan kecerdasanmu untuk mengangkat orang lain. Kamu tidak pernah membuat orang merasa bodoh di dekatmu. Itu adalah kualitas yang sangat langka dan sangat berharga.",
      "Terima kasih sudah menjadi otak dan hati yang berjalan beriringan. KKN ini jauh lebih baik karena strategimu yang terekspresikan dengan rendah hati.",
      "Masa depan menantikanmu dengan tangan terbuka. Dan aku tidak sabar melihat betapa jauhnya kamu akan melangkah."
    ],
    memories: [
      { icon: "🧩", text: "Cara kamu memecah masalah kompleks menjadi langkah-langkah yang sederhana" },
      { icon: "🗺️", text: "Rencanamu yang selalu punya plan B, C, bahkan D" },
      { icon: "🤫", text: "Ide-ide besarmu yang sering kali kamu kemukakan dengan sangat rendah hati" }
    ],
    quote: "Kecerdasan yang dipadu dengan kerendahan hati adalah kombinasi paling mematikan yang ada."
  },

  /* ——— ANGGOTA 18 ——— */
  {
    id: 18,
    name: "Anggota 18",
    nickname: "Jiwa Bebas yang Menginspirasi",
    password: "teman18",
    salutation: "Untuk kamu yang tidak pernah takut jadi dirimu sendiri,",
    letterBody: [
      "Ada sesuatu yang sangat membebaskan dari caramu menjalani hidup. Kamu tidak sibuk menjadi apa yang orang harapkan — kamu sibuk menjadi dirimu sendiri sepenuhnya. Dan keautentikan itu begitu langka dan begitu indah.",
      "Di sebuah dunia yang sering menuntut kita untuk menyesuaikan diri, kamu memilih untuk tetap utuh. Kamu mengajarkan — tanpa pernah berniat mengajarkan — bahwa tidak ada yang lebih kuat dari seseorang yang tidak takut untuk menjadi dirinya sendiri.",
      "Bersamamu, aku belajar untuk lebih berani menjadi diriku. Itu adalah hadiah yang sangat besar, dan aku tidak tahu cara mengucapkan terima kasih yang cukup untuknya.",
      "Teruslah bebas. Teruslah jadi kamu. Dunia membutuhkan jiwamu yang tidak mau dikekang itu."
    ],
    memories: [
      { icon: "🦋", text: "Cara kamu menjalani hari-hari dengan penuh autentisitas yang membebaskan" },
      { icon: "🎵", text: "Momen-momen spontanmu yang selalu tak terduga dan selalu berkesan" },
      { icon: "🌻", text: "Cara kamu mekar sepenuhnya tanpa membutuhkan persetujuan siapapun" }
    ],
    quote: "Jadi dirimu sendiri adalah bentuk keberanian tertinggi di dunia yang penuh tekanan untuk menjadi orang lain."
  },

  /* ——— ANGGOTA 19 ——— */
  {
    id: 19,
    name: "Anggota 19",
    nickname: "Si Terakhir yang Paling Berkesan",
    password: "teman19",
    salutation: "Untuk kamu, yang membuat cerita ini lengkap,",
    letterBody: [
      "Kamu tahu tidak — kadang orang yang paling diam-diam berpengaruh adalah orang yang paling jarang disebut. Bukan karena tidak penting, justru sebaliknya. Karena kontribusinya sudah menyatu begitu dalam ke dalam semuanya hingga sulit untuk dipisahkan.",
      "Begitulah aku melihatmu. Kehadiranmu adalah bagian yang tidak bisa dihilangkan dari cerita KKN ini. Tanpa kamu, ada sesuatu yang tidak akan lengkap — ada tawa yang tidak akan ada, ada momen yang tidak akan terjadi.",
      "Dari sekian banyak kenangan yang aku bawa pulang, beberapa yang paling berharga melibatkan kamu. Dan aku bersyukur untuk itu.",
      "Ini bukan selamat tinggal yang sungguh-sungguh. Ini hanya 'sampai kita bertemu lagi, dalam cerita kita yang berikutnya.'"
    ],
    memories: [
      { icon: "🌠", text: "Momen terakhir bersamamu — yang terasa begitu singkat dan begitu berharga" },
      { icon: "💫", text: "Cara kamu ada tanpa perlu berlebihan — dan itu lebih dari cukup" },
      { icon: "🫶", text: "Semua hal kecil yang kamu lakukan yang membuat perbedaan yang besar" }
    ],
    quote: "Setiap akhir adalah awal dari sesuatu yang baru — dan aku tidak sabar mendengar cerita barumu."
  }

]; // end MEMBERS
