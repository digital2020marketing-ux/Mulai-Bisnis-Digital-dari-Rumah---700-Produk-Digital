import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apa saja format file produk yang akan saya dapatkan?',
      a: 'Produk hadir dalam format populer yang langsung siap pakai: file Microsoft Excel (.xlsx) dengan rumus otomatis, tautan template Canva yang bisa diedit di akun Canva gratis, file video (.mp4) format vertikal tanpa watermark, dokumen e-book (.pdf), slide presentasi (.pptx), serta template website (.json / Elementor).'
    },
    {
      q: 'Bagaimana cara saya mengakses produk setelah pembayaran?',
      a: 'Setelah pembayaran terverifikasi otomatis, tautan resmi Google Drive akan langsung dikirimkan otomatis ke alamat email aktif Anda (serta konfirmasi via WhatsApp). Anda tinggal membuka tautan tersebut untuk mengunduh atau menyalin file ke akun Google Drive pribadi Anda.'
    },
    {
      q: 'Apakah produk ini benar-benar boleh saya jual ulang?',
      a: 'Ya. Hak penggunaan dan hak jual kembali mengikuti ketentuan lisensi masing-masing produk yang tertera di dalam folder. Anda bebas menentukan harga jual sendiri dan menerima hasil penjualan sesuai metode pembayaran atau platform yang Anda gunakan.'
    },
    {
      q: 'Bagaimana cara mengirimkan produk ke pembeli saya nanti?',
      a: 'Anda bisa menggunakan toko digital Lynk ID yang mengirimkan link unduhan secara otomatis setiap kali ada pembeli yang menyelesaikan transfer, atau Anda juga bisa mengirimkan link unduhan file Google Drive secara manual lewat chat WhatsApp.'
    },
    {
      q: 'Apakah bisa dijalankan hanya dari HP tanpa memiliki laptop?',
      a: 'Bisa. Aplikasi Google Drive, aplikasi WhatsApp, dan pengaturan toko Lynk ID dapat diakses dengan lancar langsung melalui browser di smartphone Android maupun iPhone Anda.'
    },
    {
      q: 'Apakah ada biaya langganan bulanan atau biaya tahunan?',
      a: 'Tidak ada. Biaya Rp 49.000 hanya dibayarkan satu kali saja saat pendaftaran untuk mendapatkan akses permanen seumur hidup ke Google Drive produk.'
    },
    {
      q: 'Bagaimana jika saya masih sangat pemula dan butuh panduan?',
      a: 'Di dalam folder Drive sudah disediakan modul panduan langkah demi langkah bergambar tentang cara membuat toko online dan memasang produk. Jika mengalami kendala teknis, tim bantuan kami siap membantu Anda.'
    },
    {
      q: 'Metode pembayaran apa saja yang diterima untuk membeli paket ini?',
      a: 'Kami menerima pembayaran otomatis via QRIS (bisa di-scan dari GoPay, OVO, Dana, ShopeePay, BCA Mobile, Livin, dll) serta Transfer Bank Virtual Account (BCA, Mandiri, BRI, BNI).'
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-stone-50 border-b border-neutral-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2.5 bg-neutral-200/70 px-3.5 py-1 rounded-full border border-neutral-300">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-700" />
            <span>Tanya Jawab Teknis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 font-medium mt-1">
            Jawaban jelas seputar format file, akses, cara pengiriman, dan lisensi:
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-300 rounded-2xl overflow-hidden bg-white shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors cursor-pointer"
                >
                  <span className="font-extrabold text-neutral-950 text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-neutral-800 leading-relaxed border-t border-neutral-200 bg-stone-50/50 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
