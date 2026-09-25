import React from 'react';
import { X, CheckCircle, ExternalLink, Download } from 'lucide-react';
import { ProductSample } from '../data/content';
import bundleMockupImg from '../assets/images/bundle_digital_mockup_1790333522896.jpg';
import { CHECKOUT_URL } from '../config/constants';
import { trackInitiateCheckout } from '../utils/metaPixel';

interface SamplePreviewModalProps {
  sample: ProductSample | null;
  onClose: () => void;
  onOpenCheckout?: () => void;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({
  sample,
  onClose,
  onOpenCheckout,
}) => {
  if (!sample) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              {sample.category} · {sample.sheetCount}
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-0.5">
              {sample.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Tutup preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Sample Image Preview */}
          <div className="relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-inner">
            <img
              src={sample.image}
              alt={sample.title}
              className="w-full h-auto object-contain max-h-[500px] mx-auto block"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('bundle_digital_mockup')) {
                  target.src = bundleMockupImg;
                }
              }}
            />
            <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/70 text-white text-[11px] backdrop-blur-xs">
              Contoh Sampel File Siap Cetak (PDF / Resolusi Tinggi)
            </div>
          </div>

          <p className="text-sm text-neutral-800 leading-relaxed font-medium">
            {sample.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-200">
            {sample.tags.map((tag, i) => (
              <span key={i} className="text-xs font-semibold text-neutral-800 bg-stone-200/80 px-2.5 py-1 rounded-md border border-neutral-300">
                {tag}
              </span>
            ))}
          </div>

          {/* Action box */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-emerald-900">
                Semua file ini sudah termasuk dalam paket 700+ produk & panduan LYNK ID
              </p>
              <p className="text-[11px] text-emerald-800">
                Akses digital seumur hidup, siap Anda gunakan dan pasarkan.
              </p>
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackInitiateCheckout('preview_modal');
                onClose();
              }}
              className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer text-center"
            >
              Dapatkan Akses Sekarang →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
