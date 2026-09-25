import React from 'react';
import { CHECKOUT_URL } from '../config/constants';
import { trackInitiateCheckout } from '../utils/metaPixel';

interface MobileStickyBarProps {
  onOpenCheckout?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCheckout }) => {
  return (
    <aside aria-label="Aksi Cepat" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-2.5 shadow-lg">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="leading-tight">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 block">
            HANYA RP 49.000
          </span>
          <span className="text-xs font-extrabold text-neutral-950">
            Akses 700+ Produk Lengkap
          </span>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout('mobile_sticky')}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-black text-white bg-red-600 hover:bg-red-700 active:scale-95 rounded-xl shadow-md whitespace-nowrap cursor-pointer"
        >
          <span>Ambil Akses Sekarang →</span>
        </a>
      </div>
    </aside>
  );
};
