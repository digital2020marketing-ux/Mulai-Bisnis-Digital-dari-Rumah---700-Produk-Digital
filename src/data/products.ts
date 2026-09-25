export interface ProductItem {
  id: string;
  title: string;
  category: 
    | 'Panduan & Kelas Jualan'
    | 'Excel & Spreadsheet Finansial'
    | 'Video & Bank Konten Viral'
    | 'Canva, PPT & Desain Grafis'
    | 'Worksheet, Cerita & Edukasi Anak'
    | 'E-Book Bisnis & Copywriting'
    | 'Template Web & Elementor'
    | 'Template Acara, Religi & Planner';
  format: 'Video' | 'Excel' | 'Canva' | 'PPT' | 'PDF / Ebook' | 'Elementor / Web' | 'Asset Pack';
  highlight?: string;
}

export const PRODUCT_CATEGORIES = [
  'Semua',
  'Panduan & Kelas Jualan',
  'Excel & Spreadsheet Finansial',
  'Video & Bank Konten Viral',
  'Canva, PPT & Desain Grafis',
  'Worksheet, Cerita & Edukasi Anak',
  'E-Book Bisnis & Copywriting',
  'Template Web & Elementor',
  'Template Acara, Religi & Planner',
] as const;

export const ALL_PRODUCTS: ProductItem[] = [
  // 1. PANDUAN & KELAS JUALAN
  {
    id: 'p-1',
    title: 'Cara Daftar dan Jualan di LYNK ID',
    category: 'Panduan & Kelas Jualan',
    format: 'PDF / Ebook',
    highlight: 'Modul Utama Toko Digital'
  },
  {
    id: 'p-2',
    title: 'Copywriting + Video Cara Jualan',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Formula Penawaran Menjual'
  },
  {
    id: 'p-3',
    title: 'Cara Membuat Akun LYNKID',
    category: 'Panduan & Kelas Jualan',
    format: 'PDF / Ebook',
    highlight: 'Panduan Pemula Step-by-Step'
  },
  {
    id: 'p-4',
    title: 'Cara Menambah Produk Digital',
    category: 'Panduan & Kelas Jualan',
    format: 'PDF / Ebook',
    highlight: 'Upload & Auto Delivery'
  },
  {
    id: 'p-5',
    title: 'Cara Affiliate Produk Orang Lain',
    category: 'Panduan & Kelas Jualan',
    format: 'PDF / Ebook',
    highlight: 'Komisi Tambahan Tanpa Stok'
  },
  {
    id: 'p-6',
    title: 'Cara Setting Akun Pembayaran LYNKID',
    category: 'Panduan & Kelas Jualan',
    format: 'PDF / Ebook',
    highlight: 'Koneksi Bank & E-Wallet'
  },
  {
    id: 'p-7',
    title: 'Cara Melakukan Pencairan Komisi',
    category: 'Panduan & Kelas Jualan',
    format: 'PDF / Ebook',
    highlight: 'Tarik Saldo ke Rekening'
  },
  {
    id: 'p-8',
    title: 'Video Panduan Desain Canva 2025',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Update Materi 2025'
  },
  {
    id: 'p-9',
    title: 'Video Panduan Iklan Meta Ads 2025',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Strategi Iklan Berbayar'
  },
  {
    id: 'p-10',
    title: 'Kelas facebook pro',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Monetisasi FB Pro'
  },
  {
    id: 'p-11',
    title: 'Video Belajar Formation Hashtag Instagram',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Riset Tag Organik'
  },
  {
    id: 'p-12',
    title: 'Video Belajar Hashtag Instagram',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Jangkauan Audiens Luas'
  },
  {
    id: 'p-13',
    title: 'Video Belajar SEO Instagram',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Tampil di Pencarian IG'
  },
  {
    id: 'p-14',
    title: 'Video Belajar Strategi Followers Instagram',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Tumbuhkan Followers Tertarget'
  },
  {
    id: 'p-15',
    title: 'Video Belajar Strategy Instagram',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Algoritma & Konten Viral'
  },
  {
    id: 'p-16',
    title: 'Video prinsip dasar saat menjelaskan manfaat produk',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Teknik Edukasi Konsumen'
  },
  {
    id: 'p-17',
    title: 'Video tips praktis yang bisa mengubah hasil penjualan',
    category: 'Panduan & Kelas Jualan',
    format: 'Video',
    highlight: 'Actionable Sales Boost'
  },

  // 2. EXCEL & SPREADSHEET FINANSIAL
  {
    id: 'p-18',
    title: '50 Excel Financial Templates',
    category: 'Excel & Spreadsheet Finansial',
    format: 'Excel',
    highlight: '50 Template Keuangan Siap Pakai'
  },
  {
    id: 'p-19',
    title: '30 Excel Financial & Business Templates',
    category: 'Excel & Spreadsheet Finansial',
    format: 'Excel',
    highlight: 'Model Bisnis & Arus Kas'
  },
  {
    id: 'p-20',
    title: '20 Excel Sheets for Teachers & Students',
    category: 'Excel & Spreadsheet Finansial',
    format: 'Excel',
    highlight: 'Administrasi Guru & Murid'
  },
  {
    id: 'p-21',
    title: '999+ Template Excel Campur Sari',
    category: 'Excel & Spreadsheet Finansial',
    format: 'Excel',
    highlight: 'Mega Koleksi 999+ File Excel'
  },
  {
    id: 'p-22',
    title: '8 Lifestyle Google Sheet Bundle',
    category: 'Excel & Spreadsheet Finansial',
    format: 'Excel',
    highlight: 'Google Sheets Otomatis'
  },
  {
    id: 'p-23',
    title: 'Family Financial Planner',
    category: 'Excel & Spreadsheet Finansial',
    format: 'Excel',
    highlight: 'Perencanaan Keuangan Keluarga'
  },
  {
    id: 'p-24',
    title: '150+ Rumus Excel Kantoran',
    category: 'Excel & Spreadsheet Finansial',
    format: 'Excel',
    highlight: 'Rumus Praktis Dunia Kerja'
  },
  {
    id: 'p-25',
    title: 'Aplikasi Pesangon via Excel',
    category: 'Excel & Spreadsheet Finansial',
    format: 'Excel',
    highlight: 'Kalkulator Pesangon Otomatis'
  },

  // 3. VIDEO & BANK KONTEN VIRAL
  {
    id: 'p-26',
    title: '30.000 Bank konten video',
    category: 'Video & Bank Konten Viral',
    format: 'Video',
    highlight: '30 Ribu Video Siap Upload'
  },
  {
    id: 'p-27',
    title: '7.500 Konten Video Affiliate',
    category: 'Video & Bank Konten Viral',
    format: 'Video',
    highlight: 'Bahan Konten TikTok & Shopee'
  },
  {
    id: 'p-28',
    title: '6.000 Faceless Aesthetic Video',
    category: 'Video & Bank Konten Viral',
    format: 'Video',
    highlight: 'Video Estetik Tanpa Wajah'
  },
  {
    id: 'p-29',
    title: '30 Motivational Aesthetic Reels',
    category: 'Video & Bank Konten Viral',
    format: 'Video',
    highlight: 'Reels Motivasi Siap Tayang'
  },
  {
    id: 'p-30',
    title: 'Stunning Nature Videos Reels',
    category: 'Video & Bank Konten Viral',
    format: 'Video',
    highlight: 'Footage Alam Sinematik 4K'
  },
  {
    id: 'p-31',
    title: '40 Reel Covers',
    category: 'Video & Bank Konten Viral',
    format: 'Asset Pack',
    highlight: 'Sampul Feed Reels Rapi'
  },
  {
    id: 'p-32',
    title: '36 Template Video Display PPT',
    category: 'Video & Bank Konten Viral',
    format: 'PPT',
    highlight: 'Video Animasi via PowerPoint'
  },
  {
    id: 'p-33',
    title: '144 Template Cover Story Feed Thumb PPT',
    category: 'Video & Bank Konten Viral',
    format: 'PPT',
    highlight: '144 Cover Desain Story & Feed'
  },
  {
    id: 'p-34',
    title: '140 Template Microblog PPT',
    category: 'Video & Bank Konten Viral',
    format: 'PPT',
    highlight: 'Desain Carousel Edukasi'
  },
  {
    id: 'p-35',
    title: '29 Template Puzzle Grid PPT',
    category: 'Video & Bank Konten Viral',
    format: 'PPT',
    highlight: 'Layout Feed Instagram Puzzle'
  },
  {
    id: 'p-36',
    title: '220 Template Marketframe PPT',
    category: 'Video & Bank Konten Viral',
    format: 'PPT',
    highlight: 'Frame Produk Marketplace'
  },
  {
    id: 'p-37',
    title: '170 Template Quotes Black White PPT',
    category: 'Video & Bank Konten Viral',
    format: 'PPT',
    highlight: 'Konten Kata Bijak Monokrom'
  },
  {
    id: 'p-38',
    title: '90 Template Cover Box PPT',
    category: 'Video & Bank Konten Viral',
    format: 'PPT',
    highlight: 'Mockup 3D Box Produk'
  },
  {
    id: 'p-39',
    title: '66 Template Desain Instagram PPT',
    category: 'Video & Bank Konten Viral',
    format: 'PPT',
    highlight: 'Postingan Estetik & Promo'
  },
  {
    id: 'p-40',
    title: 'Bright Luxury Instagram Stories',
    category: 'Video & Bank Konten Viral',
    format: 'Canva',
    highlight: 'Nuansa Mewah & Elegan'
  },
  {
    id: 'p-41',
    title: 'Mindfulness Social Media Bundle',
    category: 'Video & Bank Konten Viral',
    format: 'Canva',
    highlight: 'Tema Ketenangan & Mental Health'
  },
  {
    id: 'p-42',
    title: '20+ Finance Social Media Posts',
    category: 'Video & Bank Konten Viral',
    format: 'Canva',
    highlight: 'Edukasi Keuangan Medsos'
  },
  {
    id: 'p-43',
    title: 'Konten Edukasi dan Promosi',
    category: 'Video & Bank Konten Viral',
    format: 'Asset Pack',
    highlight: 'Format Siap Copas'
  },
  {
    id: 'p-44',
    title: 'Konten Motivasi & Inspiratif',
    category: 'Video & Bank Konten Viral',
    format: 'Asset Pack',
    highlight: 'Pembangun Interaksi Follower'
  },

  // 4. CANVA, PPT & DESAIN GRAFIS
  {
    id: 'p-45',
    title: '3.000 Templates Canva',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Canva',
    highlight: 'Mega Pack 3.000 Desain Canva'
  },
  {
    id: 'p-46',
    title: '1.900+ Planner Tracker with Canva',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Canva',
    highlight: 'Bisa Diedit & Dicetak'
  },
  {
    id: 'p-47',
    title: '180 Template web via Canva',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Canva',
    highlight: 'Bikin Website Instan Tanpa Koding'
  },
  {
    id: 'p-48',
    title: '15 Template Resume Professional',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Canva',
    highlight: 'CV Standar ATS & Modern'
  },
  {
    id: 'p-49',
    title: '300 Template Desain Berbagai Tema PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Tema Lengkap Siap Presentasi'
  },
  {
    id: 'p-50',
    title: '300 Template Konten Medsos Canva',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Canva',
    highlight: 'Feed, Story, & Carousel'
  },
  {
    id: 'p-51',
    title: '170+ Template super desain PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Kualitas Desain Premium'
  },
  {
    id: 'p-52',
    title: '150 Template banner PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Spanduk & Banner Digital'
  },
  {
    id: 'p-53',
    title: '10.000+ Vector Icons Bundle',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Asset Pack',
    highlight: '10 Ribu Ikon Resolusi Tinggi'
  },
  {
    id: 'p-54',
    title: '331 Template Icon PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Ikon Presentasi Bisnis'
  },
  {
    id: 'p-55',
    title: '64 Template Logo PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Inspirasi Logo Bisnis Baru'
  },
  {
    id: 'p-56',
    title: '105 Template Background PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Latar Belakang Resolusi Tinggi'
  },
  {
    id: 'p-57',
    title: '121 Template Banner PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Ukuran Siap Cetak & Iklan'
  },
  {
    id: 'p-58',
    title: '05 Template Banner Berbagai Tema PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Tema Acara & Toko'
  },
  {
    id: 'p-59',
    title: '100 File Desain Kaos',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Asset Pack',
    highlight: 'Aset Sablon / Print on Demand'
  },
  {
    id: 'p-60',
    title: 'Template Promosi Inkscape',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Asset Pack',
    highlight: 'Format Desain Terbuka Bebas Lisensi'
  },
  {
    id: 'p-61',
    title: 'Presentation & Infografis Template PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Grafik Visual & Bagan Data'
  },
  {
    id: 'p-62',
    title: 'Template presentation',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Slide Modern & Minimalis'
  },
  {
    id: 'p-63',
    title: 'Template Personal Branding PPT',
    category: 'Canva, PPT & Desain Grafis',
    format: 'PPT',
    highlight: 'Profil Diri & Portofolio'
  },
  {
    id: 'p-64',
    title: 'Graphic took affiliate',
    category: 'Canva, PPT & Desain Grafis',
    format: 'Asset Pack',
    highlight: 'Aset Banner Promo Affiliate'
  },

  // 5. WORKSHEET, CERITA & EDUKASI ANAK
  {
    id: 'p-65',
    title: '100 Video Cerita Anak Bhs Indonesia',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'Video',
    highlight: '100 Animasi Kisah Teladan Edukatif'
  },
  {
    id: 'p-66',
    title: '48 Buku Cerita B.Inggris Bisa Diedit',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'PDF / Ebook',
    highlight: 'Bilingual Storybooks Edit via Canva'
  },
  {
    id: 'p-67',
    title: '96+ Beginning Sounds Educational Bundle',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'PDF / Ebook',
    highlight: 'Phonics & Belajar Suara Huruf'
  },
  {
    id: 'p-68',
    title: '70+ Worksheet Belajar Baca B.Inggris Untuk Anak',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'PDF / Ebook',
    highlight: 'Latihan Membaca Anak Usia Dini'
  },
  {
    id: 'p-69',
    title: '45+ Halaman Aktivitas Natal Untuk Anak',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'PDF / Ebook',
    highlight: 'Mewarnai & Puzzle Liburan'
  },
  {
    id: 'p-70',
    title: '49+ Mewarnai Alfabet Bundle',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'PDF / Ebook',
    highlight: 'Tracing Huruf A-Z & Objek'
  },
  {
    id: 'p-71',
    title: 'Buku Aktivitas dan Mewarnai Hari Cinta',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'PDF / Ebook',
    highlight: 'Aktivitas Motorik Halus'
  },
  {
    id: 'p-72',
    title: 'Buku Mewarnai Kaus Kaki & Pohon Lampu',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'PDF / Ebook',
    highlight: 'Lembar Mewarnai Ceria'
  },
  {
    id: 'p-73',
    title: 'Moslem karakter kit',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'Asset Pack',
    highlight: 'Ilustrasi Anak Muslim Lucu'
  },
  {
    id: 'p-74',
    title: 'Nano kartun karakter',
    category: 'Worksheet, Cerita & Edukasi Anak',
    format: 'Asset Pack',
    highlight: 'Karakter Kartun Komik'
  },

  // 6. E-BOOK BISNIS & COPYWRITING
  {
    id: 'p-75',
    title: '1000 Ide Produk Digital',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Bank Ide Tanpa Batas'
  },
  {
    id: 'p-76',
    title: '82 Halaman Template Ebook & Majalah',
    category: 'E-Book Bisnis & Copywriting',
    format: 'Canva',
    highlight: 'Layout Siap Terbit'
  },
  {
    id: 'p-77',
    title: 'EBook Cara Berjualan di WhatsApp',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Teknik Closing via WA'
  },
  {
    id: 'p-78',
    title: 'Ebook Leads Generation',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Mendatangkan Calon Pembeli Melimpah'
  },
  {
    id: 'p-79',
    title: 'Ebook Melipatgandakan Konversi Iklan Bisnis',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Optimasi ROAS Iklan'
  },
  {
    id: 'p-80',
    title: 'Membangun Lifestyle Bisnis',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Bisnis Fleksibel Dari Rumah'
  },
  {
    id: 'p-81',
    title: 'Ebook Time Priority',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Manajemen Waktu Pebisnis'
  },
  {
    id: 'p-82',
    title: 'Ebook Social Media Marketing',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Pemasaran Organik Medsos'
  },
  {
    id: 'p-83',
    title: 'Ebook Viral Marketing',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Rahasia Konten Menyebar Cepat'
  },
  {
    id: 'p-84',
    title: 'Work From Home Busy Mom',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Panduan Khusus Ibu Rumah Tangga'
  },
  {
    id: 'p-85',
    title: 'Ebook Passive Income via LYNK',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Otomatisasi Penjualan Lynk ID'
  },
  {
    id: 'p-86',
    title: 'Ebook Content Marketing',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Membangun Kepercayaan Pembeli'
  },
  {
    id: 'p-87',
    title: 'Ebook Chatting Lalu Closing',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Script Percakapan Closing'
  },
  {
    id: 'p-88',
    title: 'Ebook Affiliate Tiktok',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Cuan dari Keranjang Kuning'
  },
  {
    id: 'p-89',
    title: 'Ebook 15 Tips Dikejar Closingan',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Trik Psikologi Pembeli'
  },
  {
    id: 'p-90',
    title: 'Ebook Panduan Dapat 1000 Kontak WA',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Database Calon Konsumen Nyata'
  },
  {
    id: 'p-91',
    title: 'Ebook 1 Juta Pertama dari LYNK ID',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Milestone Penghasilan Awal'
  },
  {
    id: 'p-92',
    title: 'Ebook Tembus 100 Juta Dengan FB Gratisan',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Strategi Organik Tanpa Biaya Iklan'
  },
  {
    id: 'p-93',
    title: '50 Contoh Copywriting Iklan FB Ads',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: '50 Contoh Teks Iklan Terbukti Konversi'
  },
  {
    id: 'p-94',
    title: 'Ebook mindset copywriting',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Pola Pikir Penulis Menjual'
  },
  {
    id: 'p-95',
    title: 'Ebook strategi membuat killer kontent',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Konten Pemicu Pembelian Cepat'
  },
  {
    id: 'p-96',
    title: 'Ebook dikejar omset FB Ads',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Scale Up Penjualan Iklan'
  },
  {
    id: 'p-97',
    title: 'Ebook cara jitu membuat penawaran di FB',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Penawaran Sulit Ditolak'
  },
  {
    id: 'p-98',
    title: 'Ebook product launch',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Langkah Merilis Produk Sukses'
  },
  {
    id: 'p-99',
    title: 'Template Buku Fisik Kirim Ke Penerbit',
    category: 'E-Book Bisnis & Copywriting',
    format: 'PDF / Ebook',
    highlight: 'Standar Format Naskah Buku'
  },

  // 7. TEMPLATE WEB & ELEMENTOR
  {
    id: 'p-100',
    title: '130 Template Produk Digital Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: '130 Desain Landing Page'
  },
  {
    id: 'p-101',
    title: '50 Template Pernikahan Paket 1 Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Web Undangan Pernikahan'
  },
  {
    id: 'p-102',
    title: '50 Template Pernikahan Paket 2 Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Undangan Digital Responsif'
  },
  {
    id: 'p-103',
    title: '100 Template Pernikahan Paket 3 Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: '100 Desain Wedding Kekinian'
  },
  {
    id: 'p-104',
    title: '70 Template Pernikahan Paket 4 Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Wedding Luxury & Rustik'
  },
  {
    id: 'p-105',
    title: '100 Template Pernikahan Paket 5 Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Template Siap Buka Jasa Undangan'
  },
  {
    id: 'p-106',
    title: '100 Template Aqiqah Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Undangan Aqiqah Siap Pakai'
  },
  {
    id: 'p-107',
    title: '70 Template Wisuda Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Ucapan & Undangan Wisuda'
  },
  {
    id: 'p-108',
    title: '47 Template Fashion & Affiliate Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Etalase Toko Busana Online'
  },
  {
    id: 'p-109',
    title: '50 Template Berbagai Niche Elementor',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Kuliner, Jasa, Portofolio'
  },
  {
    id: 'p-110',
    title: 'Tema WordPress TemaToko Insta',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Toko Online Format Instagram'
  },
  {
    id: 'p-111',
    title: 'Tema WordPress TemaToko Food',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Website Restoran & Makanan'
  },
  {
    id: 'p-112',
    title: 'Tema WordPress TemaToko Tiktok',
    category: 'Template Web & Elementor',
    format: 'Elementor / Web',
    highlight: 'Toko Online Gaya TikTok Shop'
  },

  // 8. TEMPLATE ACARA, RELIGI & PLANNER
  {
    id: 'p-113',
    title: '118 Template PPT Idul Fitri Paket 1 & 2',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Kartu Ucapan Lebaran Animasi'
  },
  {
    id: 'p-114',
    title: '150 Template Idul Fitri PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Banner & Ucapan Hari Raya'
  },
  {
    id: 'p-115',
    title: '131 Template Ramadhan Paket 2 PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Jadwal Imsakiyah & Ucapan'
  },
  {
    id: 'p-116',
    title: '300 Template Ramadhan Paket 3 PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: '300 Desain Sambut Ramadhan'
  },
  {
    id: 'p-117',
    title: '500 Template Ramadhan Paket 4 PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Mega Pack Ramadhan'
  },
  {
    id: 'p-118',
    title: '70 Template Qurban Paket 2 PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Promosi Hewan Qurban'
  },
  {
    id: 'p-119',
    title: 'Template Qurban PPT & Elementor',
    category: 'Template Acara, Religi & Planner',
    format: 'Elementor / Web',
    highlight: 'Landing Page & Desain Qurban'
  },
  {
    id: 'p-120',
    title: '50 Template PPT HUT RI',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Spanduk & Banner 17 Agustus'
  },
  {
    id: 'p-121',
    title: '70 Template HUT RI Paket 2 PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Lomba & Acara Kemerdekaan'
  },
  {
    id: 'p-122',
    title: '70 Template HUT RI Paket 3 PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Poster & Desain Kemerdekaan'
  },
  {
    id: 'p-123',
    title: '500 Template Pernikahan PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: '500 Undangan Video PowerPoint'
  },
  {
    id: 'p-124',
    title: '110 Template Pernikahan Canva',
    category: 'Template Acara, Religi & Planner',
    format: 'Canva',
    highlight: 'Bisa Diedit di HP via Canva'
  },
  {
    id: 'p-125',
    title: '30 Template Anniversary Canva',
    category: 'Template Acara, Religi & Planner',
    format: 'Canva',
    highlight: 'Ucapan Ulang Tahun & Anniversary'
  },
  {
    id: 'p-126',
    title: '50 Template Anniversary PPT',
    category: 'Template Acara, Religi & Planner',
    format: 'PPT',
    highlight: 'Video Animasi Ulang Tahun'
  },
  {
    id: 'p-127',
    title: 'Digital Product Planner',
    category: 'Template Acara, Religi & Planner',
    format: 'Canva',
    highlight: 'Rencana Peluncuran Produk'
  },
  {
    id: 'p-128',
    title: 'Printable Tracker Bundle',
    category: 'Template Acara, Religi & Planner',
    format: 'PDF / Ebook',
    highlight: 'Habit & Daily Tracker'
  },
  {
    id: 'p-129',
    title: 'Daily Life Planner, Digital Planner',
    category: 'Template Acara, Religi & Planner',
    format: 'PDF / Ebook',
    highlight: 'Agenda Harian Praktis'
  },
  {
    id: 'p-130',
    title: 'General Business Instagram Templates',
    category: 'Template Acara, Religi & Planner',
    format: 'Canva',
    highlight: 'Promosi Usaha Segala Bidang'
  },
  {
    id: 'p-131',
    title: 'Printable Shopify Planner',
    category: 'Template Acara, Religi & Planner',
    format: 'PDF / Ebook',
    highlight: 'Manajemen Toko Online'
  },
  {
    id: 'p-132',
    title: 'Printable Weight Loss Journal',
    category: 'Template Acara, Religi & Planner',
    format: 'PDF / Ebook',
    highlight: 'Jurnal Sehat & Diet'
  },
  {
    id: 'p-133',
    title: 'Printable Planner Tahunan',
    category: 'Template Acara, Religi & Planner',
    format: 'PDF / Ebook',
    highlight: 'Kalender & Target Tahunan'
  },
  {
    id: 'p-134',
    title: 'Printable Wedding Planner',
    category: 'Template Acara, Religi & Planner',
    format: 'PDF / Ebook',
    highlight: 'Buku Rencana Acara Nikah'
  },
  {
    id: 'p-135',
    title: '30 Day Printable Guided Journal',
    category: 'Template Acara, Religi & Planner',
    format: 'PDF / Ebook',
    highlight: 'Panduan Jurnal Harian 30 Hari'
  }
];

export const CATALOG_STATS = {
  totalProductsCount: '700+',
  videoAssetsCount: '30.000+',
  canvaTemplatesCount: '3.000+',
  excelFilesCount: '999+',
  vectorIconsCount: '10.000+',
  plannerCount: '1.900+',
};
