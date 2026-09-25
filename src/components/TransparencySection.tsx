import React from 'react';
import { ShieldAlert, CheckCircle2, HelpCircle } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  return (
    <section id="transparansi" className="py-12 sm:py-14 bg-white border-b border-neutral-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-50 border-2 border-neutral-200 shadow-sm space-y-4 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider bg-neutral-200/80 px-3.5 py-1 rounded-full border border-neutral-300 mx-auto sm:mx-0">
            <ShieldAlert className="w-3.5 h-3.5 text-neutral-700" />
            <span>Keterbukaan & Realitas</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-950 font-display tracking-tight leading-snug">
            Apakah Setelah Membeli Saya Pasti Menghasilkan Uang? <span className="text-red-600 underline decoration-red-300">Tidak.</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
            <p>
              Kami ingin selalu bersikap jujur dan transparan kepada Anda. Paket ini menyediakan inventori 700+ produk digital siap jual, materi pendukung promosi, serta panduan teknis langkah demi langkah cara menata toko digital Anda.
            </p>
            <p>
              Namun keberhasilan dan hasil penjualan setiap orang sepenuhnya bergantung pada cara pemasaran, ketekunan, dan konsistensi masing-masing pengguna dalam menawarkan produk.
            </p>
            <p>
              Kami tidak menawarkan skema cepat kaya atau hasil instan tanpa usaha. Kami memberikan alat kerja dan barang dagangan nyata agar Anda bisa mulai berbisnis dari rumah tanpa perlu repot membuat materi sendiri dari nol.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
