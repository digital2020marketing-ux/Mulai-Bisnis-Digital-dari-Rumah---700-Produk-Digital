import React from 'react';
import { CHECKOUT_URL } from '../config/constants';
import { trackInitiateCheckout } from '../utils/metaPixel';

interface NavbarProps {
  onOpenCheckout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Wordmark - Always full text, never truncated */}
        <a href="#" className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-neutral-900 font-display whitespace-nowrap shrink-0">
          BisnisRumahan<span className="text-emerald-700">Digital</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-bold text-neutral-800 shrink-0">
          <a href="#masalah" className="hover:text-emerald-800 transition-colors">Keresahan</a>
          <a href="#solusi" className="hover:text-emerald-800 transition-colors">Solusi</a>
          <a href="#bukti-produk" className="hover:text-emerald-800 transition-colors">Bukti Produk</a>
          <a href="#koleksi" className="hover:text-emerald-800 transition-colors">Katalog 700+</a>
          <a href="#cara-mulai" className="hover:text-emerald-800 transition-colors">Cara Mulai</a>
          <a href="#marketing-kit" className="hover:text-emerald-800 transition-colors">Materi Promosi</a>
          <a href="#lisensi" className="hover:text-emerald-800 transition-colors">Hak Jual</a>
          <a href="#harga" className="hover:text-emerald-800 transition-colors">Harga</a>
          <a href="#faq" className="hover:text-emerald-800 transition-colors">FAQ</a>
        </nav>

        {/* Zone 3: Primary action button - compact on mobile so it never crowds or overlaps */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout('navbar')}
            className="px-2.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-xl transition-all shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1 shrink-0"
          >
            <span className="hidden sm:inline">Mulai Sekarang (Rp 49.000) →</span>
            <span className="sm:hidden">Mulai Rp 49rb →</span>
          </a>
        </div>
      </div>
    </header>
  );
};
