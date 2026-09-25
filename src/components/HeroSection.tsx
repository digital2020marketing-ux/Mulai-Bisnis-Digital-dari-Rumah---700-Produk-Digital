import React from 'react';
import { ArrowRight, ShieldCheck, Home, FileText, Smartphone } from 'lucide-react';
import bapakImg from '../assets/images/hp_laptop_business_1790338934193.webp';
import ibuImg from '../assets/images/ibu_hp_laptop_1790339068355.webp';
import { CHECKOUT_URL } from '../config/constants';
import { trackInitiateCheckout } from '../utils/metaPixel';

interface HeroSectionProps {
  onOpenCheckout?: () => void;
  onScrollToSolution?: () => void;
  onScrollToCatalog?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCheckout,
  onScrollToSolution,
  onScrollToCatalog,
}) => {
  const handleScrollToCatalog = () => {
    if (onScrollToCatalog) {
      onScrollToCatalog();
    } else {
      const el = document.getElementById('koleksi');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-12 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-stone-100/70 via-neutral-50 to-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Target, Problem & Direct Solution */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Small Target & Price Badge - Responsive & never overlaps */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 py-1.5 rounded-2xl sm:rounded-full bg-amber-100/90 border border-amber-300 text-xs text-amber-950 font-bold mb-4 max-w-full shadow-2xs mx-auto lg:mx-0 text-center">
              <span className="bg-amber-500 text-white text-[10px] sm:text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                Khusus Usia 40+ & Pemula
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-amber-950 whitespace-nowrap">
                Akses Lengkap Rp 49.000
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[1.85rem] leading-[1.25] sm:text-3xl md:text-5xl lg:text-[2.6rem] font-extrabold text-neutral-900 tracking-tight font-display text-balance mb-4 text-center lg:text-left">
              Usia 40+ dan Ingin Mulai Bisnis dari Rumah, Tapi Bingung Mau Jualan Apa?
            </h1>

            {/* Mobile Visual Assets */}
            <div className="block lg:hidden my-3.5 space-y-2">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="relative rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                  <img
                    src={ibuImg}
                    alt="Ibu-ibu usia 40+ menjalankan bisnis produk digital di rumah"
                    width={300}
                    height={225}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('ibu_hp_laptop.webp')) {
                        target.src = '/images/ibu_hp_laptop_1790339068355.webp';
                      }
                    }}
                  />
                  <div className="p-2.5 bg-stone-50 border-t border-neutral-200 text-center">
                    <p className="text-[12px] font-extrabold text-neutral-950">Ibu Rumah Tangga (40+)</p>
                    <p className="text-[11px] font-semibold text-neutral-700 leading-tight">Disambi urus keluarga dari rumah</p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                  <img
                    src={bapakImg}
                    alt="Bapak-bapak usia 40+ menjalankan bisnis produk digital di rumah"
                    width={300}
                    height={225}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('hp_laptop_business.webp')) {
                        target.src = '/images/hp_laptop_business_1790338934193.webp';
                      }
                    }}
                  />
                  <div className="p-2.5 bg-stone-50 border-t border-neutral-200 text-center">
                    <p className="text-[12px] font-extrabold text-neutral-950">Bapak-bapak (40+)</p>
                    <p className="text-[11px] font-semibold text-neutral-700 leading-tight">Praktis cukup dari HP / Laptop</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subheadline: Directly states products to sell are already provided */}
            <p className="text-[16px] sm:text-lg text-neutral-800 leading-[1.65] max-w-2xl mb-6 text-center lg:text-left mx-auto lg:mx-0 font-normal">
              Barang dagangan digitalnya sudah kami siapkan. Dapatkan akses ke 700+ produk digital beserta panduan langkah demi langkah untuk membantu Anda mulai membangun bisnis dari rumah.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <button
                type="button"
                onClick={handleScrollToCatalog}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-[15px] sm:text-[16px] font-extrabold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-2xl shadow-lg transition-all cursor-pointer text-center ring-4 ring-red-600/20"
              >
                <span>LIHAT PRODUK YANG BISA SAYA JUAL</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout('hero_direct_buy')}
                className="w-full sm:w-auto px-5 py-4 text-sm font-bold text-neutral-800 hover:text-emerald-900 bg-white hover:bg-neutral-100 rounded-2xl transition-colors cursor-pointer text-center border border-neutral-300 shadow-2xs flex items-center justify-center gap-1.5"
              >
                <span>Akses Lengkap Rp 49.000 →</span>
              </a>
            </div>

            {/* Exactly 3 Core Benefits */}
            <div className="pt-4 border-t border-neutral-200/90 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-neutral-800 font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-white p-2.5 rounded-xl border border-neutral-200 shadow-2xs">
                <Home className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Tanpa Stok & Packing</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-white p-2.5 rounded-xl border border-neutral-200 shadow-2xs">
                <Smartphone className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Bisa dari HP / Laptop</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-white p-2.5 rounded-xl border border-neutral-200 shadow-2xs">
                <FileText className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Produk & Panduan Tersedia</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (Desktop view) */}
          <div className="hidden lg:block lg:col-span-6 relative space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-neutral-200/90 bg-white group hover:shadow-lg transition-shadow">
                <div className="overflow-hidden">
                  <img
                    src={ibuImg}
                    alt="Ibu-ibu usia 40+ menjalankan bisnis produk digital menggunakan HP dan laptop"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('ibu_hp_laptop.webp')) {
                        target.src = '/images/ibu_hp_laptop_1790339068355.webp';
                      }
                    }}
                  />
                </div>
                <div className="p-3.5 bg-stone-50 border-t border-neutral-200">
                  <p className="text-sm font-extrabold text-neutral-950">Ibu Rumah Tangga (40+)</p>
                  <p className="text-xs font-semibold text-neutral-700 mt-0.5 leading-snug">
                    Bisa disambi urus keluarga tanpa perlu keluar rumah
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-md border border-neutral-200/90 bg-white group hover:shadow-lg transition-shadow">
                <div className="overflow-hidden">
                  <img
                    src={bapakImg}
                    alt="Bapak-bapak usia 40+ menjalankan bisnis produk digital menggunakan HP dan laptop"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('hp_laptop_business.webp')) {
                        target.src = '/images/hp_laptop_business_1790338934193.webp';
                      }
                    }}
                  />
                </div>
                <div className="p-3.5 bg-stone-50 border-t border-neutral-200">
                  <p className="text-sm font-extrabold text-neutral-950">Bapak-bapak (40+)</p>
                  <p className="text-xs font-semibold text-neutral-700 mt-0.5 leading-snug">
                    Praktis dijalankan di waktu luang tanpa repot kirim barang
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-neutral-950">
                    Bisa Dimulai dari Rumah Hari Ini
                  </p>
                  <p className="text-[12px] font-medium text-neutral-700">
                    Semua materi dan produk siap digunakan langsung.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-extrabold text-emerald-900 bg-emerald-100/80 px-2.5 py-1 rounded-md border border-emerald-300 shrink-0">
                Akses Instan
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
