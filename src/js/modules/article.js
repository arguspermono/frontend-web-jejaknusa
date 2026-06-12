// src/js/modules/article.js
import { applyTranslations } from '../utils/translations.js';

// ─── Shared card images (for related section) ─────────────────────────────────
const CARD_IMAGES = {
  1: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9',
  2: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
  3: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
  4: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
};

// ─── Article Data ──────────────────────────────────────────────────────────────
const ARTICLES = {

  // ── 1. Tokyo ──────────────────────────────────────────────────────────────
  1: {
    date: 'Jan 23, 2026',
    readTime: { id: '42 Menit', en: '42 Minutes' },
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80&auto=format&fit=crop',
    author: 'Andy Fajri Danio',
    authorInitial: 'A',
    views: '4.2K',
    related: [2, 3, 4],
    id: {
      title: 'Wisata Kuliner Malam di Pasar Tradisional Tokyo, Jepang',
      category: 'Kuliner',
      bio: 'Pecinta perjalanan yang telah mengunjungi lebih dari 30 negara. Spesialis kuliner Asia dan destinasi alam tersembunyi.',
      imgCaption: 'Suasana pasar tradisional yang ramai di kawasan Ueno, Tokyo.',
      p1: 'Ketika matahari terbenam dan lampu-lampu neon mulai menyala, Tokyo berubah menjadi lautan cahaya yang memesona. Di antara jalan-jalan sempitnya yang disebut <em>yokocho</em>, aroma makanan lezat menguar ke udara malam — mengundang siapa saja yang melintas untuk mampir sejenak dan menikmati sajian autentik khas Jepang.',
      p2: 'Pasar malam tradisional Tokyo, atau yang dikenal sebagai <strong>Yanaka Ginza</strong> dan <strong>Ameya-Yokocho (Ameyoko)</strong>, adalah dua destinasi kuliner yang wajib dikunjungi bagi setiap traveler yang ingin merasakan sisi lain dari Tokyo — jauh dari hingar-bingar distrik modern seperti Shibuya atau Shinjuku.',
      h1: 'Ameyoko: Pasar Terbuka Penuh Kejutan',
      p3: 'Berlokasi di bawah jalur kereta elevated antara stasiun Ueno dan Okachimachi, Ameyoko adalah pasar jalanan ikonik yang telah berdiri sejak era pasca-Perang Dunia II.',
      quote: '"Ameyoko bukan sekadar pasar. Ia adalah nafas kehidupan rakyat Tokyo yang sesungguhnya — bising, semarak, dan penuh jiwa." — Sari Dewi',
      p4: 'Yang membuat Ameyoko benar-benar istimewa adalah atmosfernya. Para pedagang berteriak menawarkan dagangannya, aroma takoyaki dan yakitori memenuhi udara, dan pengunjung dari berbagai penjuru dunia berbaur dalam kerumunan yang hangat.',
      h2: 'Kuliner yang Wajib Dicoba',
      p5: 'Perjalanan kuliner malam di Tokyo tidak akan lengkap tanpa mencicipi beberapa makanan ikonik berikut ini:',
      foods: [
        '<strong>Takoyaki</strong> — Bola-bola adonan berisi gurita yang dipanggang di atas cetakan khusus, disajikan dengan saus manis dan mayones.',
        '<strong>Yakitori</strong> — Tusuk sate ayam yang dipanggang di atas arang, tersedia dalam berbagai potongan dari daging hingga jeroan ayam.',
        '<strong>Gyoza</strong> — Pangsit isi daging dan sayuran yang digoreng hingga garing di bagian bawah dan dikukus di bagian atas.',
        '<strong>Taiyaki</strong> — Kue berbentuk ikan yang diisi dengan pasta kacang merah manis (anko), salah satu jajanan kaki lima paling populer.',
        '<strong>Ramen Stall</strong> — Kedai ramen kecil yang hanya berkapasitas 6–8 kursi, menyajikan mie dengan kuah kaldu yang dimasak berjam-jam.',
      ],
      h3: 'Tips Berkunjung',
      p6: 'Agar pengalaman wisata kuliner malam Anda di Tokyo semakin berkesan, berikut beberapa tips yang perlu diperhatikan:',
      tips: [
        'Datanglah antara pukul <strong>18.00 – 21.00</strong> untuk menikmati suasana paling semarak.',
        'Bawa uang tunai Yen karena banyak kios kecil tidak menerima kartu kredit.',
        'Gunakan IC Card (Suica/Pasmo) untuk kemudahan transportasi antar lokasi.',
        'Jangan ragu untuk mencoba makanan dari kios-kios kecil yang tampak ramai — itu biasanya pertanda kualitasnya istimewa.',
      ],
      p7: 'Wisata kuliner malam di Tokyo adalah sebuah petualangan tersendiri — sebuah perjalanan yang melibatkan seluruh indera dan meninggalkan kenangan yang lekat di hati. Jika Anda berencana mengunjungi Jepang, jangan lewatkan momen berharga ini.',
      tags: ['Kuliner', 'Pasar Malam', 'Perjalanan', 'Asia'],
    },
    en: {
      title: 'Night Culinary Tour at Tokyo Traditional Market, Japan',
      category: 'Culinary',
      bio: 'A travel enthusiast who has visited over 30 countries. Specializes in Asian culinary delights and hidden natural destinations.',
      imgCaption: 'Busy traditional market atmosphere in Ueno, Tokyo.',
      p1: 'When the sun sets and neon lights start glowing, Tokyo transforms into a mesmerizing sea of light. Among its narrow alleys called <em>yokocho</em>, the aroma of delicious food wafts into the night air — inviting passersby to stop and enjoy authentic Japanese cuisine.',
      p2: 'Tokyo\'s traditional night markets, known as <strong>Yanaka Ginza</strong> and <strong>Ameya-Yokocho (Ameyoko)</strong>, are two culinary destinations that every traveler must visit to experience another side of Tokyo — far from the bustle of modern districts like Shibuya or Shinjuku.',
      h1: 'Ameyoko: An Open Market Full of Surprises',
      p3: 'Located beneath the elevated railway between Ueno and Okachimachi stations, Ameyoko is an iconic street market that has stood since the post-World War II era.',
      quote: '"Ameyoko is more than just a market. It is the breath of real Tokyo life — noisy, vibrant, and full of soul." — Sari Dewi',
      p4: 'What makes Ameyoko truly special is its atmosphere. Merchants shout to promote their goods, the aroma of takoyaki and yakitori fills the air, and visitors from all over the world blend into a warm crowd.',
      h2: 'Must-Try Culinary Delights',
      p5: 'A night culinary journey in Tokyo would not be complete without tasting some of these iconic foods:',
      foods: [
        '<strong>Takoyaki</strong> — Octopus-filled batter balls grilled on a special mold, served with sweet sauce and mayonnaise.',
        '<strong>Yakitori</strong> — Grilled chicken skewers over charcoal, available in various cuts from meat to offal.',
        '<strong>Gyoza</strong> — Dumplings filled with meat and vegetables, pan-fried crispy on the bottom and steamed on top.',
        '<strong>Taiyaki</strong> — Fish-shaped waffle filled with sweet red bean paste (anko), one of the most popular street snacks.',
        '<strong>Ramen Stall</strong> — A tiny ramen stall seating only 6–8 people, serving noodles in broth cooked for hours.',
      ],
      h3: 'Visiting Tips',
      p6: 'To make your night culinary experience in Tokyo even more memorable, keep these tips in mind:',
      tips: [
        'Visit between <strong>6:00 PM – 9:00 PM</strong> to enjoy the liveliest atmosphere.',
        'Bring cash Yen as many small stalls do not accept credit cards.',
        'Use an IC Card (Suica/Pasmo) for easy transportation between locations.',
        'Don\'t hesitate to try food from small stalls that look busy — that\'s usually a sign of exceptional quality.',
      ],
      p7: 'Tokyo\'s night culinary tour is an adventure in itself — a journey that engages all the senses and leaves lasting memories in the heart. If you plan to visit Japan, don\'t miss this precious moment.',
      tags: ['Culinary', 'Night Market', 'Travel', 'Asia'],
    },
  },

  // ── 2. Kyoto ──────────────────────────────────────────────────────────────
  2: {
    date: 'Des 32, 2025',
    readTime: { id: '214 Menit', en: '214 Minutes' },
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80&auto=format&fit=crop',
    author: 'Rzainurtanto',
    authorInitial: 'R',
    views: '8.7K',
    related: [1, 3, 4],
    id: {
      title: 'Keindahan Pagoda dan Kuil Bersejarah di Kota Kyoto, Jepang',
      category: 'Budaya',
      bio: 'Fotografer perjalanan dan penulis lepas yang terpesona oleh keindahan kuil-kuil Asia. Telah mengunjungi lebih dari 15 kota bersejarah di Jepang.',
      imgCaption: 'Jalan berbatu menuju Kuil Yasaka di kawasan Higashiyama, Kyoto, saat senja.',
      p1: 'Kyoto, kota kuno yang menjadi jantung budaya Jepang, menyimpan ribuan kuil dan pagoda yang berdiri megah di antara perpaduan alam dan sejarah yang tak ternilai. Setiap sudut kota ini menceritakan kisah tentang para samurai, geisha, dan kaisar yang pernah menghirup udara yang sama.',
      p2: 'Berbeda dari Tokyo yang penuh hiruk-pikuk modern, Kyoto menawarkan ketenangan yang langka — sebuah pelarian dari dunia yang bergerak terlalu cepat, tempat di mana waktu terasa melambat dan setiap langkah menjadi meditasi.',
      h1: 'Fushimi Inari: Ribuan Gerbang Torii yang Memukau',
      p3: 'Di selatan Kyoto, berdiri salah satu kuil paling ikonik di Jepang — Fushimi Inari Taisha. Kuil ini terkenal dengan lorong panjang gerbang torii berwarna merah-oranye yang berderetan rapat, membentuk terowongan magis yang memanjang hingga ke puncak Gunung Inari.',
      quote: '"Berjalan menembus ribuan torii di sore hari, ketika cahaya keemasan menerobos celah-celah kayu bercat merah — itu adalah momen yang tidak akan pernah bisa dijelaskan dengan kata-kata." — Rizky Pratama',
      p4: 'Selain Fushimi Inari, kawasan Higashiyama menawarkan jalan-jalan berbatu yang diapit oleh toko-toko tradisional, warung teh, dan deretan kuil kecil. Berjalan di sini serasa melangkah ke abad ke-17 Jepang.',
      h2: 'Cita Rasa Kuliner Khas Kyoto',
      p5: 'Kyoto bukan hanya memukau secara visual — kelezatan kuliner khasnya turut menjadi bagian dari pengalaman yang tak terlupakan:',
      foods: [
        '<strong>Yudofu</strong> — Tahu lembut yang direbus dalam kaldu kombu, disajikan dengan kondimen kedelai dan jahe. Sederhana namun menenangkan jiwa.',
        '<strong>Matcha Parfait</strong> — Hidangan penutup berlapis krim matcha, es krim, anko, dan mochi yang disajikan di kafe-kafe sepanjang jalan Nishiki.',
        '<strong>Kaiseki</strong> — Makan malam formal gaya Kyoto dengan penyajian makanan berurutan dalam porsi kecil yang indah dan seimbang.',
        '<strong>Nishin Soba</strong> — Mi soba berkuah gurih yang ditopkan dengan ikan hering manis khas Kyoto, tersedia di warung-warung tradisional.',
        '<strong>Wagashi</strong> — Kue-kue manis tradisional berbentuk indah yang sering disajikan bersama upacara teh, mencerminkan keindahan alam Jepang.',
      ],
      h3: 'Tips Menjelajahi Kyoto',
      p6: 'Kyoto memiliki banyak lapisan yang bisa dieksplorasi. Berikut tips agar perjalanan Anda semakin berkesan:',
      tips: [
        'Kunjungi Fushimi Inari dan Arashiyama <strong>sebelum pukul 07.00 pagi</strong> untuk menghindari keramaian wisatawan.',
        'Sewa sepeda untuk menjelajahi kawasan Gion, Philosopher\'s Path, dan Nishiki Market dengan lebih fleksibel.',
        'Beli <strong>Kyoto City Bus Pass</strong> untuk akses tak terbatas ke seluruh jaringan bus di kota.',
        'Jika ada kesempatan, ikuti sesi upacara minum teh (<em>sadō</em>) di salah satu tea house di kawasan Higashiyama.',
      ],
      p7: 'Kyoto adalah kota yang harus dirasakan, bukan sekadar dilihat. Di setiap kuil, setiap gerbang torii, dan setiap cangkir matcha — ada jiwa Jepang yang berbicara pelan namun mendalam. Sebuah perjalanan yang akan mengubah cara Anda memandang dunia.',
      tags: ['Budaya', 'Kuil', 'Sejarah', 'Jepang'],
    },
    en: {
      title: 'The Beauty of Pagodas and Historic Temples in Kyoto, Japan',
      category: 'Culture',
      bio: 'Travel photographer and freelance writer fascinated by the beauty of Asian temples. Has visited over 15 historic cities in Japan.',
      imgCaption: 'Stone-paved path to Yasaka Shrine in the Higashiyama district, Kyoto, at dusk.',
      p1: 'Kyoto, the ancient city that serves as the cultural heart of Japan, holds thousands of temples and pagodas standing majestically amid a priceless blend of nature and history. Every corner of this city tells a story of samurai, geisha, and emperors who once breathed the same air.',
      p2: 'Unlike the hustle of modern Tokyo, Kyoto offers a rare tranquility — an escape from a world that moves too fast, where time seems to slow and every step becomes a meditation.',
      h1: 'Fushimi Inari: Thousands of Mesmerizing Torii Gates',
      p3: 'In southern Kyoto stands one of Japan\'s most iconic shrines — Fushimi Inari Taisha. This shrine is famous for its long corridor of densely arranged red-orange torii gates, forming a magical tunnel that extends all the way to the top of Mount Inari.',
      quote: '"Walking through thousands of torii in the afternoon, when golden light pierces through the gaps of red-painted wood — that is a moment that can never be explained in words." — Rizky Pratama',
      p4: 'Beyond Fushimi Inari, the Higashiyama district offers stone-paved streets lined with traditional shops, teahouses, and small shrines. Walking here feels like stepping back to 17th-century Japan.',
      h2: 'The Distinctive Culinary Flavors of Kyoto',
      p5: 'Kyoto is not only visually stunning — its distinctive culinary delights are also part of an unforgettable experience:',
      foods: [
        '<strong>Yudofu</strong> — Soft tofu simmered in kombu broth, served with soy sauce and ginger condiments. Simple yet soul-soothing.',
        '<strong>Matcha Parfait</strong> — A dessert layered with matcha cream, ice cream, anko, and mochi served at cafes along Nishiki street.',
        '<strong>Kaiseki</strong> — Kyoto-style formal dinner featuring sequentially served, small, beautifully presented and balanced dishes.',
        '<strong>Nishin Soba</strong> — Savory soba noodles topped with Kyoto-style sweet herring, available at traditional eateries.',
        '<strong>Wagashi</strong> — Traditional Japanese sweets in beautiful shapes often served with tea ceremony, reflecting the beauty of Japanese nature.',
      ],
      h3: 'Tips for Exploring Kyoto',
      p6: 'Kyoto has many layers to explore. Here are tips to make your journey more memorable:',
      tips: [
        'Visit Fushimi Inari and Arashiyama <strong>before 7:00 AM</strong> to avoid tourist crowds.',
        'Rent a bicycle to explore the Gion district, Philosopher\'s Path, and Nishiki Market more flexibly.',
        'Buy a <strong>Kyoto City Bus Pass</strong> for unlimited access to the city\'s entire bus network.',
        'If you have the chance, join a tea ceremony session (<em>sadō</em>) at one of the teahouses in the Higashiyama area.',
      ],
      p7: 'Kyoto is a city that must be felt, not merely seen. In every temple, every torii gate, and every cup of matcha — there is a Japanese soul speaking softly yet profoundly. A journey that will change the way you see the world.',
      tags: ['Culture', 'Temples', 'History', 'Japan'],
    },
  },

  // ── 3. Bali Sunset ────────────────────────────────────────────────────────
  3: {
    date: 'Des 25, 2025',
    readTime: { id: '141 Menit', en: '141 Minutes' },
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&auto=format&fit=crop',
    author: 'Elsa Hayuningrat',
    authorInitial: 'S',
    views: '6.1K',
    related: [1, 2, 4],
    id: {
      title: 'Sunset Terbaik di Pantai Barat Bali yang Memukau',
      category: 'Pantai',
      bio: 'Travel blogger dan fotografer landscape yang telah menjelajahi pantai-pantai eksotis Asia Tenggara selama 5 tahun terakhir.',
      imgCaption: 'Siluet Pura Tanah Lot yang berdiri gagah di atas batu karang, diselimuti cahaya senja keemasan.',
      p1: 'Jika ada satu pengalaman yang wajib ada dalam setiap daftar perjalanan ke Bali, itu adalah menyaksikan matahari terbenam di pantai-pantai barat pulau dewata ini. Langit Bali seperti memiliki kanvas yang lebih besar, lebih berwarna, dan lebih dramatis dari tempat mana pun di dunia.',
      p2: 'Dari Tanah Lot yang mistis hingga Seminyak yang kosmopolitan, setiap pantai menawarkan cara tersendiri untuk menikmati pertunjukan cahaya paling spektakuler yang disediakan alam.',
      h1: 'Tanah Lot: Pura di Atas Karang yang Memesona',
      p3: 'Terletak sekitar 20 kilometer dari Denpasar, Tanah Lot adalah pura Hindu paling fotografik di Bali — berdiri di atas bongkahan batu karang yang dikelilingi ombak Samudra Hindia. Saat air pasang, pura ini tampak mengapung di tengah laut, menciptakan pemandangan yang tidak pernah gagal mencuri napas.',
      quote: '"Menyaksikan matahari tenggelam di balik Tanah Lot adalah seperti menonton drama alam yang dipentaskan khusus untuk jiwa-jiwa yang bersedia berhenti sejenak dan sungguh-sungguh melihat." — Sari Dewi',
      p4: 'Selain Tanah Lot, Pantai Berawa, Pantai Batu Bolong, dan Pantai Old Man\'s di Canggu menawarkan vibrasi yang lebih santai dengan deretan kafe, warung ikan bakar, dan papan selancar yang bersandar di tembok bata.',
      h2: 'Kuliner Tepi Pantai yang Menggugah Selera',
      p5: 'Menikmati sunset Bali menjadi lebih sempurna dengan sajian kuliner khas yang bisa dinikmati sambil memandang laut:',
      foods: [
        '<strong>Ikan Bakar Jimbaran</strong> — Seafood segar yang dibakar di atas arang dengan bumbu khas Bali, dinikmati langsung di tepi pantai dengan kaki menyentuh pasir.',
        '<strong>Nasi Campur Bali</strong> — Nasi putih disajikan dengan berbagai lauk khas Bali seperti ayam betutu, sate lilit, lawar, dan sambal matah yang menyegarkan.',
        '<strong>Es Kelapa Muda</strong> — Minuman segar langsung dari buahnya, paling nikmat diminum sambil menunggu golden hour tiba.',
        '<strong>Pisang Goreng Crispy</strong> — Jajanan pinggir jalan yang renyah di luar dan lembut di dalam, sempurna menemani suasana santai sore hari.',
        '<strong>Sunset Cocktail</strong> — Minuman ikonik di kafe-kafe pantai Seminyak dan Kuta, wajib ada di tangan saat matahari mulai turun.',
      ],
      h3: 'Tips Berburu Sunset di Bali',
      p6: 'Agar momen sunset Anda di Bali menjadi sempurna, perhatikan beberapa tips berikut:',
      tips: [
        'Datanglah ke Tanah Lot minimal <strong>1,5 jam sebelum matahari terbenam</strong> untuk mendapatkan posisi foto terbaik dan hindari kerumunan.',
        'Unduh aplikasi cuaca atau Golden Hour Calculator untuk mengetahui waktu tepat sunset berdasarkan tanggal kunjungan.',
        'Bawa tripod kecil atau gunakan fitur timer kamera untuk mendapatkan foto siluet yang sempurna.',
        'Jika berkunjung di musim kemarau (April–Oktober), langit lebih cerah dan warna sunset jauh lebih dramatis.',
      ],
      p7: 'Sunset di Bali bukan sekadar fenomena alam — ia adalah ritual harian yang mengingatkan semua orang yang menyaksikannya tentang betapa indah dan fana kehidupan ini. Saat langit berubah dari biru ke merah ke ungu, waktu seolah berhenti, dan hati penuh dengan rasa syukur.',
      tags: ['Pantai', 'Sunset', 'Bali', 'Alam'],
    },
    en: {
      title: 'Best Sunset at West Bali Beach That Mesmerizes',
      category: 'Beach',
      bio: 'Travel blogger and landscape photographer who has explored exotic Southeast Asian beaches for the past 5 years.',
      imgCaption: 'The silhouette of Tanah Lot Temple standing proud on the rock, bathed in golden twilight light.',
      p1: 'If there is one experience that must be on every travel list to Bali, it is witnessing the sunset at the beaches on the western side of this island of the gods. Bali\'s sky seems to have a larger, more colorful, and more dramatic canvas than anywhere else in the world.',
      p2: 'From the mystical Tanah Lot to the cosmopolitan Seminyak, each beach offers its own way to enjoy the most spectacular light show that nature provides.',
      h1: 'Tanah Lot: A Temple on the Mesmerizing Rock',
      p3: 'Located about 20 kilometers from Denpasar, Tanah Lot is the most photogenic Hindu temple in Bali — standing on a rock surrounded by Indian Ocean waves. During high tide, the temple appears to float in the middle of the sea, creating a view that never fails to take your breath away.',
      quote: '"Watching the sun set behind Tanah Lot is like watching a nature drama staged especially for souls willing to pause for a moment and truly see." — Sari Dewi',
      p4: 'Beyond Tanah Lot, Berawa Beach, Batu Bolong Beach, and Old Man\'s Beach in Canggu offer a more relaxed vibe with rows of cafes, grilled fish stalls, and surfboards leaning against brick walls.',
      h2: 'Mouthwatering Beachside Cuisine',
      p5: 'Enjoying the Bali sunset becomes more perfect with local culinary delights enjoyed while overlooking the sea:',
      foods: [
        '<strong>Jimbaran Grilled Fish</strong> — Fresh seafood grilled over charcoal with authentic Balinese spices, enjoyed right on the beachside with feet touching the sand.',
        '<strong>Nasi Campur Bali</strong> — White rice served with various Balinese side dishes like betutu chicken, satay lilit, lawar, and refreshing sambal matah.',
        '<strong>Young Coconut Ice</strong> — A refreshing drink straight from the fruit, best enjoyed while waiting for golden hour to arrive.',
        '<strong>Crispy Fried Banana</strong> — A street snack crispy on the outside and soft on the inside, perfect for a relaxed afternoon.',
        '<strong>Sunset Cocktail</strong> — Iconic drinks at Seminyak and Kuta beach cafes, must-have in hand as the sun begins to descend.',
      ],
      h3: 'Tips for Sunset Hunting in Bali',
      p6: 'To make your sunset moment in Bali perfect, keep these tips in mind:',
      tips: [
        'Arrive at Tanah Lot at least <strong>1.5 hours before sunset</strong> to get the best photo position and avoid crowds.',
        'Download a weather app or Golden Hour Calculator to find out the exact sunset time based on your visit date.',
        'Bring a small tripod or use the camera timer to get the perfect silhouette photo.',
        'If visiting during dry season (April–October), the sky is clearer and sunset colors are far more dramatic.',
      ],
      p7: 'Sunset in Bali is not just a natural phenomenon — it is a daily ritual that reminds everyone who witnesses it of how beautiful and fleeting life is. As the sky shifts from blue to red to purple, time seems to stop, and the heart fills with gratitude.',
      tags: ['Beach', 'Sunset', 'Bali', 'Nature'],
    },
  },

  // ── 4. Monument Valley ────────────────────────────────────────────────────
  4: {
    date: 'Nov 14, 2025',
    readTime: { id: '62 Menit', en: '62 Minutes' },
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&q=80&auto=format&fit=crop',
    author: 'Arya Bagus',
    authorInitial: 'B',
    views: '3.8K',
    related: [1, 2, 3],
    id: {
      title: 'Petualangan Seru Menjelajahi Padang Pasir Monument Valley',
      category: 'Petualangan',
      bio: 'Petualang sejati yang mengspecialisasi diri pada destinasi alam liar dan budaya masyarakat adat di Amerika Utara dan Australia.',
      imgCaption: 'Formasi batu "The Mittens" yang ikonik di Monument Valley saat matahari terbit, memantulkan cahaya merah keemasan.',
      p1: 'Di perbatasan Arizona dan Utah, Amerika Serikat, berdiri salah satu lanskap paling ikonik di dunia — Monument Valley. Tiang-tiang batu merah raksasa yang menjulang dari dataran pasir, dikenal sebagai "The Mittens" dan "Merrick Butte," telah menjadi simbol visual dari kebebasan dan petualangan yang tak terbatas.',
      p2: 'Kawasan ini berada di tanah suci suku Navajo — salah satu bangsa asli Amerika yang paling kaya akan tradisi, spiritualitas, dan hubungan mendalam dengan alam. Menjelajahi Monument Valley bukan sekadar perjalanan wisata; ini adalah perjalanan ke jantung jiwa benua Amerika.',
      h1: 'The Mittens & Merrick Butte: Ikon Dunia Barat yang Abadi',
      p3: 'The Mittens — pasangan formasi batu yang menyerupai tangan kiri dan kanan dengan "ibu jari" yang menonjol — adalah spot foto paling terkenal di Monument Valley. Pada saat matahari terbit, batu-batu ini bersinar dengan warna merah keemasan yang membuat setiap fotografer kehilangan kata-kata.',
      quote: '"Berdiri di hadapan The Mittens saat fajar, dengan angin gurun yang dingin menerpa wajah dan kesunyian yang hanya dipecahkan oleh suara pasir — saya merasa begitu kecil, namun ironisnya, juga begitu hidup." — Bima Saputra',
      p4: 'Bagi yang ingin pengalaman lebih mendalam, tur jeep bersama pemandu Navajo adalah pilihan terbaik. Mereka tidak hanya membawa Anda ke spot-spot tersembunyi yang tidak bisa diakses dengan kendaraan biasa, tetapi juga berbagi cerita leluhur mereka tentang tanah ini.',
      h2: 'Kuliner Tradisional Navajo yang Wajib Dicicipi',
      p5: 'Di sekitar Monument Valley, kuliner tradisional Navajo menawarkan cita rasa yang otentik dan kaya sejarah:',
      foods: [
        '<strong>Fry Bread</strong> — Roti goreng pipih khas Navajo yang bisa disajikan manis dengan madu dan gula bubuk, atau gurih sebagai taco Navajo.',
        '<strong>Navajo Taco</strong> — Fry bread yang ditopkan dengan daging cincang berbumbu, kacang, keju, selada, dan tomat — versi Amerika Barat dari taco yang memanjakan selera.',
        '<strong>Mutton Stew</strong> — Semur daging domba slow-cooked dengan kentang, jagung, dan rempah sederhana yang menghangatkan di tengah dinginnya gurun malam.',
        '<strong>Piki Bread</strong> — Roti tipis berwarna biru-keabuan dari jagung biru, dipanggang di atas batu panas — warisan kuliner kuno yang masih dilestarikan hingga kini.',
        '<strong>Juniper Ash Tea</strong> — Teh herbal tradisional Navajo dari abu kayu juniper, diyakini memiliki khasiat penyembuhan dan sering disajikan dalam ritual adat.',
      ],
      h3: 'Tips Menjelajahi Monument Valley',
      p6: 'Gurun bisa menjadi lingkungan yang keras jika tidak dipersiapkan dengan baik. Berikut tips penting untuk menjelajahi Monument Valley:',
      tips: [
        'Kunjungi saat <strong>matahari terbit atau terbenam</strong> untuk mendapatkan cahaya terbaik dan warna batu yang paling dramatis dalam foto.',
        'Bawa minimal <strong>3–4 liter air per orang</strong> per hari karena cuaca gurun sangat kering dan dehidrasi terjadi lebih cepat dari yang Anda kira.',
        'Hire pemandu Navajo lokal — mereka memiliki akses ke area-area yang tidak boleh dimasuki wisatawan umum dan akan memberi konteks budaya yang tak ternilai.',
        'Hormati tanah dan aturan Navajo Nation: tidak diperbolehkan mendaki butte tanpa izin, dan pengumpulan batu atau tanah dilarang keras.',
      ],
      p7: 'Monument Valley bukan sekadar destinasi wisata — ia adalah pengalaman spiritual tentang waktu, alam, dan keberadaan manusia di muka bumi. Batu-batu raksasa itu telah berdiri selama jutaan tahun dan akan terus berdiri jauh setelah kita pergi. Sebuah perspektif yang, jika sungguh-sungguh dirasakan, mengubah segalanya.',
      tags: ['Petualangan', 'Gurun', 'Amerika', 'Alam'],
    },
    en: {
      title: 'Exciting Adventure Exploring Monument Valley Desert',
      category: 'Adventure',
      bio: 'True adventurer specializing in wild nature destinations and indigenous cultures in North America and Australia.',
      imgCaption: 'The iconic "The Mittens" rock formation at Monument Valley during sunrise, reflecting golden red light.',
      p1: 'On the border of Arizona and Utah, United States, stands one of the world\'s most iconic landscapes — Monument Valley. The giant red sandstone pillars rising from the sandy plains, known as "The Mittens" and "Merrick Butte," have become a visual symbol of freedom and boundless adventure.',
      p2: 'This area sits on the sacred land of the Navajo tribe — one of the most culturally rich Native American nations with deep traditions, spirituality, and profound connection to nature. Exploring Monument Valley is not just a tourist trip; it is a journey into the heart of the American continent\'s soul.',
      h1: 'The Mittens & Merrick Butte: Timeless Icons of the Wild West',
      p3: 'The Mittens — a pair of rock formations resembling left and right hands with protruding "thumbs" — are the most famous photo spots in Monument Valley. At sunrise, these rocks glow with a golden red color that leaves every photographer speechless.',
      quote: '"Standing before The Mittens at dawn, with the cold desert wind hitting my face and silence broken only by the sound of sand — I felt so small, yet ironically, also so alive." — Bima Saputra',
      p4: 'For those wanting a deeper experience, a jeep tour with a Navajo guide is the best choice. They not only take you to hidden spots inaccessible by regular vehicles, but also share their ancestral stories about this land.',
      h2: 'Traditional Navajo Cuisine You Must Try',
      p5: 'Around Monument Valley, traditional Navajo cuisine offers authentic and history-rich flavors:',
      foods: [
        '<strong>Fry Bread</strong> — Flat Navajo fried bread served sweet with honey and powdered sugar, or savory as a Navajo taco.',
        '<strong>Navajo Taco</strong> — Fry bread topped with seasoned ground meat, beans, cheese, lettuce, and tomato — the American West version of a taco.',
        '<strong>Mutton Stew</strong> — Slow-cooked lamb stew with potatoes, corn, and simple spices that warms you in the cold of the desert night.',
        '<strong>Piki Bread</strong> — Thin blue-gray bread made from blue corn, baked on a hot stone — an ancient culinary heritage still preserved today.',
        '<strong>Juniper Ash Tea</strong> — Traditional Navajo herbal tea made from juniper wood ash, believed to have healing properties and served in traditional rituals.',
      ],
      h3: 'Tips for Exploring Monument Valley',
      p6: 'The desert can be a harsh environment if not properly prepared. Here are essential tips for Monument Valley:',
      tips: [
        'Visit during <strong>sunrise or sunset</strong> for the best light and most dramatic rock colors in photos.',
        'Bring at least <strong>3–4 liters of water per person</strong> per day as the desert is very dry and dehydration happens faster than you think.',
        'Hire a local Navajo guide — they have access to areas not open to general tourists and provide invaluable cultural context.',
        'Respect the land and Navajo Nation rules: climbing buttes without permission is prohibited, and collecting rocks or soil is strictly forbidden.',
      ],
      p7: 'Monument Valley is not just a tourist destination — it is a spiritual experience about time, nature, and human existence on this earth. Those giant rocks have stood for millions of years and will continue to stand long after we are gone. A perspective that, if truly felt, changes everything.',
      tags: ['Adventure', 'Desert', 'America', 'Nature'],
    },
  },
};

// ─── Shared CSS snippets ───────────────────────────────────────────────────────
const H2 = 'text-2xl sm:text-[1.6rem] font-black text-gray-900 dark:text-white leading-tight tracking-tight mb-4 reveal';
const P  = 'text-base sm:text-[1.0625rem] text-gray-600 dark:text-gray-400 leading-[1.85]';
const DOT = '<span class="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"></span>';

// ─── Build article body HTML ──────────────────────────────────────────────────
function buildBodyHTML(article, lang) {
  const c = article[lang];
  const tagsHTML = c.tags.map(t =>
    `<span class="inline-block text-[0.7rem] font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">${t}</span>`
  ).join('');

  const foodsHTML = c.foods.map(f =>
    `<li class="flex gap-3 items-start reveal">${DOT}<p class="${P}">${f}</p></li>`
  ).join('');

  const tipsHTML = c.tips.map(t =>
    `<li class="flex gap-3 items-start reveal">${DOT}<p class="${P}">${t}</p></li>`
  ).join('');

  return `
    <h2 class="${H2}">${c.h1}</h2>
    <p class="${P} mb-6 reveal">${c.p3}</p>

    <blockquote class="relative my-10 pl-6 border-l-4 border-brand-red reveal">
      <p class="${P} italic text-gray-500 dark:text-gray-400">${c.quote}</p>
    </blockquote>

    <p class="${P} mb-12 reveal">${c.p4}</p>

    <h2 class="${H2}">${c.h2}</h2>
    <p class="${P} mb-5 reveal">${c.p5}</p>
    <ul class="space-y-4 mb-12" role="list">${foodsHTML}</ul>

    <h2 class="${H2}">${c.h3}</h2>
    <p class="${P} mb-5 reveal">${c.p6}</p>
    <ul class="space-y-4 mb-12" role="list">${tipsHTML}</ul>

    <p class="${P} reveal">${c.p7}</p>

    <div class="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2 reveal">
      <span class="text-[0.65rem] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mr-1"
            data-i18n="tags_label">Tags</span>
      ${tagsHTML}
    </div>
  `;
}

// ─── Build related articles HTML ──────────────────────────────────────────────
function buildRelatedHTML(article, lang) {
  const heading = lang === 'en' ? 'Related Articles' : 'Artikel Terkait';
  const itemsHTML = article.related.map(id => {
    const rel = ARTICLES[id];
    const title = rel[lang].title;
    const img = `${CARD_IMAGES[id]}?w=400&q=80&auto=format&fit=crop`;
    return `
      <a href="article.html?id=${id}" class="group block">
        <div class="aspect-video overflow-hidden rounded-lg mb-3 bg-gray-100 dark:bg-gray-800">
          <img src="${img}" alt="${title}"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               loading="lazy" />
        </div>
        <p class="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug group-hover:text-brand-red transition-colors line-clamp-2">${title}</p>
      </a>`;
  }).join('');

  return `
    <section class="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800 reveal">
      <h3 class="text-lg font-black text-gray-900 dark:text-white tracking-tight mb-6">${heading}</h3>
      <div class="grid sm:grid-cols-3 gap-5">${itemsHTML}</div>
    </section>`;
}

// ─── Populate DOM with article data ──────────────────────────────────────────
function populateArticle(article, lang) {
  const c = article[lang];

  // Update page title
  document.title = `${c.title} — JejakNusa`;

  // Header fields
  const setId = (id, val, isHTML = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isHTML) el.innerHTML = val; else el.textContent = val;
  };

  setId('art-title', c.title);
  setId('art-author-avatar', article.authorInitial);
  setId('art-author-name', article.author.toUpperCase());
  setId('art-date', article.date);
  setId('art-readtime', article.readTime[lang]);
  setId('art-p1', c.p1, true);
  setId('art-p2', c.p2, true);

  // Featured image
  const img = document.getElementById('art-featured-img');
  if (img) { img.src = article.image; img.alt = c.imgCaption; }
  setId('art-img-caption', c.imgCaption);

  // Article body
  const bodyEl = document.getElementById('art-body');
  if (bodyEl) bodyEl.innerHTML = buildBodyHTML(article, lang) + buildRelatedHTML(article, lang);
}

// ─── Init ──────────────────────────────────────────────────────────────────────
export async function initArticleComponents() {
  const params = new URLSearchParams(window.location.search);
  const articleId = parseInt(params.get('id') || '1', 10);
  const article = ARTICLES[articleId] || ARTICLES[1];
  const lang = localStorage.getItem('lang') || 'id';

  try {
    const [headerRes, contentRes] = await Promise.all([
      fetch(`${import.meta.env.BASE_URL}components/article/header.html`),
      fetch(`${import.meta.env.BASE_URL}components/article/content.html`),
    ]);

    const headerHtml  = await headerRes.text();
    const contentHtml = await contentRes.text();

    const headerEl  = document.getElementById('article-header-placeholder');
    const contentEl = document.getElementById('article-content-placeholder');

    if (headerEl)  headerEl.outerHTML  = headerHtml;
    if (contentEl) contentEl.outerHTML = contentHtml;

    populateArticle(article, lang);
    applyTranslations(lang);

    // Re-populate article content whenever language is switched
    const prevSetLang = window.setLang;
    window.setLang = (newLang) => {
      populateArticle(article, newLang);
      prevSetLang(newLang);
      // Re-show reveal elements in the re-rendered body (user is already viewing them)
      document.querySelectorAll('#art-body .reveal').forEach(el => el.classList.add('visible'));
    };

  } catch (err) {
    console.error('Error loading article components:', err);
  }
}
