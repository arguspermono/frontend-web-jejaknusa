// src/js/modules/destination-detail.js
import { applyTranslations } from '../utils/translations.js';
import { BASE_URL } from '../utils/base-url.js';


// ─── Destination Detail Data ───────────────────────────────────────────────────
const DETAILS = {
  'bromo': {
    image: '/src/assets/img/Bromo1.jpeg',
    durationDays: 3,
    price: '$125',
    category: { id: 'Gunung', en: 'Mountain' },
    id: {
      name: 'Gunung Bromo',
      location: 'Jawa Timur, Indonesia',
      tagline: 'Lautan Pasir dan Samudra Awan di Atap Jawa',
      about: [
        'Gunung Bromo, dengan ketinggian 2.329 mdpl, adalah salah satu gunung berapi aktif paling ikonik di Indonesia. Terletak di Taman Nasional Bromo Tengger Semeru, kawasan ini menghadirkan panorama yang tak terlupakan — lautan pasir yang luas, kepulan asap belerang dari kawah, dan samudra awan yang menyelimuti puncak saat fajar menyingsing.',
        'Momen matahari terbit Bromo adalah magnet utama yang menarik jutaan wisatawan setiap tahunnya. Dari titik pandang Penanjakan, cakrawala berubah merah menyala dan oranye, secara perlahan menerangi seluruh panorama kaldera Tengger — sebuah pertunjukan alam yang lebih terasa bila disaksikan langsung.',
      ],
      highlights: [
        { title: 'Sunrise Penanjakan', desc: 'Saksikan matahari terbit paling dramatis di Jawa dari titik pandang tertinggi kawasan Bromo.' },
        { title: 'Jeep Lautan Pasir', desc: 'Meluncur dengan jeep 4x4 melewati hamparan lautan pasir vulkanik menuju kaki kawah Bromo.' },
        { title: 'Bibir Kawah Aktif', desc: 'Daki 250 anak tangga menuju bibir kawah dan saksikan asap belerang mengepul dari perut bumi.' },
        { title: 'Bukit Teletubbies', desc: 'Savana hijau berlekuk yang sempurna untuk foto golden hour saat rumput menghijau subur.' },
      ],
      activities: [
        'Sewa jeep 4x4 untuk tur lautan pasir dan momen sunrise (tersedia mulai pukul 03.00)',
        'Trekking ke bibir kawah Bromo (30–45 menit berjalan kaki dari area parkir)',
        'Fotografi landscape dan astrofotografi malam berbintang',
        'Berkuda di lautan pasir bersama penyewaan kuda lokal',
        'Mengunjungi Pura Luhur Poten, kuil Hindu di tengah lautan pasir',
      ],
      tips: [
        'Datang <strong>sebelum pukul 04.00</strong> untuk mendapat posisi terbaik di Penanjakan saat sunrise.',
        'Bawa <strong>jaket tebal</strong> — suhu di puncak bisa mencapai 0–5°C pada malam dan dini hari.',
        'Booking jeep dan penginapan minimal 2–3 hari sebelumnya, terutama saat musim liburan.',
        'Gunakan masker atau buff untuk melindungi dari debu vulkanik selama perjalanan jeep.',
      ],
      transport: 'Terbang ke Surabaya (Bandara Juanda) atau Malang, lalu perjalanan darat ±3 jam menuju Cemoro Lawang — desa terdekat ke Bromo. Jeep sewaan tersedia langsung di sana.',
      bestTime: 'April – Oktober',
      bring: ['Jaket tebal / windbreaker', 'Masker debu / buff', 'Sepatu hiking', 'Kamera & tripod', 'Uang tunai (ATM terbatas)'],
    },
    en: {
      name: 'Mount Bromo',
      location: 'East Java, Indonesia',
      tagline: 'Sea of Sand and Ocean of Clouds Above Java',
      about: [
        'Mount Bromo, standing at 2,329 metres above sea level, is one of Indonesia\'s most iconic active volcanoes. Located in Bromo Tengger Semeru National Park, the area offers unforgettable panoramas — a vast volcanic sea of sand, sulphurous smoke rising from the crater, and an ocean of clouds blanketing the summit at dawn.',
        'Bromo\'s sunrise moment is the main draw for millions of visitors every year. From the Penanjakan viewpoint, the horizon blazes red and orange, slowly illuminating the entire Tengger caldera — a natural spectacle that must be witnessed in person to be truly appreciated.',
      ],
      highlights: [
        { title: 'Penanjakan Sunrise', desc: 'Witness the most dramatic sunrise in Java from the highest viewpoint in the Bromo area.' },
        { title: 'Sea of Sand Jeep Ride', desc: 'Cruise in a 4x4 jeep across the vast volcanic sand sea toward the base of Bromo\'s crater.' },
        { title: 'Active Crater Rim', desc: 'Climb 250 steps to the crater rim and witness sulphurous smoke rising from the depths of the earth.' },
        { title: 'Teletubbies Hill', desc: 'Rolling green savanna perfect for golden hour photography, especially when the grass is lush.' },
      ],
      activities: [
        'Rent a 4x4 jeep for the sea of sand and sunrise tour (available from 3:00 AM)',
        'Trek to Bromo\'s crater rim (30–45 minute walk from the parking area)',
        'Landscape photography and night-sky astrophotography',
        'Horseback riding on the sea of sand with local horse rentals',
        'Visit Pura Luhur Poten, a Hindu temple in the middle of the sea of sand',
      ],
      tips: [
        'Arrive <strong>before 4:00 AM</strong> to secure the best position at Penanjakan for sunrise.',
        'Bring a <strong>thick jacket</strong> — temperatures at the summit can drop to 0–5°C at night and early morning.',
        'Book jeeps and accommodation at least 2–3 days in advance, especially during holiday periods.',
        'Wear a mask or buff to protect yourself from volcanic dust during the jeep ride.',
      ],
      transport: 'Fly to Surabaya (Juanda Airport) or Malang, then take a ±3-hour drive to Cemoro Lawang — the nearest village to Bromo. Rental jeeps are available there.',
      bestTime: 'April – October',
      bring: ['Thick jacket / windbreaker', 'Dust mask / buff', 'Hiking shoes', 'Camera & tripod', 'Cash (ATMs are limited)'],
    },
  },

  'raja-ampat': {
    image: '/src/assets/img/RajaAmpat.png',
    durationDays: 5,
    price: '$250',
    category: { id: 'Pantai', en: 'Beach' },
    id: {
      name: 'Raja Ampat',
      location: 'Papua Barat, Indonesia',
      tagline: 'Surga Bawah Laut yang Belum Tertandingi di Dunia',
      about: [
        'Raja Ampat adalah surga kelautan yang tersebar di lebih dari 1.500 pulau kecil di ujung kepala burung Papua. Kawasan ini menyimpan keanekaragaman hayati laut tertinggi di dunia, dengan lebih dari 75% spesies karang dan 1.500 jenis ikan yang hidup di perairannya yang jernih seperti kristal.',
        'Di atas permukaan, gugus pulau berbatu dengan vegetasi lebat menciptakan siluet yang memesona. Di bawahnya, dinding karang vertikal yang dihiasi soft coral berwarna-warni, ikan pari manta yang berselancar anggun, dan kawanan ikan yang membentuk pelangi bawah air menjadikan Raja Ampat destinasi impian para penyelam dunia.',
      ],
      highlights: [
        { title: 'Selam & Snorkeling', desc: 'Jelajahi terumbu karang paling kaya di planet ini dengan visibilitas air mencapai 20 meter lebih.' },
        { title: 'Panorama Wayag', desc: 'Mendaki puncak batu karst Wayag untuk menyaksikan pemandangan laguna biru-hijau yang ikonik dari ketinggian.' },
        { title: 'Tanjung Pianemo', desc: 'Titik pandang terbaik dengan pemandangan pulau-pulau kecil berhutan dikelilingi air biru toska yang tenang.' },
        { title: 'Desa Arborek', desc: 'Desa nelayan tradisional dengan jembatan bambu dan pantai pasir putih — sempurna untuk snorkeling dari tepi pantai.' },
      ],
      activities: [
        'Scuba diving di lebih dari 30 titik selam kelas dunia seperti Cape Kri dan Manta Sandy',
        'Snorkeling bersama ikan pari manta di Manta Point',
        'Island hopping dengan kapal kayu tradisional',
        'Kayak menelusuri mangrove dan laguna tersembunyi',
        'Kunjungan budaya ke desa adat Suku Wawiyai',
      ],
      tips: [
        'Kunjungi antara <strong>Oktober–April</strong> untuk visibilitas terbaik dan laut yang tenang.',
        'Beli <strong>kartu selam Raja Ampat</strong> (±$100) yang wajib dimiliki setiap penyelam dan snorkeler.',
        'Pertimbangkan paket <strong>liveaboard</strong> untuk menjangkau titik selam terpencil yang tidak bisa dicapai dari resort.',
        'Hindari penggunaan sunscreen mengandung oksibenson karena merusak terumbu karang.',
      ],
      transport: 'Terbang ke Sorong (Bandara DEO) dari Jakarta atau Makassar, lalu naik speedboat ±3–6 jam menuju Waisai (ibukota Raja Ampat) atau langsung ke resort pilihan.',
      bestTime: 'Oktober – April',
      bring: ['Alat snorkel pribadi', 'Sunscreen reef-safe', 'Pakaian anti-UV (rash guard)', 'Kartu selam Raja Ampat', 'Uang tunai (tidak ada ATM di pulau kecil)'],
    },
    en: {
      name: 'Raja Ampat',
      location: 'West Papua, Indonesia',
      tagline: 'The World\'s Unrivalled Underwater Paradise',
      about: [
        'Raja Ampat is a marine paradise spread across more than 1,500 small islands at the tip of Papua\'s Bird\'s Head. This region holds the world\'s highest marine biodiversity, with over 75% of all coral species and 1,500 types of fish inhabiting its crystal-clear waters.',
        'Above the surface, rocky island clusters draped in dense vegetation create a breathtaking silhouette. Below, vertical coral walls adorned with colourful soft corals, gracefully gliding manta rays, and schools of fish painting living rainbows make Raja Ampat a bucket-list destination for divers worldwide.',
      ],
      highlights: [
        { title: 'Diving & Snorkelling', desc: 'Explore the richest coral reefs on the planet with underwater visibility exceeding 20 metres.' },
        { title: 'Wayag Panorama', desc: 'Hike to the top of Wayag\'s karst rock formations for an iconic view of blue-green lagoons from above.' },
        { title: 'Cape Pianemo', desc: 'The finest viewpoint overlooking forested islets surrounded by calm turquoise waters.' },
        { title: 'Arborek Village', desc: 'A traditional fishing village with bamboo jetties and white-sand beaches — perfect for shore snorkelling.' },
      ],
      activities: [
        'Scuba diving at over 30 world-class dive sites including Cape Kri and Manta Sandy',
        'Snorkelling with manta rays at Manta Point',
        'Island hopping by traditional wooden boat',
        'Kayaking through mangroves and hidden lagoons',
        'Cultural visits to the traditional Wawiyai tribe villages',
      ],
      tips: [
        'Visit between <strong>October and April</strong> for the best visibility and calmest seas.',
        'Purchase a <strong>Raja Ampat dive card</strong> (±$100) — mandatory for all divers and snorkellers.',
        'Consider a <strong>liveaboard package</strong> to reach remote dive sites inaccessible from resorts.',
        'Avoid sunscreen containing oxybenzone as it damages coral reefs.',
      ],
      transport: 'Fly to Sorong (DEO Airport) from Jakarta or Makassar, then take a speedboat ±3–6 hours to Waisai (Raja Ampat\'s capital) or directly to your resort.',
      bestTime: 'October – April',
      bring: ['Personal snorkel gear', 'Reef-safe sunscreen', 'Rash guard / UV-protective clothing', 'Raja Ampat dive card', 'Cash (no ATMs on small islands)'],
    },
  },

  'borobudur': {
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop',
    durationDays: 2,
    price: '$45',
    category: { id: 'Budaya', en: 'Culture' },
    id: {
      name: 'Candi Borobudur',
      location: 'Jawa Tengah, Indonesia',
      tagline: 'Warisan Buddha Terbesar di Dunia yang Mengagumkan',
      about: [
        'Candi Borobudur adalah mahakarya arsitektur abad ke-9 yang berdiri megah di Kabupaten Magelang, Jawa Tengah. Dibangun menggunakan lebih dari dua juta blok batu andesit tanpa perekat, candi berlantai sembilan ini merupakan monumen Buddha terbesar dan paling menakjubkan di seluruh dunia, sekaligus situs Warisan Dunia UNESCO.',
        'Lebih dari 2.672 panel relief dan 504 arca Buddha menghiasi teras-teras candi, menceritakan ajaran Buddha dan kehidupan manusia dalam karya seni yang memukau. Saat matahari terbit menyinari stupa-stupa puncak dan kabut tipis menyelimuti lembah Kedu, Borobudur tampak seperti sebuah mimpi yang menjadi nyata.',
      ],
      highlights: [
        { title: 'Sunrise di Stupa Utama', desc: 'Menyaksikan fajar dari puncak Borobudur saat kabut lembah perlahan tersibak oleh cahaya matahari.' },
        { title: 'Galeri Relief', desc: 'Berjalan menyusuri 504 panel relief yang terukir dengan detail luar biasa, bercerita tentang kehidupan dan ajaran Buddha.' },
        { title: 'Punthuk Setumbu', desc: 'Bukit di dekat Borobudur dengan panorama candi di antara puncak-puncak pohon dan lautan awan saat subuh.' },
        { title: 'Candi Mendut & Pawon', desc: 'Dua candi pendamping Borobudur yang membentuk garis lurus suci, hanya 3 km dari kompleks utama.' },
      ],
      activities: [
        'Tur sunrise dengan tiket khusus (tersedia via booking resmi Borobudur Authority)',
        'Tur berpemandu melewati galeri relief untuk memahami cerita terukir',
        'Bersepeda mengitari desa-desa tradisional di lereng Perbukitan Menoreh',
        'Workshop membatik dan pembuatan kerajinan di desa sekitar candi',
        'Mengunjungi Museum Karmawibhangga untuk memahami sejarah restorasi Borobudur',
      ],
      tips: [
        'Beli <strong>tiket sunrise</strong> jauh hari karena kuota sangat terbatas (maks. 1.200 orang).',
        'Kenakan <strong>sarung/selendang</strong> yang tersedia di pintu masuk sebagai penghormatan terhadap situs suci.',
        'Kunjungi di <strong>hari kerja</strong> untuk menghindari kepadatan wisatawan akhir pekan.',
        'Datang di musim kemarau (Mei–September) agar momen sunrise tidak terhalang mendung.',
      ],
      transport: 'Terbang ke Yogyakarta (Bandara YIA atau Adi Sucipto), lalu berkendara ±40 menit menuju Kabupaten Magelang. Tersedia shuttle bus dari pusat kota Yogyakarta dan Magelang.',
      bestTime: 'Mei – September',
      bring: ['Pakaian sopan (lengan panjang/sarung)', 'Sepatu nyaman untuk mendaki tangga', 'Topi dan kacamata hitam', 'Sunscreen', 'Air minum (tidak ada penjual di dalam candi)'],
    },
    en: {
      name: 'Borobudur Temple',
      location: 'Central Java, Indonesia',
      tagline: 'The World\'s Most Magnificent Buddhist Heritage',
      about: [
        'Borobudur is a 9th-century architectural masterpiece standing proudly in Magelang Regency, Central Java. Built using over two million andesite stone blocks without mortar, this nine-tiered temple is the world\'s largest and most awe-inspiring Buddhist monument, and a UNESCO World Heritage Site.',
        'More than 2,672 relief panels and 504 Buddha statues adorn the temple terraces, narrating Buddhist teachings and human life in breathtaking artistry. When the sunrise illuminates the summit stupas and a thin mist blankets the Kedu Valley, Borobudur looks like a dream made real.',
      ],
      highlights: [
        { title: 'Sunrise at the Main Stupa', desc: 'Watch dawn break from Borobudur\'s summit as valley mist slowly parts to reveal the surrounding landscape.' },
        { title: 'Relief Gallery Walk', desc: 'Walk through 504 exquisitely carved relief panels narrating Buddhist teachings and the cycle of life.' },
        { title: 'Punthuk Setumbu Hill', desc: 'A nearby hill offering a panoramic view of the temple rising above the treetops and morning clouds.' },
        { title: 'Mendut & Pawon Temples', desc: 'Two companion temples aligned in a sacred straight line with Borobudur, just 3 km from the main complex.' },
      ],
      activities: [
        'Sunrise tour with a special ticket (available via official Borobudur Authority booking)',
        'Guided tour through the relief galleries to understand the carved narratives',
        'Cycling through traditional villages on the Menoreh Hills slopes',
        'Batik and craft workshops in villages surrounding the temple',
        'Visiting the Karmawibhangga Museum to understand Borobudur\'s restoration history',
      ],
      tips: [
        'Book <strong>sunrise tickets</strong> well in advance as the quota is very limited (max. 1,200 visitors).',
        'Wear or borrow a <strong>sarong/sash</strong> available at the entrance as a sign of respect for the sacred site.',
        'Visit on <strong>weekdays</strong> to avoid weekend crowds.',
        'Come during the dry season (May–September) for clear sunrise views without cloud cover.',
      ],
      transport: 'Fly to Yogyakarta (YIA or Adi Sucipto Airport), then drive ±40 minutes to Magelang Regency. Shuttle buses are available from central Yogyakarta and Magelang.',
      bestTime: 'May – September',
      bring: ['Modest clothing (long sleeves/sarong)', 'Comfortable shoes for climbing steps', 'Hat and sunglasses', 'Sunscreen', 'Water bottle (no vendors inside the temple)'],
    },
  },

  'bali': {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&auto=format&fit=crop',
    durationDays: 7,
    price: '$180',
    category: { id: 'Pantai', en: 'Beach' },
    id: {
      name: 'Bali',
      location: 'Bali, Indonesia',
      tagline: 'Pulau Dewata yang Memesona Jiwa dan Raga',
      about: [
        'Bali adalah destinasi impian yang merangkum segalanya dalam satu pulau — pura Hindu yang megah, sawah terasering yang memesona, pantai berombak sempurna, seni dan budaya yang hidup, serta keramahan penduduk lokal yang tulus. Tak heran jika Bali selalu menduduki posisi teratas dalam daftar destinasi terbaik dunia.',
        'Dari Ubud di pegunungan yang tenang hingga Seminyak yang kosmopolitan, dari Tanah Lot yang berdiri di atas batu karang di tepi laut hingga keajaiban bawah air Tulamben, setiap sudut Bali menawarkan kisah dan pengalaman yang berbeda — semuanya memanggil untuk kembali.',
      ],
      highlights: [
        { title: 'Tegalalang Rice Terrace', desc: 'Hamparan sawah berteras di Ubud yang menciptakan pemandangan hijau berlapis, paling indah di pagi hari berkabut.' },
        { title: 'Sunset Tanah Lot', desc: 'Pura di atas batu karang di tepi laut dengan siluet menawan saat matahari tenggelam di cakrawala.' },
        { title: 'Ubud Monkey Forest', desc: 'Hutan suci dengan ratusan monyet ekor panjang yang hidup di antara reruntuhan pura kuno yang diselimuti lumut.' },
        { title: 'Pantai Seminyak & Kuta', desc: 'Pantai ikonik dengan ombak terbaik untuk belajar surfing dan momen sunset yang paling terkenal di Bali.' },
      ],
      activities: [
        'Belajar surfing di Kuta atau Canggu dengan instruktur lokal berpengalaman',
        'Retreat yoga pagi dan meditasi di studio alam terbuka Ubud',
        'Tur kuil: Tanah Lot, Uluwatu, Besakih, Tirta Empul',
        'Kelas memasak masakan Bali tradisional termasuk kunjungan pasar pagi',
        'Tari Kecak di Uluwatu dengan latar belakang tebing dan laut',
      ],
      tips: [
        'Kenakan <strong>kamen dan selendang</strong> (tersedia di semua pura) saat mengunjungi tempat suci.',
        'Hindari berkunjung saat <strong>Hari Raya Nyepi</strong> — seluruh Bali tutup total selama 24 jam.',
        'Sewa <strong>scooter</strong> atau driver lokal harian untuk fleksibilitas menjelajahi seluruh pulau.',
        'Datang di musim kemarau (April–Oktober) untuk cuaca terbaik dan ombak surfing ideal.',
      ],
      transport: 'Penerbangan internasional langsung tersedia ke Bandara Ngurah Rai, Denpasar dari ratusan kota di seluruh dunia. Dari bandara, taksi Bluebird atau Go-Car tersedia 24 jam.',
      bestTime: 'April – Oktober',
      bring: ['Kamen dan selendang (atau beli di Bali)', 'Pakaian pantai & rashguard', 'Sunscreen reef-safe', 'Obat nyamuk', 'Adaptor universal (soket standar Eropa)'],
    },
    en: {
      name: 'Bali',
      location: 'Bali, Indonesia',
      tagline: 'The Island of Gods That Captivates Body and Soul',
      about: [
        'Bali is a dream destination that encompasses everything on one island — majestic Hindu temples, enchanting terraced rice fields, perfectly surfable beaches, living arts and culture, and the genuine warmth of the local people. It\'s no wonder Bali consistently tops global best-destination lists.',
        'From the serene highlands of Ubud to the cosmopolitan scene of Seminyak, from the sea-cliff temple of Tanah Lot to the underwater wonders of Tulamben, every corner of Bali offers a different story and experience — all calling visitors to return.',
      ],
      highlights: [
        { title: 'Tegalalang Rice Terrace', desc: 'Layered terrace rice fields in Ubud creating a stunning green landscape, most beautiful in misty mornings.' },
        { title: 'Tanah Lot Sunset', desc: 'A clifftop temple on a sea rock with a stunning silhouette as the sun sets on the horizon.' },
        { title: 'Ubud Monkey Forest', desc: 'A sacred forest with hundreds of long-tailed macaques living among ancient moss-covered temple ruins.' },
        { title: 'Seminyak & Kuta Beach', desc: 'Iconic beaches with the best waves for learning to surf and Bali\'s most celebrated sunset moments.' },
      ],
      activities: [
        'Learn surfing in Kuta or Canggu with experienced local instructors',
        'Morning yoga retreat and meditation in Ubud\'s open-air studios',
        'Temple tours: Tanah Lot, Uluwatu, Besakih, Tirta Empul',
        'Traditional Balinese cooking class including a morning market visit',
        'Kecak fire dance performance at Uluwatu cliff-edge amphitheatre',
      ],
      tips: [
        'Wear a <strong>kamen and sash</strong> (available at all temples) when visiting sacred sites.',
        'Avoid visiting during <strong>Nyepi Day</strong> — the entire island shuts down for 24 hours of complete silence.',
        'Rent a <strong>scooter</strong> or hire a daily local driver for the flexibility to explore the whole island.',
        'Visit during the dry season (April–October) for ideal weather and surfing conditions.',
      ],
      transport: 'Direct international flights land at Ngurah Rai Airport, Denpasar from hundreds of cities worldwide. Bluebird taxis and ride-hailing apps are available 24/7 from the airport.',
      bestTime: 'April – October',
      bring: ['Kamen and sash (or buy in Bali)', 'Beachwear & rash guard', 'Reef-safe sunscreen', 'Insect repellent', 'Universal adapter (European plug standard)'],
    },
  },

  'rinjani': {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop',
    durationDays: 4,
    price: '$150',
    category: { id: 'Gunung', en: 'Mountain' },
    id: {
      name: 'Gunung Rinjani',
      location: 'Nusa Tenggara Barat, Indonesia',
      tagline: 'Puncak Tertinggi Lombok dan Tantangan Abadi Para Pendaki',
      about: [
        'Gunung Rinjani, dengan puncak setinggi 3.726 mdpl, adalah gunung berapi aktif kedua tertinggi di Indonesia. Terletak di Pulau Lombok, Nusa Tenggara Barat, Rinjani dikenal tidak hanya karena ketinggiannya yang menantang, tetapi juga karena keindahan Danau Segara Anak yang tersembunyi di dalam kalderanya.',
        'Pendakian ke Rinjani adalah perjalanan epik yang melewati hutan hujan yang lebat, padang savana yang terbuka, dan tebing vulkanik yang dramatis. Di dasar kaldera, Danau Segara Anak dengan air biru kehijauan dan Gunung Baru Jari yang menyembul di tengahnya menciptakan panorama yang sulit dipercaya tanpa melihat sendiri.',
      ],
      highlights: [
        { title: 'Puncak 3.726 mdpl', desc: 'Mencapai puncak Rinjani dan menyaksikan panorama 360° yang mencakup Bali, Sumbawa, dan samudra luas.' },
        { title: 'Danau Segara Anak', desc: 'Danau kawah di ketinggian 2.000 mdpl dengan air jernih kehijauan dan kolam air panas alami di tepinya.' },
        { title: 'Air Terjun Sendang Gile', desc: 'Air terjun dua tingkat yang segar di kaki gunung, sempurna untuk berendam setelah pendakian yang panjang.' },
        { title: 'Pemandangan Lembah Sembalun', desc: 'Padang savana kecoklatan yang membentang di jalur Sembalun — pemandangan paling ikonik di Rinjani.' },
      ],
      activities: [
        'Pendakian 3 hari 2 malam melalui jalur Sembalun (lebih terbuka) atau Senaru (lebih menantang)',
        'Berkemah di bibir kaldera dengan pemandangan bintang yang luar biasa',
        'Berendam di kolam air panas alami dekat Danau Segara Anak',
        'Memancing di Danau Segara Anak (ikan lokal yang melimpah)',
        'Trekking ke Air Terjun Sendang Gile di desa Senaru tanpa harus mendaki penuh',
      ],
      tips: [
        'Wajib menggunakan <strong>pemandu bersertifikat</strong> — pendakian mandiri tidak diperbolehkan tanpa izin khusus.',
        'Latihan fisik secara rutin <strong>minimal 2 bulan sebelum</strong> pendakian, termasuk latihan beban kaki.',
        'Daftar izin pendakian di Taman Nasional Gunung Rinjani — siapkan KTP dan biaya retribusi.',
        'Pendakian terbaik di musim kemarau <strong>Mei–November</strong>. Hindari awal tahun saat jalur licin dan berbahaya.',
      ],
      transport: 'Terbang ke Lombok Praya International Airport. Dari sana, sewa kendaraan ±2 jam ke Desa Sembalun (jalur timur) atau ±3 jam ke Desa Senaru (jalur utara) sebagai titik awal pendakian.',
      bestTime: 'Mei – November',
      bring: ['Sepatu hiking berancang kuat', 'Sleeping bag -5°C', 'Trekking pole', 'Headlamp + baterai cadangan', 'Raincoat / poncho', 'Makanan energi tinggi (coklat, energy bar)'],
    },
    en: {
      name: 'Mount Rinjani',
      location: 'West Nusa Tenggara, Indonesia',
      tagline: 'Lombok\'s Highest Peak and the Ultimate Trekker\'s Challenge',
      about: [
        'Mount Rinjani, with its summit at 3,726 metres above sea level, is Indonesia\'s second-highest active volcano. Located on Lombok Island, West Nusa Tenggara, Rinjani is renowned not only for its challenging altitude but also for the stunning Segara Anak crater lake hidden within its vast caldera.',
        'Trekking Rinjani is an epic journey through dense rainforest, open savanna, and dramatic volcanic cliffs. At the caldera floor, Segara Anak lake with its blue-green waters and Gunung Baru Jari volcano rising from its centre creates a panorama that is hard to believe without witnessing it firsthand.',
      ],
      highlights: [
        { title: 'Summit at 3,726 m', desc: 'Reach Rinjani\'s peak and enjoy a 360° panorama spanning Bali, Sumbawa, and the open ocean.' },
        { title: 'Segara Anak Crater Lake', desc: 'A crater lake at 2,000 m altitude with clear blue-green water and natural hot springs at its shore.' },
        { title: 'Sendang Gile Waterfall', desc: 'A refreshing two-tiered waterfall at the mountain\'s base, perfect for a cool dip after a long trek.' },
        { title: 'Sembalun Valley View', desc: 'The brownish savanna stretching across the Sembalun route — Rinjani\'s most iconic visual.' },
      ],
      activities: [
        '3-day, 2-night trek via the Sembalun route (more open) or Senaru route (more challenging)',
        'Camping at the crater rim with extraordinary stargazing',
        'Soaking in natural hot springs near Segara Anak lake',
        'Fishing in Segara Anak lake (abundant local fish)',
        'Trekking to Sendang Gile Waterfall in Senaru village without a full summit climb',
      ],
      tips: [
        'You <strong>must use a certified guide</strong> — independent trekking without special permits is not allowed.',
        'Train physically for <strong>at least 2 months before</strong> trekking, including leg-strength exercises.',
        'Register for a trekking permit at Gunung Rinjani National Park — bring your ID and pay the retribution fee.',
        'Trek during the dry season <strong>May–November</strong>. Avoid early in the year when trails are slippery and dangerous.',
      ],
      transport: 'Fly to Lombok Praya International Airport. From there, rent a vehicle for ±2 hours to Sembalun Village (east route) or ±3 hours to Senaru Village (north route) as the trekking starting point.',
      bestTime: 'May – November',
      bring: ['Sturdy hiking boots with ankle support', 'Sleeping bag (-5°C rating)', 'Trekking poles', 'Headlamp + spare batteries', 'Raincoat / poncho', 'High-energy food (chocolate, energy bars)'],
    },
  },

  'yogyakarta': {
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80&auto=format&fit=crop',
    durationDays: 3,
    price: '$65',
    category: { id: 'Budaya', en: 'Culture' },
    id: {
      name: 'Yogyakarta',
      location: 'DI Yogyakarta, Indonesia',
      tagline: 'Kota Pelajar, Seni, dan Tradisi Jawa yang Selalu Berdenyut',
      about: [
        'Yogyakarta, atau akrab disapa Jogja, adalah jantung kebudayaan Jawa yang berdetak penuh semangat. Kota ini adalah rumah bagi Kraton Yogyakarta — istana Kesultanan Ngayogyakarta Hadiningrat yang masih aktif — sekaligus pusat seni batik, wayang kulit, dan gamelan yang telah diakui sebagai warisan budaya tak benda UNESCO.',
        'Namun Yogyakarta lebih dari sekadar sejarah. Jalan Malioboro yang selalu ramai, angkringan dengan kopi joss legendaris, mural seni di Kampung Kotagede, dan kreativitas para seniman muda menjadikan kota ini berkembang dinamis di antara akar tradisi yang kuat.',
      ],
      highlights: [
        { title: 'Kraton Yogyakarta', desc: 'Istana kerajaan yang masih aktif dihuni Sultan, lengkap dengan koleksi pusaka, museum, dan pertunjukan seni rutin.' },
        { title: 'Jalan Malioboro', desc: 'Jantung wisata Jogja — belanja batik, kerajinan perak, dan menikmati kuliner jajanan kaki lima legendaris.' },
        { title: 'Candi Prambanan', desc: 'Kompleks candi Hindu abad ke-9 yang didedikasikan untuk Trimurti, hanya 17 km dari pusat kota.' },
        { title: 'Kampung Batik Laweyan', desc: 'Kampung penghasil batik tertua di Indonesia dengan workshop membatik dan butik batik eksklusif.' },
      ],
      activities: [
        'Kelas membatik tulis di workshop Batik Plentong atau Batik Winotosastro',
        'Menyaksikan pertunjukan Wayang Kulit semalam suntuk di Kraton atau Sonobudoyo',
        'Tur kuliner malam Malioboro — sate klatak, gudeg, bakmi jawa',
        'Bersepeda ke Kotagede untuk melihat rumah-rumah joglo bersejarah dan pengrajin perak',
        'Day trip ke Borobudur (±40 menit) atau Prambanan (±20 menit)',
      ],
      tips: [
        'Tawar harga secara sopan di Malioboro — ini sudah menjadi budaya dan diharapkan oleh pedagang.',
        'Coba <strong>kopi joss</strong> di Angkringan Lik Man, kopi arang khas Jogja yang wajib dicicipi.',
        'Hindari datang saat ujian nasional (April–Mei) karena hotel penuh dan harga naik drastis.',
        'Gunakan <strong>Trans Jogja</strong> (bus kota) atau Grab/Gojek untuk mobilitas hemat di dalam kota.',
      ],
      transport: 'Penerbangan ke Yogyakarta International Airport (YIA) atau Adi Sucipto dari Jakarta, Bali, dan kota besar lainnya. Juga bisa naik kereta Gajayana dari Jakarta (±8 jam) atau Pasundan dari Bandung (±6 jam).',
      bestTime: 'Mei – Oktober',
      bring: ['Pakaian sopan untuk mengunjungi kraton dan candi', 'Uang tunai (banyak pedagang belum menerima kartu)', 'Tas belanja lipat', 'Kamera atau smartphone', 'Sandal nyaman untuk berjalan jauh'],
    },
    en: {
      name: 'Yogyakarta',
      location: 'Special Region of Yogyakarta, Indonesia',
      tagline: 'The City of Students, Arts, and Living Javanese Tradition',
      about: [
        'Yogyakarta, affectionately known as Jogja, is the beating heart of Javanese culture. The city is home to the Kraton Yogyakarta — the still-active palace of the Ngayogyakarta Hadiningrat Sultanate — as well as the centre of batik, wayang kulit (shadow puppetry), and gamelan arts recognised as UNESCO Intangible Cultural Heritage.',
        'Yet Yogyakarta is more than just history. The ever-bustling Malioboro Street, legendary angkringan stalls with kopi joss, street art murals in Kotagede, and the creativity of young local artists make this city thrive dynamically while remaining rooted in centuries of tradition.',
      ],
      highlights: [
        { title: 'Kraton Yogyakarta', desc: 'The still-inhabited royal palace of the Sultan, featuring pusaka heirlooms, a museum, and regular cultural performances.' },
        { title: 'Malioboro Street', desc: 'Jogja\'s tourism heartbeat — shop for batik, silver crafts, and savour legendary street food.' },
        { title: 'Prambanan Temple', desc: 'A 9th-century Hindu temple complex dedicated to the Trimurti, just 17 km from the city centre.' },
        { title: 'Laweyan Batik Village', desc: 'Indonesia\'s oldest batik-producing village with hands-on batik workshops and exclusive batik boutiques.' },
      ],
      activities: [
        'Hand-drawn batik class at Batik Plentong or Batik Winotosastro workshops',
        'Watch an all-night Wayang Kulit shadow puppet performance at the Kraton or Sonobudoyo Museum',
        'Malioboro night food tour — sate klatak, gudeg, and Javanese noodles',
        'Cycling to Kotagede to see historic joglo houses and silvercraft artisans',
        'Day trips to Borobudur (±40 min) or Prambanan (±20 min)',
      ],
      tips: [
        'Bargain politely on Malioboro Street — this is part of the culture and expected by vendors.',
        'Try <strong>kopi joss</strong> at Angkringan Lik Man — Jogja\'s unique charcoal-infused coffee you must taste.',
        'Avoid visiting during national exam season (April–May) as hotels fill up and prices spike.',
        'Use <strong>Trans Jogja</strong> city buses or Grab/Gojek for affordable transport within the city.',
      ],
      transport: 'Flights to Yogyakarta International Airport (YIA) or Adi Sucipto from Jakarta, Bali, and other major cities. Alternatively, take the Gajayana train from Jakarta (±8 hours) or the Pasundan from Bandung (±6 hours).',
      bestTime: 'May – October',
      bring: ['Modest clothing for the palace and temples', 'Cash (many vendors don\'t accept cards)', 'Foldable shopping bag', 'Camera or smartphone', 'Comfortable sandals for long walks'],
    },
  },

  'toba': {
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&q=80&auto=format&fit=crop',
    durationDays: 4,
    price: '$95',
    category: { id: 'Alam', en: 'Nature' },
    id: {
      name: 'Danau Toba',
      location: 'Sumatera Utara, Indonesia',
      tagline: 'Danau Supervolkano Terbesar di Dunia dengan Budaya Batak yang Kaya',
      about: [
        'Danau Toba adalah danau vulkanik terbesar di dunia sekaligus danau terdalam di Asia Tenggara, dengan luas 1.707 km² dan kedalaman hingga 505 meter. Terbentuk akibat letusan supervulkan raksasa sekitar 74.000 tahun lalu, kaldera yang terisi air ini menjadi salah satu keajaiban geologi paling luar biasa di Bumi.',
        'Di tengah Danau Toba berdiri Pulau Samosir — pulau yang lebih besar dari negara Singapura — yang menjadi pusat kebudayaan Batak Toba. Arsitektur rumah adat Batak yang unik, tarian tor-tor yang ritmis, dan kain ulos yang penuh makna filsafat menjadikan Toba tidak hanya indah secara alam, tetapi juga kaya secara budaya.',
      ],
      highlights: [
        { title: 'Pulau Samosir', desc: 'Pulau di tengah danau dengan desa adat Batak, pantai air tawar, dan pemandangan Danau Toba yang mengelilingi.' },
        { title: 'Air Terjun Sipiso-piso', desc: 'Air terjun setinggi 120 meter yang mengalir deras ke dalam danau, terlihat dari kejauhan di tebing Tongging.' },
        { title: 'Desa Adat Ambarita', desc: 'Desa bersejarah di Samosir dengan peninggalan batu kuno dan rumah adat Batak berumur ratusan tahun.' },
        { title: 'Tuktuk Siadong', desc: 'Semenanjung kecil di Samosir yang menjadi pusat akomodasi dan paling dekat dengan budaya Batak aktif.' },
      ],
      activities: [
        'Berkeliling Pulau Samosir dengan sepeda motor atau sepeda sewaan',
        'Berenang dan kayak di air danau yang segar dan tenang',
        'Mengikuti pertunjukan tarian Tor-tor dan musik Gondang Batak',
        'Membeli kain ulos langsung dari penenun tradisional di desa',
        'Mengunjungi Museum Huta Bolon Simanindo untuk memahami sejarah Batak',
      ],
      tips: [
        'Naik <strong>feri dari Parapat</strong> menuju Samosir (±45 menit) — feri berjalan reguler sepanjang hari.',
        'Sewa <strong>sepeda motor</strong> di Samosir untuk keliling pulau dengan lebih bebas (±Rp 80.000/hari).',
        'Cicipi <strong>arsik ikan mas</strong> — masakan khas Batak dengan bumbu khas yang kaya rempah.',
        'Kunjungi di bulan <strong>Juni–Agustus</strong> untuk cuaca terbaik dan festival Danau Toba tahunan.',
      ],
      transport: 'Terbang ke Bandara Silangit (SIB) dari Jakarta — penerbangan langsung tersedia, lalu ±1 jam ke Parapat. Alternatif: terbang ke Medan lalu naik bus ±4 jam ke Parapat. Dari Parapat, naik feri ke Samosir.',
      bestTime: 'Juni – Agustus',
      bring: ['Baju hangat (suhu malam bisa turun)', 'Pakaian renang', 'Kamera wide-angle untuk panorama danau', 'Uang tunai', 'Ulos tipis sebagai oleh-oleh khas'],
    },
    en: {
      name: 'Lake Toba',
      location: 'North Sumatra, Indonesia',
      tagline: 'The World\'s Largest Supervolcano Lake with Rich Batak Culture',
      about: [
        'Lake Toba is the world\'s largest volcanic lake and Southeast Asia\'s deepest, covering 1,707 km² with depths reaching 505 metres. Formed by a cataclysmic supervolcanic eruption approximately 74,000 years ago, this water-filled caldera is one of the most extraordinary geological wonders on Earth.',
        'At the centre of Lake Toba lies Samosir Island — larger than the nation of Singapore — which serves as the heartland of Batak Toba culture. The unique architecture of Batak traditional houses, the rhythmic tor-tor dance, and ulos cloth rich in philosophical meaning make Toba not only a natural wonder but also a cultural treasure.',
      ],
      highlights: [
        { title: 'Samosir Island', desc: 'An island within the lake featuring Batak traditional villages, freshwater beaches, and panoramic lake views all around.' },
        { title: 'Sipiso-piso Waterfall', desc: 'A 120-metre waterfall plunging dramatically into the lake, visible from afar on the Tongging cliffs.' },
        { title: 'Ambarita Traditional Village', desc: 'A historic village on Samosir with ancient stone relics and centuries-old Batak traditional houses.' },
        { title: 'Tuktuk Siadong', desc: 'A small peninsula on Samosir that is the accommodation hub and closest point to active Batak culture.' },
      ],
      activities: [
        'Touring Samosir Island by rented motorbike or bicycle',
        'Swimming and kayaking in the lake\'s fresh, calm waters',
        'Watching a Tor-tor dance and Gondang Batak music performance',
        'Purchasing ulos cloth directly from traditional weavers in the villages',
        'Visiting the Huta Bolon Simanindo Museum to understand Batak history',
      ],
      tips: [
        'Take the <strong>ferry from Parapat</strong> to Samosir (±45 minutes) — ferries run regularly throughout the day.',
        'Rent a <strong>motorbike</strong> on Samosir to explore the island freely (±Rp 80,000/day).',
        'Try <strong>arsik ikan mas</strong> — a signature Batak carp dish cooked with a rich blend of local spices.',
        'Visit in <strong>June–August</strong> for the best weather and the annual Lake Toba Festival.',
      ],
      transport: 'Fly to Silangit Airport (SIB) from Jakarta — direct flights are available, then ±1 hour to Parapat. Alternative: fly to Medan then take a bus ±4 hours to Parapat. From Parapat, take the ferry to Samosir.',
      bestTime: 'June – August',
      bring: ['Warm clothes (nights can get cold)', 'Swimwear', 'Wide-angle camera for lake panoramas', 'Cash', 'Thin ulos cloth as a souvenir'],
    },
  },

  'komodo': {
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80&auto=format&fit=crop',
    durationDays: 3,
    price: '$175',
    category: { id: 'Alam', en: 'Nature' },
    id: {
      name: 'Taman Nasional Komodo',
      location: 'Nusa Tenggara Timur, Indonesia',
      tagline: 'Kerajaan Kadal Raksasa di Tengah Savana Keemasan',
      about: [
        'Taman Nasional Komodo, yang terdiri dari tiga pulau utama — Komodo, Rinca, dan Padar — adalah satu-satunya tempat di dunia yang menjadi habitat alami Komodo (Varanus komodoensis), kadal terbesar yang masih hidup di muka bumi. Lebih dari 3.000 ekor Komodo hidup bebas di kawasan ini, dilindungi sebagai Warisan Dunia UNESCO sejak 1991.',
        'Namun pesona taman nasional ini jauh melampaui naga-naga purba. Pantai Pink (Pink Beach) dengan pasir berwarna merah jambu yang langka, perairan biru-hijau dengan visibilitas menyelam kelas dunia, dan Pulau Padar dengan pemandangan panoramik tiga teluk berwarna-warni menjadikan Komodo destinasi yang benar-benar unik di planet ini.',
      ],
      highlights: [
        { title: 'Pelacakan Komodo', desc: 'Berjalan dengan pemandu bersenjata di antara puluhan ekor Komodo liar — pengalaman yang memacu adrenalin.' },
        { title: 'Pink Beach', desc: 'Salah satu dari hanya tujuh pantai berpasir merah muda di dunia, dengan snorkeling terumbu karang yang luar biasa.' },
        { title: 'Panorama Pulau Padar', desc: 'Pendakian singkat menuju puncak Padar untuk melihat tiga teluk dengan warna air yang berbeda secara bersamaan.' },
        { title: 'Menyelam Kanawa', desc: 'Pulau kecil dengan terumbu karang yang masih perawan dan kehidupan bawah laut yang memukau.' },
      ],
      activities: [
        'Pelacakan Komodo dengan pemandu bersertifikat di Pulau Komodo atau Rinca',
        'Snorkeling di Pink Beach bersama ikan-ikan warna-warni dan karang keras',
        'Menyelam di titik selam kelas dunia seperti Batu Bolong dan Siaba Besar',
        'Trekking ke puncak Pulau Padar untuk pemandangan tiga teluk yang ikonik',
        'Island hopping ke Manta Point untuk snorkeling bersama pari manta besar',
      ],
      tips: [
        '<strong>Selalu ikuti pemandu</strong> saat pelacakan Komodo — jangan pernah berpisah atau mendekati kadal sendirian.',
        'Hindari kunjungan saat Komodo sedang makan atau di area dekat sarang mereka.',
        'Bawa <strong>uang tunai Rupiah</strong> yang cukup — tidak ada ATM di pulau-pulau ini.',
        'Kunjungi di <strong>April–Desember</strong> untuk menghindari musim hujan yang membuat jalur trekking licin.',
      ],
      transport: 'Terbang ke Labuan Bajo (Bandara Komodo, LBJ) dari Bali atau Jakarta — penerbangan langsung tersedia. Dari Labuan Bajo, sewa kapal kayu (phinisi) atau ikut paket boat tour harian ke pulau-pulau di taman nasional.',
      bestTime: 'April – Desember',
      bring: ['Sepatu trekking anti-selip', 'Baju lengan panjang (perlindungan sengatan Komodo)', 'Sunscreen & topi', 'Masker snorkel pribadi', 'Uang tunai Rupiah yang cukup'],
    },
    en: {
      name: 'Komodo National Park',
      location: 'East Nusa Tenggara, Indonesia',
      tagline: 'Kingdom of Giant Lizards Amid Golden Savanna',
      about: [
        'Komodo National Park, comprising three main islands — Komodo, Rinca, and Padar — is the only place on Earth where the Komodo dragon (Varanus komodoensis), the world\'s largest living lizard, roams wild. More than 3,000 Komodo dragons inhabit the area, protected as a UNESCO World Heritage Site since 1991.',
        'Yet the park\'s appeal extends far beyond its ancient dragons. Pink Beach — one of only seven pink-sand beaches in the world — world-class diving waters, and Padar Island\'s panoramic view of three differently-coloured bays make Komodo a truly unique destination on this planet.',
      ],
      highlights: [
        { title: 'Komodo Dragon Trek', desc: 'Walk with armed guides among dozens of wild Komodo dragons — an exhilarating, once-in-a-lifetime experience.' },
        { title: 'Pink Beach', desc: 'One of only seven pink-sand beaches in the world, with incredible coral reef snorkelling just offshore.' },
        { title: 'Padar Island Panorama', desc: 'A short climb to Padar\'s summit to simultaneously see three bays with distinctly different water colours.' },
        { title: 'Kanawa Island Diving', desc: 'A small island with pristine coral reefs and stunning marine life for world-class snorkelling and diving.' },
      ],
      activities: [
        'Komodo dragon tracking with certified guides on Komodo or Rinca Island',
        'Snorkelling at Pink Beach among colourful fish and hard corals',
        'Scuba diving at world-class sites like Batu Bolong and Siaba Besar',
        'Trekking to the summit of Padar Island for its iconic three-bay panorama',
        'Island hopping to Manta Point for snorkelling with giant oceanic manta rays',
      ],
      tips: [
        '<strong>Always stay with your guide</strong> during Komodo tracking — never separate from the group or approach a dragon alone.',
        'Avoid visiting when Komodo dragons are feeding or near their nesting areas.',
        'Bring <strong>sufficient Rupiah cash</strong> — there are no ATMs on these islands.',
        'Visit between <strong>April and December</strong> to avoid the rainy season that makes trekking trails slippery.',
      ],
      transport: 'Fly to Labuan Bajo (Komodo Airport, LBJ) from Bali or Jakarta — direct flights available. From Labuan Bajo, rent a traditional wooden boat (phinisi) or join a daily boat tour package to the national park islands.',
      bestTime: 'April – December',
      bring: ['Anti-slip trekking shoes', 'Long-sleeved shirt (protection from Komodo\'s reach)', 'Sunscreen & hat', 'Personal snorkel mask', 'Sufficient Rupiah cash'],
    },
  },

  'nusa-penida': {
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&q=80&auto=format&fit=crop',
    durationDays: 2,
    price: '$85',
    category: { id: 'Pantai', en: 'Beach' },
    id: {
      name: 'Nusa Penida',
      location: 'Bali, Indonesia',
      tagline: 'Tebing Dramatis dan Kristal Biru Tersembunyi di Selatan Bali',
      about: [
        'Nusa Penida adalah pulau terbesar dari tiga pulau nusa (Nusa Penida, Nusa Lembongan, dan Nusa Ceningan) yang terletak di sebelah tenggara Bali. Pulau ini menawarkan pemandangan yang dramatis dan kontras — tebing kapur setinggi ratusan meter yang terjal, dipadukan dengan air laut berwarna biru-tosca yang begitu jernih.',
        'Popularitas Nusa Penida meroket berkat satu foto Kelingking Beach yang mendunia. Tebing berbentuk kepala dinosaurus T-Rex dengan pantai tersembunyi di bawahnya adalah salah satu lanskap paling ikonik di Asia Tenggara. Namun Nusa Penida menyimpan lebih banyak kejutan — Angel\'s Billabong, Broken Beach, Crystal Bay, dan kesempatan snorkeling bersama pari manta raksasa.',
      ],
      highlights: [
        { title: 'Kelingking Beach', desc: 'Tebing berbentuk kepala T-Rex dengan pantai tersembunyi di bawahnya — ikon Nusa Penida yang paling difoto.' },
        { title: 'Angel\'s Billabong', desc: 'Kolam alami yang terbentuk dari batuan karang, dengan air jernih kehijauan dan pemandangan laut terbuka.' },
        { title: 'Broken Beach', desc: 'Teluk berbentuk setengah lingkaran dengan lengkung alam yang menakjubkan dan air biru yang menghipnosis.' },
        { title: 'Manta Point', desc: 'Titik snorkeling terbaik untuk berenang bersama pari manta raksasa di perairan yang tenang.' },
      ],
      activities: [
        'Foto ikonik di viewpoint Kelingking Beach (turun ke pantai butuh 45–60 menit)',
        'Snorkeling bersama pari manta di Manta Point (area Crystal Bay)',
        'Menyelam di Crystal Bay untuk melihat mola-mola (ikan matahari) di musim tertentu',
        'Menjelajahi Angel\'s Billabong dan Broken Beach dengan berjalan kaki',
        'Island hopping ke Nusa Lembongan dan Nusa Ceningan',
      ],
      tips: [
        'Sewa <strong>scooter di Sampalan</strong> begitu turun dari kapal — jalan di Nusa Penida sempit dan menantang.',
        'Kunjungi Kelingking dan Angel\'s Billabong di <strong>pagi hari</strong> sebelum wisatawan ramai berdatangan.',
        'Kondisi jalan di barat Nusa Penida <strong>sangat terjal</strong> — perhatikan kemampuan berkendara di tanjakan curam.',
        'Snorkeling bersama manta paling baik di antara pukul <strong>07.00–09.00 pagi</strong> sebelum angin kencang.',
      ],
      transport: 'Naik fast boat dari Pelabuhan Sanur, Bali (±45 menit, tiket ±Rp 150.000–200.000 sekali jalan). Tersedia juga dari Padang Bai (±30 menit). Fast boat beroperasi mulai pukul 07.00 pagi.',
      bestTime: 'April – Oktober',
      bring: ['Sunscreen reef-safe (terumbu karang sensitif)', 'Sepatu sandal tahan air', 'Alat snorkel pribadi', 'Baju ganti ekstra', 'Uang tunai (minimarket sangat terbatas)'],
    },
    en: {
      name: 'Nusa Penida',
      location: 'Bali, Indonesia',
      tagline: 'Dramatic Cliffs and Crystal Blue Waters Hidden South of Bali',
      about: [
        'Nusa Penida is the largest of the three Nusa islands (Nusa Penida, Nusa Lembongan, and Nusa Ceningan) located southeast of Bali. The island offers dramatic and contrasting scenery — towering limestone cliffs hundreds of metres high, set against strikingly clear turquoise ocean waters.',
        'Nusa Penida\'s popularity skyrocketed thanks to one globally-viral photo of Kelingking Beach. The T-Rex head-shaped cliff with a hidden beach below is one of the most iconic landscapes in Southeast Asia. But Nusa Penida holds more surprises — Angel\'s Billabong, Broken Beach, Crystal Bay, and the chance to snorkel with giant oceanic manta rays.',
      ],
      highlights: [
        { title: 'Kelingking Beach', desc: 'The T-Rex head-shaped cliff with a hidden beach below — Nusa Penida\'s most photographed icon.' },
        { title: 'Angel\'s Billabong', desc: 'A natural rock pool formed by coral limestone, with clear greenish water and views out to the open sea.' },
        { title: 'Broken Beach', desc: 'A semi-circular bay with a stunning natural rock arch and hypnotically blue water.' },
        { title: 'Manta Point', desc: 'The best snorkelling spot to swim alongside giant oceanic manta rays in calm waters.' },
      ],
      activities: [
        'Iconic photo at the Kelingking Beach viewpoint (descending to the beach takes 45–60 minutes)',
        'Snorkelling with manta rays at Manta Point (Crystal Bay area)',
        'Diving at Crystal Bay to see mola-mola (ocean sunfish) in season',
        'Exploring Angel\'s Billabong and Broken Beach on foot',
        'Island hopping to Nusa Lembongan and Nusa Ceningan',
      ],
      tips: [
        'Rent a <strong>scooter at Sampalan</strong> as soon as you disembark — roads on Nusa Penida are narrow and challenging.',
        'Visit Kelingking and Angel\'s Billabong <strong>early in the morning</strong> before the tourist crowds arrive.',
        'The roads in western Nusa Penida are <strong>very steep</strong> — be mindful of riding skills on sharp inclines.',
        'Manta snorkelling is best between <strong>7:00–9:00 AM</strong> before the afternoon winds pick up.',
      ],
      transport: 'Take a fast boat from Sanur Harbour, Bali (±45 minutes, tickets ±Rp 150,000–200,000 one way). Also available from Padang Bai (±30 minutes). Fast boats operate from 7:00 AM.',
      bestTime: 'April – October',
      bring: ['Reef-safe sunscreen (reefs are sensitive)', 'Water-resistant sandals', 'Personal snorkel gear', 'Extra change of clothes', 'Cash (convenience stores are very limited)'],
    },
  },
};

// ─── Build Hero HTML (fills via DOM IDs) ──────────────────────────────────────
function populateHero(detail, lang) {
  const c = detail[lang];
  const isID = lang === 'id';

  const heroEl = document.getElementById('dest-detail-hero');
  if (heroEl) heroEl.style.backgroundImage = `url('${detail.image}')`;

  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };

  set('dest-hero-category', detail.category[lang]);
  set('dest-hero-name', c.name);
  set('dest-hero-tagline', c.tagline);
  set('dest-hero-location', c.location);
  set('dest-hero-price', detail.price);
  set('dest-back-label', isID ? 'Destinasi' : 'Destinations');
  set('dest-hero-from', isID ? 'Mulai dari' : 'From');

  const durationEl = document.getElementById('dest-hero-duration');
  if (durationEl) {
    durationEl.textContent = isID
      ? `${detail.durationDays} hari`
      : `${detail.durationDays} day${detail.durationDays > 1 ? 's' : ''}`;
  }

  document.title = `${c.name} — JejakNusa`;
}

// ─── Build Body HTML ──────────────────────────────────────────────────────────
function buildBodyHTML(detail, lang) {
  const c = detail[lang];
  const isID = lang === 'id';

  const L = isID ? {
    about: 'Tentang',
    highlights: 'Daya Tarik Utama',
    activities: 'Aktivitas',
    tips: 'Tips Berkunjung',
    transport: 'Cara Menuju',
    bestTime: 'Waktu Terbaik',
    duration: 'Durasi',
    from: 'Mulai dari',
    bring: 'Perlengkapan',
    back: '← Kembali ke Destinasi',
  } : {
    about: 'About',
    highlights: 'Key Attractions',
    activities: 'Activities',
    tips: 'Visitor Tips',
    transport: 'Getting There',
    bestTime: 'Best Time to Visit',
    duration: 'Duration',
    from: 'Starting from',
    bring: 'What to Bring',
    back: '← Back to Destinations',
  };

  const durationText = isID
    ? `${detail.durationDays} hari`
    : `${detail.durationDays} day${detail.durationDays > 1 ? 's' : ''}`;

  // ── Quick info bar ──
  const infoBar = `
    <div class="grid grid-cols-3 gap-4 mb-12 reveal">
      <div class="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 text-center">
        <p class="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1.5">${L.duration}</p>
        <p class="text-base font-black text-gray-900 dark:text-white">${durationText}</p>
      </div>
      <div class="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 text-center">
        <p class="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1.5">${L.from}</p>
        <p class="text-base font-black text-[#E53935]">${detail.price}</p>
      </div>
      <div class="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 text-center">
        <p class="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1.5">${L.bestTime}</p>
        <p class="text-[0.78rem] font-black text-gray-900 dark:text-white leading-snug">${c.bestTime}</p>
      </div>
    </div>`;

  // ── About ──
  const about = `
    <section class="mb-12 reveal">
      <h2 class="text-2xl font-black text-gray-900 dark:text-white mb-5 tracking-tight">${L.about}</h2>
      ${c.about.map(p => `<p class="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-[1.85] mb-4">${p}</p>`).join('')}
    </section>`;

  // ── Highlights grid ──
  const highlights = `
    <section class="mb-12">
      <h2 class="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight reveal">${L.highlights}</h2>
      <div class="grid sm:grid-cols-2 gap-4">
        ${c.highlights.map((h, i) => `
          <div class="reveal bg-white dark:bg-gray-900 rounded-xl p-5
                      border border-gray-100 dark:border-gray-800
                      hover:border-[#4A5320] dark:hover:border-[#c5d06a] transition-colors duration-200">
            <div class="flex items-start gap-4">
              <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A5320] dark:bg-[#c5d06a]
                           text-white dark:text-gray-900 flex items-center justify-center text-sm font-black">${i + 1}</span>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1.5 leading-snug">${h.title}</h3>
                <p class="text-[0.78rem] text-gray-500 dark:text-gray-400 leading-relaxed">${h.desc}</p>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </section>`;

  // ── Activities ──
  const activities = `
    <section class="mb-12 reveal">
      <h2 class="text-2xl font-black text-gray-900 dark:text-white mb-5 tracking-tight">${L.activities}</h2>
      <ul class="space-y-3">
        ${c.activities.map(a => `
          <li class="flex items-start gap-3 text-[0.875rem] text-gray-600 dark:text-gray-400 leading-relaxed">
            <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#4A5320] dark:bg-[#c5d06a] mt-[0.5rem]"></span>
            <span>${a}</span>
          </li>`).join('')}
      </ul>
    </section>`;

  // ── Tips ──
  const tips = `
    <section class="mb-12 reveal">
      <h2 class="text-2xl font-black text-gray-900 dark:text-white mb-5 tracking-tight">${L.tips}</h2>
      <div class="space-y-3.5">
        ${c.tips.map((t, i) => `
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#c5d06a]/20 dark:bg-[#c5d06a]/10
                         text-[#4A5320] dark:text-[#c5d06a] flex items-center justify-center
                         text-[0.6rem] font-black flex-shrink-0 mt-0.5">${i + 1}</span>
            <p class="text-[0.875rem] text-gray-600 dark:text-gray-400 leading-relaxed">${t}</p>
          </div>`).join('')}
      </div>
    </section>`;

  // ── Transport ──
  const mapQuery = encodeURIComponent(c.name + ', ' + c.location);
  const transport = `
    <section class="mb-12 reveal">
      <h2 class="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">${L.transport}</h2>
      <div class="bg-white dark:bg-gray-900 rounded-xl p-5
                  border border-gray-100 dark:border-gray-800 flex flex-col gap-5">
        <div class="flex items-start gap-4">
          <svg class="w-5 h-5 text-[#4A5320] dark:text-[#c5d06a] flex-shrink-0 mt-0.5"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
          <p class="text-[0.875rem] text-gray-600 dark:text-gray-400 leading-relaxed">${c.transport}</p>
        </div>
        <div class="w-full h-72 sm:h-80 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://maps.google.com/maps?q=${mapQuery}&t=&z=10&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0"
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>`;

  // ── What to bring ──
  const bring = `
    <section class="mb-12 reveal">
      <h2 class="text-2xl font-black text-gray-900 dark:text-white mb-5 tracking-tight">${L.bring}</h2>
      <div class="flex flex-wrap gap-2.5">
        ${c.bring.map(item => `
          <span class="inline-flex items-center gap-1.5
                       bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                       text-gray-700 dark:text-gray-300 text-[0.78rem] font-medium
                       px-3.5 py-2 rounded-full">
            <span class="w-1.5 h-1.5 rounded-full bg-[#4A5320] dark:bg-[#c5d06a] flex-shrink-0"></span>
            ${item}
          </span>`).join('')}
      </div>
    </section>`;

  // ── Back link ──
  const backLink = `
    <div class="pt-2 pb-4 reveal">
      <a href="destinations.html"
         class="inline-flex items-center gap-2 text-sm font-semibold
                text-[#4A5320] dark:text-[#c5d06a] hover:underline transition-colors">
        ${L.back}
      </a>
    </div>`;

  return infoBar + about + highlights + activities + tips + transport + bring + backLink;
}

// ─── Init ──────────────────────────────────────────────────────────────────────
export async function initDestinationDetailComponents() {
  const params = new URLSearchParams(window.location.search);
  const destId = params.get('id') || 'bromo';
  const detail = DETAILS[destId] || DETAILS['bromo'];
  const lang = localStorage.getItem('lang') || 'id';

  try {
    const [heroRes, contentRes] = await Promise.all([
      fetch(`${import.meta.env.BASE_URL}components/destination-detail/hero.html`),
      fetch(`${import.meta.env.BASE_URL}components/destination-detail/content.html`),
    ]);

    const heroHtml    = await heroRes.text();
    const contentHtml = await contentRes.text();

    const heroEl    = document.getElementById('dest-detail-hero-placeholder');
    const contentEl = document.getElementById('dest-detail-content-placeholder');

    if (heroEl)    heroEl.outerHTML    = heroHtml;
    if (contentEl) contentEl.outerHTML = contentHtml;

    populateHero(detail, lang);

    const bodyEl = document.getElementById('dest-detail-body');
    if (bodyEl) bodyEl.innerHTML = buildBodyHTML(detail, lang);

    // ── Live language switching ──
    const prevSetLang = window.setLang;
    window.setLang = (newLang) => {
      prevSetLang(newLang);
      populateHero(detail, newLang);
      const body = document.getElementById('dest-detail-body');
      if (body) {
        body.innerHTML = buildBodyHTML(detail, newLang);
        document.querySelectorAll('#dest-detail-body .reveal').forEach(el => el.classList.add('visible'));
      }
    };

    // SET IMAGE URLS AFTER COMPONENTS ARE INSERTED
    document.querySelectorAll('[data-img]').forEach(img => {
      img.src = BASE_URL + img.dataset.img;
    });
  } catch (err) {
    console.error('Failed to load destination detail components:', err);
  }
}
