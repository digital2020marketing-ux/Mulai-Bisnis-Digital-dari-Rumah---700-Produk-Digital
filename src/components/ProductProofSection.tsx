import React, { useState } from 'react';
import { 
  FolderCheck, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  X, 
  Maximize2
} from 'lucide-react';
import productBundleNewImg from '../assets/images/product_bundle_new.png';

interface ProductProofSectionProps {
  onScrollToCatalog: () => void;
}

export const ProductProofSection: React.FC<ProductProofSectionProps> = ({
  onScrollToCatalog,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section id="bukti-produk" className="py-12 sm:py-16 md:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
            <FolderCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Bukti Fisik & Digital</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance mb-2.5">
            Bukan Sekadar Janji — Lihat Sebagian Isi Produk yang Akan Anda Dapatkan.
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-medium">
            File nyata tersimpan rapi di Google Drive resmi, siap diakses dan diunduh kapan saja tanpa batas waktu:
          </p>
        </div>

        {/* Main Mockup Card with HD Zoom - Clean Light Container */}
        <div className="rounded-2xl overflow-hidden border border-neutral-300 shadow-md bg-stone-100/70 mb-6">
          <div 
            onClick={() => {
              setZoomLevel(1);
              setIsLightboxOpen(true);
            }}
            className="relative group cursor-zoom-in overflow-hidden flex items-center justify-center p-3 sm:p-5"
          >
            <img
              src={productBundleNewImg}
              alt="Bisnis Rumahan Digital Usia 40+ Mega Bundle Mockup"
              width={1200}
              height={1200}
              className="w-full max-w-3xl h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-300 rounded-xl shadow-xs"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('product_bundle_new')) {
                  target.src = '/images/product_bundle_new.png';
                }
              }}
            />
            
            <div className="absolute bottom-5 right-5 bg-neutral-900/90 hover:bg-neutral-950 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5 backdrop-blur-xs transition-all">
              <Maximize2 className="w-4 h-4 text-amber-300" />
              <span>Ketuk untuk Zoom HD Layar Penuh</span>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 text-emerald-950 text-xs sm:text-sm text-center border-t border-emerald-200">
            📁 <strong className="text-emerald-900 font-bold">Bukti Kelengkapan File:</strong> Template Canva siap edit, spreadsheet Excel finansial, 30.000+ bank footage video, lembar worksheet anak, dan modul panduan bisnis.
          </div>
        </div>

        {/* Quick Link to Catalog */}
        <div className="text-center">
          <button
            type="button"
            onClick={onScrollToCatalog}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-sm"
          >
            <span>Lihat Sebagian Contoh Produk di Bawah ↓</span>
          </button>
        </div>

      </div>

      {/* FULLSCREEN HD LIGHTBOX ZOOM MODAL */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-2 sm:p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between text-white p-2 sm:p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-amber-300">
                🔍 Tampilan HD Resolusi Penuh
              </span>
              <span className="text-[11px] text-neutral-400 hidden sm:inline">
                ({Math.round(zoomLevel * 100)}%)
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={handleZoomIn}
                title="Perbesar"
                className="p-1.5 sm:p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs flex items-center gap-1 cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
                <span className="hidden sm:inline">Zoom +</span>
              </button>

              <button
                type="button"
                onClick={handleZoomOut}
                title="Perkecil"
                className="p-1.5 sm:p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs flex items-center gap-1 cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
                <span className="hidden sm:inline">Zoom -</span>
              </button>

              <button
                type="button"
                onClick={handleResetZoom}
                title="Reset Ukuran"
                className="p-1.5 sm:p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </button>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                title="Tutup (Esc)"
                className="p-1.5 sm:p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1 cursor-pointer ml-2"
              >
                <X className="w-4 h-4" />
                <span>Tutup</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 my-2">
            <div 
              className="transition-transform duration-200 origin-center max-w-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={productBundleNewImg}
                alt="Detail Mega Bundle Produk Digital Resolusi Penuh"
                className="max-h-[82vh] w-auto object-contain rounded-xl shadow-2xl mx-auto"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
          </div>

          <div className="text-center text-[11px] sm:text-xs text-neutral-400 pb-2">
            Tip: Gunakan tombol Zoom + di atas atau cubit layar di HP untuk membaca rincian teks dengan sangat jelas.
          </div>
        </div>
      )}

    </section>
  );
};
