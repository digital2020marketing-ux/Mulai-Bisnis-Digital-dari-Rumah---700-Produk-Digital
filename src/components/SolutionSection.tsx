import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface SolutionSectionProps {
  onScrollToProof: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  onScrollToProof,
}) => {
  return (
    <section id="solusi" className="py-12 sm:py-16 md:py-20 bg-stone-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>Gagasan Utama (Solusi Nyata)</span>
        </div>

        {/* Big Idea Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 font-display tracking-tight text-balance mb-4">
          Anda Tidak Perlu Membuat Produk dari Nol.
          <br className="hidden sm:inline" />
          <span className="text-emerald-800"> Barang Dagangan Digitalnya Sudah Kami Siapkan.</span>
        </h2>

        {/* Crisp Explanation */}
        <p className="text-base sm:text-lg text-neutral-800 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
          Inilah jalan pintas yang masuk akal untuk memulai bisnis dari rumah di usia 40+. Anda tidak perlu menghabiskan waktu berbulan-bulan mencoba membuat produk sendiri. Anda langsung mendapatkan koleksi produk digital siap pakai yang bisa Anda pilih dan jadikan sebagai katalog dagangan awal usaha Anda.
        </p>

        {/* 3 Core Solution Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-3">
              1
            </div>
            <h3 className="font-bold text-neutral-950 text-base mb-1">
              Katalog Awal Siap Pilih
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Anda tidak mulai dengan tangan kosong. Tersedia ratusan pilihan materi yang siap Anda pilih untuk langsung ditawarkan.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-3">
              2
            </div>
            <h3 className="font-bold text-neutral-950 text-base mb-1">
              Hak Jual Berlisensi
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Diberikan izin penggunaan dan hak jual kembali sesuai lisensi yang tertera pada masing-masing produk.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-3">
              3
            </div>
            <h3 className="font-bold text-neutral-950 text-base mb-1">
              Panduan Praktis Pemula
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Disertai panduan langkah demi langkah yang memandu Anda dari awal hingga toko digital siap digunakan.
            </p>
          </div>
        </div>

        {/* Smooth scroll down button */}
        <button
          type="button"
          onClick={onScrollToProof}
          className="inline-flex items-center gap-2 text-sm font-bold text-neutral-800 hover:text-emerald-800 bg-white hover:bg-neutral-100 px-5 py-2.5 rounded-xl border border-neutral-300 shadow-2xs transition-colors cursor-pointer"
        >
          <span>Lihat Bukti Nyata & Mockup Produk di Bawah</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
};
