/**
 * data.js — General message + 19 personal member messages
 *
 * Tone: persahabatan, solid, santai, geng — bukan romantis/keluarga
 *
 * Ubah `name` dan `nickname` sesuai nama asli anggota.
 * Password bisa diganti bebas per orang.
 */

/* ============================================================
   AKUN UTAMA (untuk login halaman umum)
============================================================ */
const GENERAL_AUTH = {
  username: "umum",
  password: "kkn2024"
};

/* ============================================================
   KUTIPAN BERGILIR — Card ke-20
   Berganti otomatis setiap beberapa detik
============================================================ */
const ROTATING_QUOTES = [
  "Dua bulan bareng kalian, dan itu cukup buat aku ngerasa punya geng seumur hidup. 🤙",
  "KKN ngajarin banyak hal — tapi yang paling berharga adalah kalian.",
  "Dari yang tadinya nggak kenal, sekarang susah buat nggak kangen.",
  "Gila ya, orang-orang asing bisa jadi sepenting ini dalam waktu dua bulan.",
  "Kita buktiin bahwa 20 orang random bisa jadi tim yang solid.",
  "Bukan berarti putus kontak. Nanti reunian, pasti ada yang nangis duluan.",
  "Tiap foto di galeri itu bakal selalu bikin senyum sendiri.",
  "Kita udah survive bareng — itu nggak bisa dilupain begitu aja.",
  "Semoga kabar kalian selalu baik, di manapun sekarang.",
  "Posko itu kecil, tapi cerita yang lahir di sana nggak ada habisnya.",
  "Masih sering inget momen-momen random yang entah kenapa justru paling berkesan.",
  "Kalau nanti nanya 'gimana KKN dulu?' — jawabannya pasti sambil senyum.",
  "Semua orang di sini ninggalin kesan masing-masing. Serius.",
  "Jarang-jarang ketemu orang yang bisa bikin capek tapi sekaligus seneng.",
  "Ini bukan perpisahan — ini cuma jedain dulu sebelum cerita lanjut.",
  "Yang paling kangen? Sesi ngobrol nggak jelas tengah malem itu.",
  "KKN bukan cuma program — ini juga tempat kita nemu teman yang beneran.",
  "Dari urusan program sampe drama posko, kita lewatin semuanya bareng.",
  "Hati-hati di jalan, sukses di tujuan, dan jangan lupa kabarin. 👋",
  "Makasih udah jadi bagian dari cerita ini. Serius, makasih banget."
];

/* ============================================================
   ISI HALAMAN UMUM
============================================================ */
const GENERAL = {
  letterBody: [
    "Jujur, waktu pertama kali kita semua kumpul, aku nggak nyangka bakal seakrab ini. Dua puluh orang dari berbagai jurusan, kebiasaan yang beda-beda, dan ekspektasi yang masing-masing juga beda. Tapi entah gimana, itu semua justru yang bikin seru.",
    "Dua bulan itu nggak selalu mulus. Ada hari-hari yang melelahkan banget, ada momen yang bikin frustrasi, ada juga situasi yang nggak ada di buku panduan manapun. Tapi kita ngatasinnya bareng — dan itu yang bikin pengalaman ini beda dari yang lain.",
    "Yang aku inget bukan cuma program-programnya. Yang paling membekas justru hal-hal kecil: ngobrol random sampe larut, masak bareng dengan bahan seadanya, ketawa soal hal yang sebenernya nggak terlalu lucu, atau diem bareng setelah hari yang panjang.",
    "Sekarang kita balik ke jalur masing-masing. Tapi dua bulan ini udah ninggalin sesuatu — entah itu pelajaran, kenangan, atau minimal kontak yang (mudah-mudahan) nggak di-skip kalau muncul di notifikasi.",
    "Hati-hati di jalan, sukses di apapun yang lagi dikejar, dan sesekali kabarin. Kalian udah jadi bagian dari cerita yang nggak bakal aku hapus."
  ],
  memories: [
    { icon: "😅", text: "Hari pertama di posko — semua masih canggung, belum tau siapa ngapain" },
    { icon: "🍳", text: "Masak bareng dengan bahan seadanya — hasilnya ajaib, entah enak entah nggak" },
    { icon: "🌧️", text: "Kehujanan waktu program — nggak ada yang siap, semua tetap jalan" },
    { icon: "🌙", text: "Malam-malam ngobrol nggak jelas di posko sampai pada ketiduran sendiri" }
  ],
  quote: "Nggak semua hal yang berharga itu direncanain — kadang yang paling berkesan justru yang nggak terduga."
};

/* ============================================================
   DATA 19 ANGGOTA
   password : password unik tiap orang (bisa diganti bebas)
   name     : ganti dengan nama asli
   nickname : ganti dengan julukan / kesan khas
============================================================ */
const MEMBERS = [

  /* ——— ANGGOTA 1 : HABIB ——— */
  {
    id: 1,
    name: "Habib",
    nickname: "Yang Selalu Nongol Pas Dibutuhin",
    password: "kocak",
    salutation: "Buat Habib,",
    letterBody: [
      "Oke jadi gini, Bib — dari sekian banyak orang di kelompok ini, kamu tuh salah satu yang paling susah didefinisiin. Nggak selalu paling rame, nggak selalu paling diem, tapi entah kenapa tiap ada yang perlu dibereskan, kamu ada. Nggak drama, nggak minta tepuk tangan. Ya udah, gitu aja.",
      "Aku inget waktu situasi lagi lumayan ruwet dan semua orang udah mulai pada stress sendiri-sendiri — kamu tuh yang tetap kalem. Bukan kalem cuek, tapi kalem yang kayak 'oke ini bisa diselesaiin, tenang'. Dan entah kenapa itu nular. Jadi makasih buat itu, Bib.",
      "Di luar urusan program, kamu juga lumayan tolol sebenernya — dan itu yang bikin seru. Nggak ada momen boring kalau kamu lagi nyeletuk sesuatu yang nggak ada angin nggak ada hujan tapi langsung bikin ketawa. Itu bakat langka, Bib. Pertahanin.",
      "Sukses buat apapun yang lagi kamu kejar sekarang. Dan kalau nanti reunian, kamu wajib dateng — karena kalau nggak ada kamu, pasti ada yang kurang."
    ],
    memories: [
      { icon: "😂", text: "Celetukan random-mu yang tiba-tiba dateng dan langsung bikin semua ngakak" },
      { icon: "🔧", text: "Waktu kamu diem-diem beresin sesuatu yang sebenernya bukan tugasmu" },
      { icon: "☕", text: "Ngopi bareng sambil ngomongin hal nggak penting tapi somehow menyenangkan" }
    ],
    quote: "Orang yang bisa bikin situasi gawat terasa lebih ringan itu langka. Kamu salah satunya, Bib."
  },

  /* ——— ANGGOTA 2 ——— */
  {
    id: 2,
    name: "Anggota 2",
    nickname: "Yang Selalu Tau Kalau Ada yang Lagi Nggak Oke",
    password: "teman02",
    salutation: "Buat kamu,",
    letterBody: [
      "Nggak banyak orang yang punya insting kayak kamu — bisa ngerasain kalau ada yang lagi nggak beres, tanpa harus ditanya dulu. Di kelompok yang rame dan penuh drama jadwal ini, itu hal yang ternyata penting banget.",
      "Kamu tipe orang yang bikin suasana posko nggak jadi tempat yang menegangkan. Bukan karena kamu lebay ceria, tapi karena kamu hadir dengan cara yang genuine. Orang nyaman ngomong sama kamu, dan itu bukan sesuatu yang semua orang punya.",
      "Semoga di tempat baru kamu nanti, orang-orang di sekitar kamu ngerasa beruntung punya kamu. Karena emang beneran beruntung.",
      "Jaga diri, jangan terlalu capek ngurusin orang lain sampe lupa ngurusin diri sendiri."
    ],
    memories: [
      { icon: "👀", text: "Cara kamu 'check-in' ke orang yang kayaknya lagi nggak oke — subtle tapi tepat" },
      { icon: "🛋️", text: "Ngobrol di posko waktu yang lain udah pada tidur — jadi lebih enteng setelahnya" },
      { icon: "😌", text: "Kehadiranmu yang bikin suasana nggak tegang meski situasi lagi ruwet" }
    ],
    quote: "Peka bukan berarti ikut tenggelam — itu berarti tau kapan harus hadir."
  },

  /* ——— ANGGOTA 3 ——— */
  {
    id: 3,
    name: "Anggota 3",
    nickname: "Otaknya Jalan Mulu",
    password: "teman03",
    salutation: "Buat kamu yang nggak bisa nggak mikir,",
    letterBody: [
      "Ngobrol sama kamu itu kadang bikin aku ngerasa ketinggalan kereta — kamu udah tiga langkah ke depan sementara yang lain masih nunggu di stasiun. Tapi yang bikin oke adalah kamu nggak nyuruh semua orang lari — kamu justru nunggu dan ngajakin bareng.",
      "Diskusi-diskusi random yang kita lakuin, kadang sampe nyambung ke hal-hal yang jauh dari topik awal — itu yang aku suka. Kamu tipe orang yang bikin obrolan jadi lebih worth it dari sekadar basa-basi.",
      "Apapun yang lagi kamu kejar sekarang, kayaknya otak kamu udah setengah jalan duluan. Manfaatin itu dengan bener.",
      "Dan sesekali istirahat — otak kamu juga butuh jeda, Bro."
    ],
    memories: [
      { icon: "💡", text: "Waktu kamu tiba-tiba punya solusi di situasi yang kayaknya udah buntu" },
      { icon: "🌙", text: "Diskusi malam yang mulai dari topik A, nyasar ke Z, dan entah kenapa enlightening" },
      { icon: "🤔", text: "Ekspresimu waktu lagi mikir keras — keliatan banget rodanya muter" }
    ],
    quote: "Pikiran yang terus bergerak itu aset — asal tahu kapan juga harus berhenti dan nikmatin hasilnya."
  },

  /* ——— ANGGOTA 4 ——— */
  {
    id: 4,
    name: "Anggota 4",
    nickname: "Sumber Chaos yang Menyenangkan",
    password: "teman04",
    salutation: "Buat kamu yang selalu bikin rame,",
    letterBody: [
      "Hari-hari di posko tanpa kamu pasti lebih sepi dan jauh lebih membosankan. Bukan lebih kondusif — lebih membosankan. Kamu tuh sumber energi yang aneh, yang entah gimana caranya selalu bikin situasi jadi lebih hidup.",
      "Dan yang bikin respect adalah kamu bisa bikin orang ketawa di momen yang harusnya menegangkan. Itu bukan sekadar badut — itu kemampuan sosial yang nggak semua orang punya.",
      "Di luar semua itu, kamu juga tipe yang genuinely peduli sama orang-orang di sekitar kamu. Itu yang bikin kerameanmu nggak ganggu, tapi justru bikin nyaman.",
      "Terus jadi kamu — tapi mungkin volume-nya bisa dikecil dikit kalau lagi jam tidur. Haha."
    ],
    memories: [
      { icon: "💀", text: "Momen kamu nyeletuk sesuatu pas situasi lagi serius — dan semua malah ngakak" },
      { icon: "🎭", text: "Drama kecil-kecilan yang kamu bikin dan entah kenapa semua pada ikutan" },
      { icon: "🔊", text: "Suaramu yang pertama kedengeran di pagi hari — pertanda hari ini bakal seru" }
    ],
    quote: "Ada orang yang bikin tempat jadi ramai. Dan ada orang yang bikin tempat jadi hidup. Kamu yang kedua."
  },

  /* ——— ANGGOTA 5 ——— */
  {
    id: 5,
    name: "Anggota 5",
    nickname: "Yang Kerjaannya Nggak Banyak Ngomong tapi Outputnya Selalu Oke",
    password: "teman05",
    salutation: "Buat kamu yang buktiin dengan hasil,",
    letterBody: [
      "Kamu tuh tipe yang nggak banyak janji tapi selalu beres. Di tengah banyaknya orang yang suka gembar-gembor tapi eksekusinya biasa aja, kamu beda — diem, gerak, selesai.",
      "Banyak hal yang berjalan lancar dalam program kita itu karena ada kamu yang ngerjainnya tanpa banyak ribut. Itu mungkin keliatan sepele, tapi buat yang ngeh — itu bukan hal kecil.",
      "Kamu ngajarin bahwa nggak perlu banyak ngomong buat direspek. Cukup konsisten dan bisa diandalin.",
      "Semoga di tempat selanjutnya, kamu ketemu orang-orang yang bisa menghargai cara kerja kamu."
    ],
    memories: [
      { icon: "✅", text: "Tugasmu selalu selesai duluan — dan hasilnya jarang perlu direvisi" },
      { icon: "🤫", text: "Kamu yang diem-diem beresin hal-hal yang orang lain bahkan belum sadar perlu dibereskan" },
      { icon: "👀", text: "Ekspresi orang-orang waktu sadar kamu udah kelar duluan sementara mereka masih muter-muter" }
    ],
    quote: "Output nggak bohong. Dan kamu udah buktiin itu berkali-kali."
  },

  /* ——— ANGGOTA 6 ——— */
  {
    id: 6,
    name: "Anggota 6",
    nickname: "Komandan yang Nggak Galak",
    password: "teman06",
    salutation: "Buat kamu yang bisa mimpin tanpa harus berasa dipimpin,",
    letterBody: [
      "Nggak gampang lho, mimpin orang-orang yang punya kepala masing-masing dan pendapat yang beda-beda. Tapi kamu lakuin itu dengan cara yang nggak bikin orang ngerasa diatur — dan itu bukan hal kecil.",
      "Kamu dengerin dulu sebelum mutusin. Kamu kasih ruang buat orang lain ngomong. Dan waktu udah mutusin, kamu stick dengan itu. Kombinasi yang jarang.",
      "Banyak yang bisa belajar dari caramu. Termasuk aku.",
      "Mau jadi apapun nanti, skill itu bakal kepake terus. Serius."
    ],
    memories: [
      { icon: "🧭", text: "Waktu diskusi mulai nggak jelas arah dan kamu yang bawa balik ke jalur" },
      { icon: "🤝", text: "Cara kamu dengerin semua pihak sebelum ambil keputusan — sabar tapi tegas" },
      { icon: "😤", text: "Ekspresimu waktu ada yang males-malesan — diomelin tapi tetap nggak kasar" }
    ],
    quote: "Pemimpin yang baik bukan yang paling keras suaranya — tapi yang paling konsisten arahnya."
  },

  /* ——— ANGGOTA 7 ——— */
  {
    id: 7,
    name: "Anggota 7",
    nickname: "Yang Paling Bisa Dibuat Curhat",
    password: "teman07",
    salutation: "Buat kamu yang selalu ada kalau ada yang mau ngomong,",
    letterBody: [
      "Di kelompok yang cukup rame dan penuh dinamika ini, kehadiran orang seperti kamu itu penting banget. Nggak semua orang bisa jadi pendengar yang baik — banyak yang nunggu giliran ngomongnya sendiri. Kamu beda.",
      "Orang nyaman cerita ke kamu bukan karena kamu selalu punya jawaban, tapi karena kamu emang dengerin. Ada bedanya antara dengerin dan nunggu giliran — dan kamu tahu bedanya.",
      "Jaga diri ya. Jangan sampai terlalu sibuk jadi tempat sandaran orang lain sampe lupa kamu juga kadang butuh tempat ngomong.",
      "Kalau butuh ngobrol, line masih ada — dan aku nggak akan skip notifnya."
    ],
    memories: [
      { icon: "🫂", text: "Sesi curhat random yang entah gimana selalu bikin lebih enteng setelahnya" },
      { icon: "🌃", text: "Ngobrol tengah malam waktu yang lain udah pada tidur — jadi terasa lebih aman" },
      { icon: "👂", text: "Cara kamu dengerin — nggak buru-buru, nggak ngehakimin, cukup hadir" }
    ],
    quote: "Jadi pendengar yang bener itu bukan soal diam — itu soal hadir sepenuhnya."
  },

  /* ——— ANGGOTA 8 ——— */
  {
    id: 8,
    name: "Anggota 8",
    nickname: "Di Balik Layar tapi Ngaruhnya Gede",
    password: "teman08",
    salutation: "Buat kamu yang kerjanya jarang keliatan tapi dampaknya kerasa,",
    letterBody: [
      "Banyak hal yang lancar bukan cuma karena yang tampil di depan — tapi karena ada yang ngurus di belakang tanpa banyak ribut. Dan kamu sering ada di posisi itu.",
      "Kamu nggak tipe yang butuh disorot. Kamu lebih suka selesai dan beres. Dan jujur, di dunia yang kebanyakan orang pengen dilihat — itu refreshing banget.",
      "Kontribusimu mungkin nggak selalu kelihatan di foto atau laporan — tapi orang-orang yang ngerasain dampaknya tahu.",
      "Semoga ke depannya kamu ketemu lingkungan yang bisa menghargai cara kerja kayak gitu."
    ],
    memories: [
      { icon: "🌙", text: "Masih aktif ngurusin sesuatu waktu yang lain udah pada istirahat" },
      { icon: "🔧", text: "Diem-diem beresin hal teknis yang kalau nggak dibereskan, semua bisa kacau" },
      { icon: "📦", text: "Logistik dan perlengkapan yang entah kenapa selalu somehow siap — itu pasti ada kamu-nya" }
    ],
    quote: "Yang paling banyak ngomong bukan selalu yang paling banyak kontribusi."
  },

  /* ——— ANGGOTA 9 ——— */
  {
    id: 9,
    name: "Anggota 9",
    nickname: "Gas Duluan, Pikir Belakangan",
    password: "teman09",
    salutation: "Buat kamu yang nggak takut coba duluan,",
    letterBody: [
      "Kamu tipe orang yang langsung angkat tangan pas ada yang nanya 'siapa yang mau coba?' — dan itu lebih langka dari yang kelihatan. Banyak yang nunggu orang lain duluan. Kamu nggak.",
      "Semangatmu itu nular — nggak selalu dengan kata-kata, tapi dengan contoh. Dan cara itu jauh lebih efektif.",
      "Banyak hal yang terjadi di KKN ini dimulai karena ada yang berani mulai duluan. Sering kali itu kamu.",
      "Terus kayak gitu — cuma mungkin sesekali pikir dulu dikit sebelum gas. Biar nggak nabrak. Haha."
    ],
    memories: [
      { icon: "🙋", text: "Tangan kamu yang pertama ke atas waktu semua orang masih ragu-ragu" },
      { icon: "🏃", text: "Langsung gerak duluan waktu yang lain masih diskusi soal geraknya" },
      { icon: "😬", text: "Momen panik kecil setelah gas duluan — tapi somehow selalu beres juga" }
    ],
    quote: "Berani bukan berarti nggak takut. Berani itu takut tapi tetap jalan."
  },

  /* ——— ANGGOTA 10 ——— */
  {
    id: 10,
    name: "Anggota 10",
    nickname: "Yang Santai tapi Bisa Diandalin",
    password: "teman10",
    salutation: "Buat kamu yang nggak pernah bikin keributan,",
    letterBody: [
      "Orang yang tenang di situasi ramai itu berharga. Bukan karena nggak peduli — tapi justru karena nggak mudah panik dan bisa mikir jernih waktu yang lain udah mulai kewalahan.",
      "Kamu tipe yang nggak banyak drama, nggak banyak ribut, tapi kalau diminta — ada. Dan itu value yang nggak semua orang punya.",
      "Buat banyak situasi yang berasa complicated, ketenangan kamu sering jadi jangkar. Mungkin kamu nggak sadar, tapi orang-orang di sekitar kamu ngerasain.",
      "Semoga ke depannya kamu selalu bisa jaga ketenangan itu — di situasi apapun."
    ],
    memories: [
      { icon: "😌", text: "Kamu yang tetap kalem waktu situasi mulai chaos — itu nular ke yang lain" },
      { icon: "🎯", text: "Fokusmu yang nggak gampang kemana-mana walau banyak distraksi" },
      { icon: "🤙", text: "Selalu available waktu butuh bantuan — nggak drama, langsung oke" }
    ],
    quote: "Ketenangan bukan tanda nggak peduli — itu tanda kamu cukup kuat buat nggak ikut panik."
  },

  /* ——— ANGGOTA 11 ——— */
  {
    id: 11,
    name: "Anggota 11",
    nickname: "Ide Nggak Habis-Habis",
    password: "teman11",
    salutation: "Buat kamu yang otaknya nggak pernah buntu,",
    letterBody: [
      "Program yang kita jalanin terasa lebih hidup karena ada kontribusi ide dari kamu. Waktu yang lain udah mentok, kamu masih bisa muncul dengan sesuatu yang belum kepikiran sebelumnya.",
      "Itu bukan sekadar kreativitas — itu cara kamu ngeliat sesuatu dari sudut yang beda. Dan hasilnya sering kali lebih seru dari yang direncanain.",
      "Jangan biarkan cara berpikir kamu itu mati karena tuntutan yang pengennya serba standar. Itu salah satu hal paling berharga yang kamu punya.",
      "Terus bikin hal-hal yang worth it untuk dibuat."
    ],
    memories: [
      { icon: "✨", text: "Ide-idemu yang datang nggak terduga dan langsung bikin situasi jadi lebih menarik" },
      { icon: "🎨", text: "Output yang selalu ada 'sentuhan lebih' dibanding yang lain — karena ada kamu di sana" },
      { icon: "🤯", text: "Reaksi orang waktu dengerin idemu — antara 'itu genius' dan 'darimana coba kepikirannya'" }
    ],
    quote: "Kreativitas bukan bakat eksklusif. Tapi cara kamu pakainya — itu yang beda."
  },

  /* ——— ANGGOTA 12 ——— */
  {
    id: 12,
    name: "Anggota 12",
    nickname: "Yang Nggak Bisa Diajak Kompromi Sama Hal yang Salah",
    password: "teman12",
    salutation: "Buat kamu yang konsisten sama prinsipnya,",
    letterBody: [
      "Nggak semua orang bisa pegang prinsip kalau situasi mulai ribet. Banyak yang akhirnya nyerah ke tekanan lingkungan atau ambil jalan pintas. Kamu beda — dan itu bukan hal kecil.",
      "Kadang emang bikin momen-momen tertentu jadi lebih 'debatable', tapi jujur — justru itu yang bikin kamu jadi penyeimbang yang bagus di kelompok ini.",
      "Dunia butuh orang-orang yang nggak gampang dibengkokin. Dan kamu salah satunya.",
      "Pertahanin itu — tapi jangan lupa juga tetap fleksibel di hal-hal yang memang butuh fleksibilitas."
    ],
    memories: [
      { icon: "⚖️", text: "Waktu kamu nggak mau kompromi di hal yang emang seharusnya nggak dikompromiin" },
      { icon: "🗣️", text: "Cara kamu ngomong jujur — kadang bikin nggak nyaman, tapi selalu bener" },
      { icon: "😤", text: "Ekspresimu waktu ada yang coba ngeles — nggak bisa ditipu, dan itu bagus" }
    ],
    quote: "Orang yang bisa dipegang kata-katanya itu langka. Jangan jadi yang ikut-ikutan nyerah."
  },

  /* ——— ANGGOTA 13 ——— */
  {
    id: 13,
    name: "Anggota 13",
    nickname: "BBM Kelompok",
    password: "teman13",
    salutation: "Buat kamu yang nggak pernah kehabisan bensin,",
    letterBody: [
      "Aku genuinely nggak tau kamu ambil energi dari mana. Di hari-hari yang paling melelahkan, waktu sebagian besar orang udah mode ngos-ngosan — kamu masih jalan. Itu supernatural.",
      "Dan yang lebih gila, semangat itu nular. Nggak dengan ceramah atau motivasi — tapi cukup dengan kamu tetap gerak dan tetap positif. Somehow itu cukup buat yang lain ikut bangkit.",
      "Tapi tetap inget — istirahat itu bukan kelemahan. Recharge dulu kalau emang udah mentok.",
      "Semoga energi itu kamu bawa ke hal-hal yang bikin kamu berkembang."
    ],
    memories: [
      { icon: "⚡", text: "Masih semangat di jam-jam terakhir program waktu yang lain udah lemes" },
      { icon: "🏃", text: "Selalu yang pertama siap waktu ada kerjaan yang perlu orang sukarela" },
      { icon: "🎉", text: "Cara kamu ngerayain hal-hal kecil yang bikin semua ikutan happy" }
    ],
    quote: "Semangat yang genuine itu nular. Dan kamu selalu punya stok yang nggak abis-abis."
  },

  /* ——— ANGGOTA 14 ——— */
  {
    id: 14,
    name: "Anggota 14",
    nickname: "Arsip Hidup KKN",
    password: "teman14",
    salutation: "Buat kamu yang ingatannya kayak hard disk eksternal,",
    letterBody: [
      "Serius, kamu inget hal-hal yang bahkan yang ngalaminnya aja udah lupa. Tanggal, nama, momen kecil yang kayaknya nggak penting — tapi ternyata jadi berharga waktu diingetin lagi.",
      "Karena kamu, banyak momen yang harusnya hilang ditelan rutinitas justru masih bisa diinget dan diceritain ulang. Itu valuable banget, terutama buat kenangan kayak gini.",
      "Fotoin, catat, inget — terus lanjutin itu. Kamu tipe orang yang bikin cerita sebuah periode nggak hilang begitu aja.",
      "Dan makasih udah inget hal-hal yang aku bahkan udah lupa. Haha."
    ],
    memories: [
      { icon: "📸", text: "Dokumentasi momen-momen yang kayaknya biasa tapi ternyata jadi memorable" },
      { icon: "🗓️", text: "Inget tanggal, inget siapa ngomong apa — akurasi datamu mengerikan" },
      { icon: "📖", text: "Cerita ulang momen-momen lama yang bikin semua langsung flashback dan ketawa" }
    ],
    quote: "Yang bisa mengingat dengan baik adalah yang paling setia sama ceritanya."
  },

  /* ——— ANGGOTA 15 ——— */
  {
    id: 15,
    name: "Anggota 15",
    nickname: "Kalem di Atas, Mikir di Bawah",
    password: "teman15",
    salutation: "Buat kamu yang tenang tapi sebenernya lagi proses banyak hal,",
    letterBody: [
      "Kamu tipe yang keliatan santai tapi sebenernya lagi mikir lebih dalam dari yang orang kira. Dan itu kombinasi yang bagus — nggak reaktif, tapi juga nggak nggak peduli.",
      "Di situasi yang sering bikin banyak orang panik duluan sebelum mikir, kamu sering jadi penyeimbang. Nggak harus ngomong banyak — tapi kehadiranmu udah cukup kasih efek 'oke, ini bisa diatasi'.",
      "Nggak banyak orang yang bisa jadi pengganjal situasi tanpa drama. Kamu bisa.",
      "Semoga ke depannya kamu bisa lebih banyak share isi kepala yang sebenernya dalam itu."
    ],
    memories: [
      { icon: "🌊", text: "Tetap kalem waktu situasi mulai chaos — dan itu bikin yang lain nggak ikutan panik" },
      { icon: "💬", text: "Waktu kamu akhirnya ngomong setelah lama diem — dan ternyata tepat banget" },
      { icon: "😶", text: "Ekspresi pokerface kamu yang sampai sekarang masih susah dibaca" }
    ],
    quote: "Yang diem bukan berarti nggak punya apa-apa untuk dikatakan."
  },

  /* ——— ANGGOTA 16 ——— */
  {
    id: 16,
    name: "Anggota 16",
    nickname: "Connector Kelompok",
    password: "teman16",
    salutation: "Buat kamu yang bikin semua nyambung satu sama lain,",
    letterBody: [
      "Di kelompok yang isinya 20 orang dengan kepribadian yang beda-beda, selalu ada potensi miskomunikasi atau gap yang nggak ketangkep. Kamu tipe orang yang diam-diam jalan di sela-sela itu — nyambungin yang renggang, ngejembatanin yang belum nyambung.",
      "Itu bukan hal yang glamor atau kelihatan. Tapi kamu yang bikin dinamika kelompok ini lebih solid dari yang harusnya — dan itu bukan lebay.",
      "Skill kayak gitu bakal kepake di mana aja — dan kamu bahkan mungkin nggak sadar seberapa berharganya.",
      "Makasih udah jadi penghubung yang nggak keliatan tapi kerasa efeknya."
    ],
    memories: [
      { icon: "🔗", text: "Waktu ada gap antara dua orang dan kamu yang diam-diam ngejembatanin" },
      { icon: "💬", text: "Cara kamu pastiin semua orang tau info yang sama — nggak ada yang kelewat" },
      { icon: "🤲", text: "Ngajak yang ngerasa 'outsider' buat lebih masuk ke dinamika kelompok" }
    ],
    quote: "Yang paling valuable di tim sering bukan yang paling keliatan — tapi yang bikin semua bagian terhubung."
  },

  /* ——— ANGGOTA 17 ——— */
  {
    id: 17,
    name: "Anggota 17",
    nickname: "Dua Langkah Lebih Depan",
    password: "teman17",
    salutation: "Buat kamu yang selalu udah siap sebelum orang lain sadar perlu siap,",
    letterBody: [
      "Kalau ada award 'paling antisipatif', itu buat kamu. Waktu orang lain masih mikirin step A, kamu udah kepikiran sampe step D — dan udah nyiapin langkah kalau step C ternyata gagal.",
      "Yang bikin itu nggak annoying adalah kamu nggak pamer. Kamu cukup siap, dan waktu saatnya tiba, kamu keluarin. Nggak drama, nggak 'kan aku udah bilang'. Itu rare.",
      "Bawa cara berpikir itu ke apapun yang kamu lakuin selanjutnya — itu bukan skill biasa.",
      "Dan kalau ada yang butuh orang yang bisa dipercaya buat mikirin hal-hal yang orang lain belum kepikiran — itu kamu."
    ],
    memories: [
      { icon: "🗺️", text: "Rencanamu yang selalu ada plan B dan C — dan sering kali kepake" },
      { icon: "🧩", text: "Cara kamu breakdown masalah kompleks jadi langkah yang masuk akal" },
      { icon: "😯", text: "Ekspresi orang waktu sadar kamu udah antisipasi sesuatu yang mereka baru kepikiran" }
    ],
    quote: "Mikir lebih jauh bukan obsesif — itu yang bikin perbedaan antara siap dan keteteran."
  },

  /* ——— ANGGOTA 18 ——— */
  {
    id: 18,
    name: "Anggota 18",
    nickname: "Original, Nggak Bisa Ditiru",
    password: "teman18",
    salutation: "Buat kamu yang jadi diri sendiri tanpa effort,",
    letterBody: [
      "Jujur, salah satu hal yang paling aku appreciate dari kamu adalah kamu nggak pernah keliatan nge-perform jadi seseorang. Kamu ya kamu — konsisten, nggak bergantung siapa yang lagi liat.",
      "Di lingkungan yang sering bikin orang jadi versi yang 'disesuaikan' — itu bukan hal kecil. Itu butuh rasa percaya diri yang subtle tapi solid.",
      "Itu bikin interaksi sama kamu kerasa genuine. Nggak ada yang fake, nggak ada yang dilebih-lebihkan.",
      "Semoga kamu terus kayak gitu. Dunia ini udah terlalu banyak orang yang jadi orang lain."
    ],
    memories: [
      { icon: "🦋", text: "Cara kamu bersikap yang konsisten — nggak beda-beda tergantung siapa yang ada" },
      { icon: "😄", text: "Momen-momen spontan yang kamu lakuin dan selalu somehow berkesan" },
      { icon: "🌻", text: "Kesan yang kamu tinggalin — authentik, nggak dibuat-buat" }
    ],
    quote: "Jadi diri sendiri itu bukan sesuatu yang perlu diusahain — kalau kamu udah cukup nyaman sama siapa kamu."
  },

  /* ——— ANGGOTA 19 ——— */
  {
    id: 19,
    name: "Anggota 19",
    nickname: "Yang Kontribusinya Susah Dijelasin tapi Kerasa",
    password: "teman19",
    salutation: "Buat kamu,",
    letterBody: [
      "Ada orang-orang yang kontribusinya gampang dilihat dan mudah dihitung. Terus ada kamu — yang dampaknya kerasa tapi kalau ditanya 'apa yang kamu lakuin?' susah dijabarin.",
      "Mungkin bukan satu hal besar. Mungkin banyak hal kecil yang konsisten — yang tanpanya, sesuatu pasti kerasa kurang. Dan itu sama berharganya, meski nggak selalu kelihatan.",
      "Aku notice. Dan aku yakin yang lain juga notice, meski mungkin nggak ngomong langsung.",
      "Ini bukan perpisahan yang beneran — ini cuma jeda sebelum ketemu lagi di konteks yang beda."
    ],
    memories: [
      { icon: "🌠", text: "Momen-momen terakhir — singkat tapi entah kenapa yang paling diinget" },
      { icon: "💫", text: "Cara kamu hadir tanpa perlu jadi pusat perhatian — dan itu cukup berasa" },
      { icon: "🫶", text: "Hal-hal kecil yang kamu lakuin yang sebenernya ngaruh lebih dari yang kamu kira" }
    ],
    quote: "Nggak semua yang berharga itu kelihatan — dan nggak semua yang kelihatan itu berharga."
  }

]; // end MEMBERS
