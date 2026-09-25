import React from 'react';
import { Award, CheckCircle2, XCircle, AlertCircle, FileCheck } from 'lucide-react';

export const LicenseSection: React.FC = () => {
  return (
    <section id="lisensi" className="py-12 sm:py-16 md:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Hak Jual & Ketentuan Lisensi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance mb-2.5">
            Penjelasan Hak Jual Ulang (Bahasa Awam & Jelas)
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto font-medium">
            Kami ingin Anda merasa aman dan nyaman saat berbisnis. Berikut rincian apa saja hak Anda dan batasan pemakaiannya:
          </p>
        </div>

        {/* 1. What Products are Included */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-neutral-200 mb-6 space-y-2">
          <div className="flex items-center gap-2 text-neutral-950 font-bold text-base">
            <FileCheck className="w-5 h-5 text-emerald-800 shrink-0" />
            <h3 className="font-extrabold">Ketentuan Lisensi Produk</h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed pl-7 font-normal">
            Hak penggunaan dan hak jual kembali mengikuti lisensi masing-masing produk. Detail lisensi tersedia di dalam folder produk. Seluruh materi disiapkan agar Anda dapat memanfaatkannya untuk kebutuhan pribadi maupun dipasarkan kembali kepada pembeli akhir.
          </p>
        </div>

        {/* 2-Column: Allowed vs Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
          {/* Allowed */}
          <div className="bg-emerald-50/80 border border-emerald-300 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 font-extrabold text-emerald-950 text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0" />
              <h4>Apa yang BOLEH Anda Lakukan:</h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-900 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 font-black">✓</span>
                <span><strong>Menjual satuan (eceran):</strong> Anda bebas menawarkan produk per template, per video, atau per modul.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 font-black">✓</span>
                <span><strong>Menjual dalam paket (bundle):</strong> Menggabungkan beberapa file materi menjadi paket penawaran sendiri.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 font-black">✓</span>
                <span><strong>Menentukan harga sendiri:</strong> Anda dapat menentukan harga jual sendiri dan menerima hasil penjualan sesuai metode pembayaran atau platform yang digunakan.</span>
              </li>
            </ul>
          </div>

          {/* Boundaries */}
          <div className="bg-stone-50 border border-neutral-300 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 font-extrabold text-neutral-950 text-base">
              <XCircle className="w-5 h-5 text-red-600 shrink-0" />
              <h4>Batasan yang TIDAK Boleh Dilakukan:</h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-800 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-black">✗</span>
                <span><strong>Tidak Mengklaim Merk Aplikasi:</strong> Tidak boleh mengaku sebagai pemilik hak cipta resmi aplikasi pihak ketiga (seperti Canva, Microsoft, Google, atau Lynk ID).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-black">✗</span>
                <span><strong>Dilarang Disalahgunakan:</strong> Dilarang menggunakan atau memodifikasi materi untuk konten ilegal, penipuan, atau melanggar peraturan perundang-undangan.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
