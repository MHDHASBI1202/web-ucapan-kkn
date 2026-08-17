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

  /* ——— ANGGOTA 2 : FARHAD ——— */
  {
    id: 2,
    name: "Farhad",
    nickname: "Yang Tiap Malem Entah Ngapain",
    password: "SleepCall",
    salutation: "Buat Farhad,",
    letterBody: [
      "Farhad, aku nggak terlalu tau kamu ngapain tiap malem — dan kayaknya lebih baik aku nggak tau. Yang jelas, siang-siangnya kamu tetap hadir dan tetap bisa diandalin, jadi it's fine.",
      "Kamu tipe yang santai tapi ternyata pas dibutuhin — ada. Nggak banyak gaya, nggak banyak cingcong. Gitu aja, dan itu cukup.",
      "Semoga ke depan jadwal tidurmu lebih manusiawi. Atau enggak, terserah — yang penting baik-baik aja.",
      "Hati-hati di jalan, Farhad. Dan matiin handphone kalau udah waktunya tidur. Serius."
    ],
    memories: [
      { icon: "🌙", text: "Entah kenapa kamu selalu masih melek waktu yang lain udah pada tidur" },
      { icon: "😴", text: "Ekspresimu yang selalu fresh padahal jam tidurnya misterius banget" },
      { icon: "📱", text: "Kamu dan handphonemu — hubungan yang lebih konsisten dari apapun" }
    ],
    quote: "Istirahat itu bukan tanda lemah — tapi kalau kamu nggak mau, ya udah."
  },

  /* ——— ANGGOTA 3 : TATA ——— */
  {
    id: 3,
    name: "Tata",
    nickname: "Oscar Jalan Kaki",
    password: "Dramatis",
    salutation: "Buat Tata,",
    letterBody: [
      "Tata, jujur ya — ada sesuatu yang bikin posko lebih hidup waktu kamu ada. Entah itu ekspresimu waktu hal kecil terjadi, cara kamu cerita sesuatu yang sebenernya biasa aja tapi jadi berasa epik, atau reaksimu yang selalu 10 kali lebih besar dari situasinya. Itu menghibur. Genuinely.",
      "Tapi di balik semua itu, kamu juga genuinely peduli sama orang-orang di sekitar kamu. Dan itu yang bikin drama-dramamu nggak pernah nyebelin — karena orangnya emang baik.",
      "Kamu bakat akting, Tata. Atau minimal bakat bikin cerita jadi lebih seru dari aslinya.",
      "Sukses ya — dan semoga hidupmu terus penuh momen yang layak buat di-reaksi lebay."
    ],
    memories: [
      { icon: "🎭", text: "Reaksimu waktu sesuatu yang biasa terjadi — selalu cinematic" },
      { icon: "😱", text: "Cara kamu cerita hal kecil sampai semua orang ikut tegang" },
      { icon: "💀", text: "Momen kamu dramatis tapi ternyata bener — dan semua pada speechless" }
    ],
    quote: "Hidup memang perlu sedikit drama — dan kamu udah cukup supply buat kita semua."
  },

  /* ——— ANGGOTA 4 : RIVAN ——— */
  {
    id: 4,
    name: "Rivan",
    nickname: "Nggak Jelas tapi Diinget",
    password: "genggeng",
    salutation: "Buat Rivan,",
    letterBody: [
      "Rivan, kamu itu susah didefinisiin tapi gampang diinget. Nggak tau kenapa. Mungkin caramu ngomong, mungkin ekspresimu, mungkin timing celetukan yang kadang nggak ada hubungannya sama topik tapi somehow pas.",
      "Yang jelas, posko kerasa beda waktu kamu ada. Lebih rame, lebih random, dan lebih banyak hal yang nggak perlu tapi ternyata memorable.",
      "Nggak banyak yang aku bisa jelasin soal kamu — tapi banyak yang aku bisa inget. Dan itu hal yang bagus.",
      "Take care, Van. Dan semoga 'genggeng' apapun itu artinya — semoga itu bawa hal baik buat kamu."
    ],
    memories: [
      { icon: "🤣", text: "Celetukan-celetukan yang nggak ada angin nggak ada hujan tapi bikin ngakak" },
      { icon: "🤨", text: "Ekspresimu waktu ada yang ngomong sesuatu yang menurutmu nggak masuk akal" },
      { icon: "🎲", text: "Energi random yang entah gimana selalu bikin suasana lebih hidup" }
    ],
    quote: "Nggak semua orang perlu bisa dijelasin — yang penting bisa diinget dengan baik."
  },

  /* ——— ANGGOTA 5 : ANGGI ——— */
  {
    id: 5,
    name: "Anggi",
    nickname: "Aura Level Beda",
    password: "Mempesona",
    salutation: "Buat Anggi,",
    letterBody: [
      "Anggi, ada orang-orang yang masuk ke ruangan dan suasananya langsung berubah — tanpa harus ngomong sesuatu dulu. Dan kamu salah satunya. Entah itu karena aura, cara kamu hadir, atau kombinasi keduanya — itu real dan orang-orang ngerasain.",
      "Yang bikin itu nggak annoying adalah kamu nggak pakai itu buat show off. Kamu cukup jadi kamu, dan somehow itu udah cukup bikin kesan.",
      "Di luar itu, kamu juga tipe yang genuinely mau bantu dan peduli. Dan kombinasi itu langka.",
      "Semoga ke depan aura itu terus kamu bawa — ke tempat-tempat yang layak nerima kamu."
    ],
    memories: [
      { icon: "✨", text: "Waktu kamu masuk dan suasana langsung keliatan lebih hidup tanpa kamu lakuin apa-apa" },
      { icon: "😌", text: "Cara kamu hadir yang tenang tapi berkesan" },
      { icon: "💬", text: "Obrolan sama kamu yang selalu nggak terasa berat, tapi tetap ada isinya" }
    ],
    quote: "Pesona yang genuine itu bukan yang paling keras — tapi yang paling bisa dirasain."
  },

  /* ——— ANGGOTA 6 : BERTRAN ——— */
  {
    id: 6,
    name: "Bertran",
    nickname: "Certified Ikemen KKN",
    password: "Ikemen",
    salutation: "Buat Bertran,",
    letterBody: [
      "Bertran, kamu tuh salah satu yang paling solid di kelompok ini. Bukan berarti yang paling banyak ngomong atau paling banyak keliatan — tapi waktu ada yang perlu diselesaikan, kamu ada dan bisa diandalin.",
      "Dan entah gimana caranya kamu bisa tetap keliatan oke bahkan di hari-hari yang sebenernya melelahkan. Itu bukan hal kecil — itu kombinasi antara mental yang kuat dan self-awareness yang bagus.",
      "Kamu tipe yang orang-orang seneng ada di tim yang sama — dan itu bukan pujian yang sembarangan.",
      "Sukses, Tran. Dan tetap jadi yang kamu sekarang."
    ],
    memories: [
      { icon: "💪", text: "Tetap solid dan bisa diandalin bahkan di kondisi yang paling melelahkan" },
      { icon: "😎", text: "Cara kamu hadir yang selalu tenang dan nggak bikin situasi makin ribet" },
      { icon: "🤝", text: "Waktu butuh backup, kamu yang pertama bisa diandalin" }
    ],
    quote: "Yang paling solid bukan yang paling banyak bicara — tapi yang paling bisa dipegang waktu dibutuhin."
  },

  /* ——— ANGGOTA 7 : NAYLA ——— */
  {
    id: 7,
    name: "Nayla",
    nickname: "Masih Proses, dan Itu Oke",
    password: "berdamailah",
    salutation: "Buat Nayla,",
    letterBody: [
      "Nayla, kamu tahu nggak — ada hal-hal yang kamu lakuin yang ternyata lebih berkesan dari yang kamu kira. Mungkin kamu nggak selalu sadar, tapi orang-orang di sekitar kamu ngerasain.",
      "Dan soal apapun yang lagi kamu proses dalam diri — nggak apa-apa. Semua orang lagi proses sesuatu. Yang penting kamu nggak berhenti buat damai sama itu pelan-pelan.",
      "Kamu punya lebih banyak hal baik dalam diri kamu dari yang kamu akui ke diri sendiri. Itu bukan kalimat basa-basi.",
      "Take care, Nayla. Dan berdamailah — sama apapun itu yang perlu didamaiin."
    ],
    memories: [
      { icon: "🌿", text: "Momen-momen kamu jadi lebih tenang dari biasanya — dan keliatan lebih ringan" },
      { icon: "💬", text: "Obrolan yang ternyata lebih dalam dari yang kelihatan di permukaan" },
      { icon: "🙂", text: "Senyummu waktu sesuatu berjalan lebih baik dari yang kamu ekspektasiin" }
    ],
    quote: "Damai sama diri sendiri itu proses — dan kamu udah di jalur yang bener."
  },

  /* ——— ANGGOTA 8 : ILA ——— */
  {
    id: 8,
    name: "Ila",
    nickname: "Okee Tapi Sebenernya Lebih dari Oke",
    password: "okerrrt",
    salutation: "Buat Ila,",
    letterBody: [
      "Ila, kamu tipe yang sering bilang 'oke' atau 'fine' tapi sebenernya lebih dari itu. Dan orang-orang yang ngenal kamu cukup lama tahu — di balik yang kalem dan 'oke-oke' itu ada yang jauh lebih dalam.",
      "Kamu bisa diandalin dengan cara yang nggak banyak ribut. Nggak banyak janji, tapi beres. Dan itu bukan hal yang semua orang punya.",
      "Semoga ke depannya kamu lebih sering ngasih tau diri sendiri bahwa kamu lebih dari sekadar 'okerrrt' — karena emang beneran lebih.",
      "Hati-hati, Ila. Dan semoga hal-hal yang kamu harapin pada datang."
    ],
    memories: [
      { icon: "✅", text: "Bilang 'oke' terus ternyata beneran oke — konsisten dan bisa dipegang" },
      { icon: "😊", text: "Momen kamu keluar dari zona nyaman dan hasilnya ternyata bagus" },
      { icon: "🌙", text: "Waktu ngobrol lebih dalam dan keliatan sisi kamu yang lebih dari yang biasa ditampilkan" }
    ],
    quote: "Orang yang bilang 'oke' tapi tetap hadir dan beres — itu yang paling bisa diandalin."
  },

  /* ——— ANGGOTA 9 : TIARA ——— */
  {
    id: 9,
    name: "Tiara",
    nickname: "Cuantik dan Tau Itu",
    password: "Cuantik",
    salutation: "Buat Tiara,",
    letterBody: [
      "Tiara, kamu salah satu yang paling konsisten di kelompok ini — dalam hal attitude, cara kerja, dan cara kamu hadir setiap hari. Itu bukan hal kecil, terutama di kondisi KKN yang nggak selalu predictable.",
      "Dan kamu lakuin semua itu sambil tetap jadi kamu. Nggak neko-neko, nggak tiba-tiba berubah tergantung situasi. Yang keliatan di permukaan sama dengan yang sebenernya — dan itu yang bikin orang nyaman ada di sekitar kamu.",
      "Apapun yang kamu kejar selanjutnya, aku yakin kamu bakal jalanin dengan cara yang sama — konsisten dan nggak setengah-setengah.",
      "Sukses, Tiara!"
    ],
    memories: [
      { icon: "💫", text: "Cara kamu tetap konsisten bahkan di hari-hari yang challenging" },
      { icon: "😄", text: "Energimu yang nggak pernah bikin orang di sekitar kamu ngerasa awkward" },
      { icon: "🌸", text: "Kesan pertama dan kesan terakhir yang ternyata sama — dan itu hal yang bagus" }
    ],
    quote: "Konsistensi adalah bentuk kepercayaan yang paling solid."
  },

  /* ——— ANGGOTA 10 : TEGUH ——— */
  {
    id: 10,
    name: "Teguh",
    nickname: "Santuy tapi Nyata",
    password: "eaaa",
    salutation: "Buat Teguh,",
    letterBody: [
      "Teguh, kamu salah satu orang yang paling susah dibuat stres di kelompok ini. Dan itu — dalam konteks KKN yang penuh drama jadwal dan koordinasi — adalah hal yang sangat, sangat berguna.",
      "Kamu tipe yang jalanin sesuatu dengan santai tapi tetap selesai. Nggak ada ribut-ribut, nggak ada drama nggak perlu. Gitu aja, dan hasilnya ada.",
      "Yang bikin aku respect adalah kamu tetap bisa santai tanpa jadi yang paling belakang. Itu balance yang jarang.",
      "Hati-hati di jalan, Teguh. Dan terus santuy — tapi tetap sampai tujuan."
    ],
    memories: [
      { icon: "😌", text: "Ekspresimu yang selalu sama — nggak terlalu panik, nggak terlalu lebay" },
      { icon: "🤙", text: "Cara kamu ngerespon situasi ribet dengan 'eaaa' dan ternyata beres juga" },
      { icon: "☕", text: "Santai tapi tetap ada dan tetap ngerjain — itu yang bikin beda" }
    ],
    quote: "Santai itu bukan nggak serius — itu cara tersendiri buat tetap jalan tanpa bakar-bakar energi."
  },

  /* ——— ANGGOTA 11 : SAKTI ——— */
  {
    id: 11,
    name: "Sakti",
    nickname: "Yang Paling Bisa Bertahan",
    password: "Bertahan",
    salutation: "Buat Sakti,",
    letterBody: [
      "Sakti, ada sesuatu yang kamu punya yang nggak semua orang punya: kemampuan buat tetap berdiri di kondisi yang sebenernya nguras tenaga. Bukan karena nggak ngerasain — tapi karena kamu pilih buat nggak nyerah duluan.",
      "Di KKN yang kadang nggak berjalan sesuai rencana, orang-orang kayak kamu yang bikin tim nggak kolaps. Bukan dengan heroik — tapi cukup dengan tetap ada dan tetap jalan.",
      "Itu skill yang bakal terus kepake, Sakti. Di apapun yang kamu hadapi selanjutnya.",
      "Sukses, dan terus bertahan — dalam arti yang paling baik dari kata itu."
    ],
    memories: [
      { icon: "💪", text: "Tetap ada dan tetap jalan waktu kondisi lagi paling nguras tenaga" },
      { icon: "🧱", text: "Nggak gampang goyah waktu situasi di sekitar mulai nggak stabil" },
      { icon: "🏁", text: "Sampe finish — nggak cepet, tapi pasti" }
    ],
    quote: "Bertahan bukan berarti nggak ngerasain beratnya — itu berarti milih buat tetap jalan meskipun berat."
  },

  /* ——— ANGGOTA 12 : MONCI ——— */
  {
    id: 12,
    name: "Monci",
    nickname: "Nggak Perlu Siapa-siapa, tapi Tetap Ada",
    password: "Independent",
    salutation: "Buat Monci,",
    letterBody: [
      "Monci, kamu tipe yang bisa handle hal-hal sendiri tanpa banyak minta tolong — dan itu bukan karena antisosial, tapi karena kamu emang nggak perlu banyak bergantung. Itu strength yang jarang.",
      "Yang bikin itu bagus adalah kamu juga nggak bikin orang lain ngerasa nggak dibutuhin. Kamu independent tapi tetap bisa kerjasama — dan itu balance yang susah.",
      "Di kelompok yang dinamikanya kadang terlalu saling bergantung, kamu jadi reminder bahwa bisa handle diri sendiri itu penting.",
      "Semoga ke depannya kamu terus kayak gitu — kuat sendiri, tapi tetap mau ada buat yang lain."
    ],
    memories: [
      { icon: "🦅", text: "Cara kamu handle sesuatu sendiri tanpa perlu dikomando" },
      { icon: "🎯", text: "Fokusmu yang nggak gampang kemana-mana meski banyak distraksi" },
      { icon: "🤝", text: "Waktu kamu mau kerjasama — dan hasilnya selalu lebih dari ekspektasi" }
    ],
    quote: "Independent bukan berarti nggak butuh orang — itu berarti kamu cukup kuat buat milih kapan butuhnya."
  },

  /* ——— ANGGOTA 13 : DAMPA ——— */
  {
    id: 13,
    name: "Dampa",
    nickname: "Efeknya Kerasa Tapi Nggak Berisik",
    password: "membasuh",
    salutation: "Buat Dampa,",
    letterBody: [
      "Dampa, ada orang yang dampaknya langsung keliatan dan ada yang dampaknya baru kerasa belakangan — dan kamu lebih ke yang kedua. Bukan karena kamu nggak contribute, tapi karena cara kamu contribute itu nggak berisik.",
      "Banyak hal yang jalan lebih lancar karena ada kamu. Bukan karena kamu yang paling depan — tapi karena kamu ada di tempat yang tepat di waktu yang tepat.",
      "Itu efek yang genuine dan nggak bisa dibuat-buat. Dan orang yang ngeh, tahu.",
      "Hati-hati ya, Dampa. Dan semoga ke depannya hal baik ikut ngalir buat kamu."
    ],
    memories: [
      { icon: "🌊", text: "Kehadiranmu yang nggak berisik tapi bikin suasana jadi lebih settih" },
      { icon: "🌿", text: "Waktu kamu ada di posisi yang pas dan hal-hal jadi lebih lancar karenanya" },
      { icon: "💧", text: "Efekmu yang kerasa pelan-pelan — dan ternyata lebih dalam dari yang kelihatan" }
    ],
    quote: "Nggak semua yang baik itu berisik. Yang paling berdampak sering yang paling tenang."
  },

  /* ——— ANGGOTA 14 : ONI ——— */
  {
    id: 14,
    name: "Oni",
    nickname: "Kece dan Tau Itu",
    password: "kece",
    salutation: "Buat Oni,",
    letterBody: [
      "Oni, kamu salah satu yang paling enak diajak ngobrol di kelompok ini. Bukan karena kamu selalu setuju — tapi karena obrolan sama kamu selalu ada isinya dan nggak pernah berasa dipaksain.",
      "Kamu juga tipe yang genuinely menyenangkan untuk ada di sekitarnya. Bukan karena kamu berusaha — justru karena kamu nggak berusaha. Itu yang bikin natural.",
      "Kelompok ini lebih seru karena ada kamu, Oni. Dan itu bukan basa-basi.",
      "Sukses buat apapun yang kamu kejar — dan tetap kece."
    ],
    memories: [
      { icon: "😎", text: "Cara kamu hadir yang selalu bikin suasana jadi lebih chill" },
      { icon: "💬", text: "Obrolan-obrolan yang kerasa natural dan selalu ada something-nya" },
      { icon: "🤩", text: "Momen kamu fully in — dan ternyata kamu lebih bisa dari yang dikira" }
    ],
    quote: "Kece itu bukan soal penampilan — tapi soal cara kamu hadir dan bikin orang nyaman."
  },

  /* ——— ANGGOTA 15 : ZIA ——— */
  {
    id: 15,
    name: "Zia",
    nickname: "Soft tapi Nggak Bisa Disepelein",
    password: "gemoi",
    salutation: "Buat Zia,",
    letterBody: [
      "Zia, jangan salah baca ya — 'gemoi' itu bukan berarti nggak punya gigi. Kamu salah satu yang punya cara tersendiri buat bikin orang di sekitar kamu ngerasa nyaman, dan itu hal yang nggak semua orang bisa.",
      "Di balik yang soft dan menyenangkan itu, kamu juga punya pendirian. Dan orang-orang yang ngenal kamu cukup lama tahu itu.",
      "Kamu tipe yang bikin grup jadi lebih hangat tanpa harus jadi yang paling keras suaranya. Dan itu worth a lot.",
      "Take care, Zia. Semoga hal-hal baik terus datengin kamu."
    ],
    memories: [
      { icon: "🌸", text: "Cara kamu bikin orang di sekitar ngerasa disambut dan nyaman" },
      { icon: "🥰", text: "Momen-momen kamu yang genuinely menyenangkan dan nggak dibuat-buat" },
      { icon: "😤", text: "Waktu kamu nggak mau dikompromiin — dan kamu bener" }
    ],
    quote: "Kehangatan itu bukan kelemahan — itu salah satu kekuatan yang paling susah ditiru."
  },

  /* ——— ANGGOTA 16 : MOGA ——— */
  {
    id: 16,
    name: "Moga",
    nickname: "Nggak Terduga Tapi Selalu Bikin Ngakak",
    password: "lucu",
    salutation: "Buat Moga,",
    letterBody: [
      "Moga, timing kamu itu aneh — dalam artian yang bagus. Celetukan yang datang di waktu yang paling nggak terduga, reaksi yang nggak ada di script manapun, tapi entah kenapa always landing. Itu talent.",
      "Kamu tipe yang bikin hari-hari di posko nggak monoton. Bukan karena kamu sengaja jadi bahan tertawaan — tapi karena kamu genuinely lucu tanpa effort berlebihan.",
      "Posko bakal lebih sepi tanpa kamu, Moga. Dan itu bukan lebay.",
      "Sukses ya — dan semoga ke depan masih banyak hal yang bikin kamu ketawa."
    ],
    memories: [
      { icon: "😂", text: "Celetukan random yang dateng di timing paling pas dan paling nggak terduga" },
      { icon: "🎭", text: "Ekspresimu waktu bereaksi sama sesuatu — selalu lebih entertaining dari situasinya" },
      { icon: "🤣", text: "Momen yang seharusnya biasa tapi jadi memorable gara-gara kamu" }
    ],
    quote: "Orang yang bisa bikin orang lain ketawa dengan tulus — itu gift yang nggak semua orang punya."
  },

  /* ——— ANGGOTA 17 : RATU ——— */
  {
    id: 17,
    name: "Ratu",
    nickname: "Serendipity Berjalan",
    password: "serendipity",
    salutation: "Buat Ratu,",
    letterBody: [
      "Ratu, ada hal-hal yang kamu bawa ke kelompok ini yang nggak bisa direncanain — dan itu yang justru bikin kehadiran kamu memorable. Bukan karena kamu berusaha keras, tapi karena kamu datang dengan caramu sendiri.",
      "Kamu tipe yang bisa bikin momen biasa jadi berasa lebih dari yang seharusnya — dan itu bukan sesuatu yang dipelajari. Itu siapa kamu.",
      "Di antara semua hal yang nggak direncanain tapi ternyata bagus dalam KKN ini — kamu salah satunya.",
      "Semoga ke depannya serendipity terus jadi bagian dari cerita hidupmu, Ratu."
    ],
    memories: [
      { icon: "🌟", text: "Momen-momen nggak terduga yang ternyata jadi yang paling berkesan" },
      { icon: "🎲", text: "Cara kamu hadir yang selalu nggak bisa diprediksi tapi selalu somehow pas" },
      { icon: "✨", text: "Kesan yang kamu tinggalin — nggak bisa dijelasin, tapi jelas kerasa" }
    ],
    quote: "Hal-hal terbaik sering nggak direncanain — dan ketemu kamu salah satunya."
  },

  /* ——— ANGGOTA 18 : ACHANTIKK ——— */
  {
    id: 18,
    name: "Achantikk",
    nickname: "Lebih dari yang Kelihatan",
    password: "bgtt",
    salutation: "Buat Achantikk,",
    letterBody: [
      "Achantikk, kamu salah satu yang punya cara tersendiri buat ninggalin kesan — dan cara itu genuine. Nggak ada yang dipaksain, nggak ada yang dibuat-buat. Kamu cukup jadi kamu, dan itu udah cukup berkesan.",
      "Di kelompok yang isinya macam-macam karakter ini, kamu tetap bisa jadi diri sendiri tanpa harus clash sama yang lain. Itu bukan hal kecil — itu butuh self-awareness yang bagus.",
      "Apapun yang kamu lakuin selanjutnya, bawa cara itu — jadi diri sendiri, genuine, dan nggak setengah-setengah.",
      "Sukses banget ya, Achantikk!"
    ],
    memories: [
      { icon: "💫", text: "Cara kamu tetap jadi diri sendiri di tengah dinamika kelompok yang macam-macam" },
      { icon: "😄", text: "Momen-momen kamu yang genuinely asyik dan nggak dibuat-buat" },
      { icon: "🌻", text: "Kesan yang kamu tinggalin — positif, asli, dan nggak mudah dilupain" }
    ],
    quote: "Jadi diri sendiri itu cukup — kalau yang kamu tunjukin memang yang terbaik dari kamu."
  },

  /* ——— ANGGOTA 19 : ADIT ——— */
  {
    id: 19,
    name: "Adit",
    nickname: "Big Dih Energy",
    password: "BigDih",
    salutation: "Buat Adit,",
    letterBody: [
      "Adit, kamu salah satu yang punya presence di kelompok ini. Bukan karena kamu paling banyak ngomong atau paling berisik — tapi karena waktu kamu ada, orang-orang ngerasain. Dan waktu kamu nggak ada, juga kerasa.",
      "Kamu tipe yang bisa dominan di situasi tertentu tapi nggak bikin orang lain ngerasa kecil. Itu balance yang susah, dan kamu lakuin dengan cukup baik.",
      "Big dih energy — dan kamu tau cara pakainya dengan bener.",
      "Sukses, Adit. Dan jaga energi itu — tapi juga jaga yang ada di sekitar kamu."
    ],
    memories: [
      { icon: "💥", text: "Waktu kamu fully in — dan hasilnya selalu lebih dari yang orang ekspektasiin" },
      { icon: "😤", text: "Cara kamu ambil space di situasi yang butuh seseorang buat gerak duluan" },
      { icon: "🤜", text: "Solidaritas kamu ke tim — ada waktu dibutuhin, nggak menghilang" }
    ],
    quote: "Besar bukan soal ukuran — tapi soal dampak yang kamu tinggalin."
  }

]; // end MEMBERS
