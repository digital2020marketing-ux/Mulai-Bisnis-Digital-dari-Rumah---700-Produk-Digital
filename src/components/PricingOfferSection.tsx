import React from 'react';
import { Tag, ArrowRight, ShieldCheck, Check, Layers, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../config/constants';
import { trackInitiateCheckout } from '../utils/metaPixel';

interface PricingOfferSectionProps {
  onOpenCheckout?: () => void;
}

export const PricingOfferSection: React.FC<PricingOfferSectionProps> = ({
  onOpenCheckout,
}) => {
  const stackItems = [
    '700+ Produk Digital Siap Jual',
    '30.000+ Bank Video Viral & Footage HD/4K',
    'Template Canva & Slide Presentasi Siap Edit',
    'Template Spreadsheet Excel Finansial & Bisnis',
    'Lembar Kegiatan & Cerita Anak Printable',
    'Koleksi E-Book Bisnis & Copywriting',
    'Template Website & Landing Page',
    'Marketing Kit (Script Jualan & Banner Promosi)',
    'Panduan Toko Digital Lynk ID Langkah demi Langkah',
    'Akses Resmi Google Drive Seumur Hidup',
  ];

  return (
    <section id="harga" className="py-12 sm:py-16 md:py-20 bg-stone-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
            <Tag className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ringkasan Paket & Investasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance mb-2.5">
            Semua yang Anda Dapatkan dalam Satu Paket Lengkap
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto font-medium">
            Tidak ada biaya langganan bulanan. Dapatkan seluruh materi dagangan dan panduan berikut:
          </p>
        </div>

        {/* Combined Offer Stack & Price Box */}
        <div className="bg-white rounded-3xl border-2 border-emerald-600 shadow-xl overflow-hidden max-w-3xl mx-auto mb-6">
          
          {/* Top: Offer Stack Summary */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-emerald-50/50 to-white border-b border-neutral-200">
            <h3 className="text-base sm:text-lg font-extrabold text-neutral-950 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-800" />
              <span>Rangkuman Isi Paket:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-neutral-900 font-medium">
              {stackItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 italic mt-3 pt-3 border-t border-neutral-200/80 font-semibold">
              ... dan ratusan produk digital lainnya yang tersimpan di dalam folder cloud.
            </p>
          </div>

          {/* Bottom: Pricing & CTA */}
          <div className="p-6 sm:p-8 text-center space-y-4">
            
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-neutral-600 font-semibold">
                Harga Normal: <span className="line-through text-red-600 font-bold font-mono">Rp 129.000</span>
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl sm:text-6xl font-black text-neutral-950 font-display tracking-tight font-mono">
                  Rp 49.000
                </span>
                <span className="text-xs sm:text-sm text-emerald-800 font-bold bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-200">
                  Sekali bayar — akses permanen
                </span>
              </div>
            </div>

            {/* Single Math Illustration */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/90 border border-amber-300 text-left max-w-xl mx-auto space-y-1">
              <p className="text-xs text-neutral-800 leading-relaxed font-medium">
                💡 Jika satu produk berhasil Anda jual seharga <strong className="text-neutral-950 font-bold">Rp 49.000</strong>, nilai penjualan tersebut sudah setara dengan biaya akses paket ini.
              </p>
              <p className="text-[11px] text-neutral-600 italic">
                *Ini hanya contoh matematika, bukan jaminan hasil penjualan.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 max-w-xl mx-auto">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout('pricing_combined')}
                className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-base sm:text-lg font-black text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-2xl shadow-xl transition-all cursor-pointer ring-4 ring-red-600/30"
              >
                <span>AMBIL AKSES 700+ PRODUK SEKARANG — RP 49.000</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-neutral-700 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>Pembayaran Otomatis Aman via QRIS & Transfer Bank · Akses Langsung Dikirim</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
