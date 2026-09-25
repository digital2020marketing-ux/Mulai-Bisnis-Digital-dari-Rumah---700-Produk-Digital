import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from '../config/constants';
import { trackInitiateCheckout } from '../utils/metaPixel';

interface FinalCtaSectionProps {
  onOpenCheckout?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenCheckout,
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-b from-stone-50 via-emerald-50/40 to-white rounded-3xl p-6 sm:p-10 text-neutral-950 shadow-xl text-center border-2 border-emerald-400 space-y-4">
          
          <div className="inline-block bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
            Langkah Awal Anda
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance">
            Tidak Perlu Membuat Produk Sendiri.
            <br />
            <span className="text-emerald-800">Pilih Produk, Ikuti Panduan, dan Mulai dari Rumah.</span>
          </h2>

          <div className="py-2 flex items-center justify-center gap-2">
            <span className="text-red-600 font-bold text-sm line-through font-mono">Rp 129.000</span>
            <span className="text-3xl sm:text-5xl font-black text-neutral-950 font-display tracking-tight font-mono">
              Rp 49.000
            </span>
            <span className="text-xs text-neutral-700 font-bold">
              (Akses Permanen)
            </span>
          </div>

          <div className="pt-2 max-w-md mx-auto">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('final_cta')}
              className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-base sm:text-lg font-black text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-2xl shadow-xl transition-all cursor-pointer ring-4 ring-red-600/30"
            >
              <span>AMBIL AKSES SEKARANG — RP 49.000</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-neutral-700 font-medium pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
            <span>Link Google Drive Resmi Dikirim Otomatis ke Email Aktif Setelah Pembayaran</span>
          </div>

        </div>

      </div>
    </section>
  );
};
