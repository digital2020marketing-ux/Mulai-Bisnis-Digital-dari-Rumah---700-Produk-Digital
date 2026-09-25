import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 text-neutral-800 py-10 border-t border-neutral-300 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-neutral-300">
          <div>
            <span className="text-base font-extrabold text-neutral-950 font-display">
              BisnisRumahan<span className="text-emerald-800">Digital</span>
            </span>
            <p className="text-neutral-700 text-xs mt-1 max-w-sm font-medium">
              Inisiatif pemberdayaan produk digital untuk masyarakat Indonesia yang ingin mulai mandiri berbisnis dari rumah.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-800 font-bold">
            <a href="#masalah" className="hover:text-emerald-800 transition-colors">Keresahan</a>
            <a href="#solusi" className="hover:text-emerald-800 transition-colors">Solusi</a>
            <a href="#bukti-produk" className="hover:text-emerald-800 transition-colors">Bukti Produk</a>
            <a href="#koleksi" className="hover:text-emerald-800 transition-colors">Katalog 700+</a>
            <a href="#cara-mulai" className="hover:text-emerald-800 transition-colors">Cara Mulai</a>
            <a href="#faq" className="hover:text-emerald-800 transition-colors">Tanya Jawab</a>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-700 text-[11px] font-medium">
          <p>
            &copy; {new Date().getFullYear()} BisnisRumahanDigital. Seluruh materi memiliki hak penggunaan komersial.
          </p>
          <div className="flex items-center gap-1 font-semibold text-neutral-800">
            <span>Dibuat dengan dedikasi untuk keluarga Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
