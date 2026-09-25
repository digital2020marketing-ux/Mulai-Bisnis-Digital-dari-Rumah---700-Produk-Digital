import islamicImg from '../assets/images/worksheet_preview_islamic_1790333539698.webp';
import kidsMathImg from '../assets/images/worksheet_preview_kids_math_1790333555213.webp';
import productBundleNewImg from '../assets/images/product_bundle_new.webp';
import marketingKitImg from '../assets/images/marketing_kit_guide_preview_1790334740501.webp';
import { CHECKOUT_URL } from '../config/constants';

export { CHECKOUT_URL };

export interface ProductSample {
  id: string;
  title: string;
  category: string;
  sheetCount: string;
  description: string;
  image: string;
  tags: string[];
}

export const SAMPLE_PRODUCTS: ProductSample[] = [
  {
    id: 'worksheet-islamic',
    title: 'Lembar Kerja Anak Muslim & Huruf Hijaiyah',
    category: 'Koleksi Islami',
    sheetCount: '1.000+ Lembar',
    description: 'Aktivitas menebalkan huruf Hijaiyah, mengenal adab harian, rukun Islam, dan mewarnai tema Islami untuk usia PAUD/TK/SD.',
    image: islamicImg,
    tags: ['Tracing Hijaiyah', 'Doa Harian', 'Mewarnai Islami', 'Siap Cetak PDF']
  },
  {
    id: 'worksheet-math-english',
    title: 'Worksheet Berhitung, Logika & Bahasa Inggris',
    category: 'Paket Utama',
    sheetCount: '12.000+ Lembar',
    description: 'Koleksi lengkap aktivitas tracing alfabet, counting numbers, pencocokan pola, maze, dan pengenalan kosakata bahasa Inggris bergambar.',
    image: kidsMathImg,
    tags: ['Number Tracing', 'Math Puzzles', 'Alphabet Phonics', 'Montessori']
  },
  {
    id: 'bundle-digital',
    title: 'Katalog 700+ Produk Digital & 30.000+ Video Bank Konten',
    category: 'Mega Bundle Siap Jual',
    sheetCount: '700+ Produk & 30.000+ Video',
    description: 'Akses penuh ke seluruh materi: Panduan LYNK ID & Ads 2025, 30.000 video viral & affiliate, 3.000 template Canva, 999+ template Excel, 100 video cerita & worksheet anak, ratusan e-book bisnis, serta 500+ template Elementor & PPT.',
    image: productBundleNewImg,
    tags: ['Akses Google Drive', 'Lisensi Jual Ulang', 'Format Excel, Canva & Video', 'Akses Selamanya']
  },
  {
    id: 'marketing-kit',
    title: 'Marketing Kit Lengkap & Panduan Jualan 700+ Prodig',
    category: 'Bonus Spesial Google Drive',
    sheetCount: '9 File Siap Pakai',
    description: 'Folder lengkap berisi 3 Banner Promosi (Banner1, Banner2, Banner3.jpg), dokumen materi promosi .docx, E-book Panduan Jualan .pdf, 2 Template Landing Page .json, dan 2 Video Promosi .mp4.',
    image: marketingKitImg,
    tags: ['3 Banner Siap Pakai', 'Panduan Jualan PDF', '2 Video Promosi MP4', 'Template JSON Landing Page']
  }
];
