import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, ArrowRight, ShieldCheck, Download, Copy, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { CHECKOUT_URL } from '../config/constants';
import { trackInitiateCheckout, trackLeadOrPurchase } from '../utils/metaPixel';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || !email.trim()) {
      setErrorMsg('Mohon lengkapi nama lengkap, nomor WhatsApp, dan alamat email aktif Anda.');
      return;
    }
    setErrorMsg('');
    trackLeadOrPurchase({ name, phone: whatsapp, email });
    setStep('payment');
  };

  const handleCopyAcc = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateWhatsAppUrl = () => {
    const text = `Halo Admin BisnisRumahan, saya ingin mengonfirmasi pemesanan akses 700+ Produk Digital + Panduan LYNK ID & Meta Ads seharga Rp 49.000.\n\nNama: ${name || 'Pelanggan'}\nNo. WA: ${whatsapp || '-'}\nEmail: ${email || '-'}\nTotal: Rp 49.000\nLink Checkout: ${CHECKOUT_URL}\n\nMohon dibantu konfirmasi aksesnya. Terima kasih.`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  const handleSimulatePaymentComplete = () => {
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 my-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header - Clean Emerald Theme */}
        <div className="p-5 bg-emerald-800 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-200">
              Akses Instan Google Drive
            </span>
            <h3 className="text-lg font-extrabold font-display text-white">
              700+ Produk Digital & Panduan LYNK ID
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-100 hover:text-white rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: CONTACT DATA FORM OR DIRECT LINK */}
        {step === 'form' && (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            
            {/* Direct Official Checkout Button */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('modal_scalev_direct')}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-4 text-base font-extrabold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-xl shadow-lg transition-all cursor-pointer ring-4 ring-red-600/20 text-center"
            >
              <span>Buka Formulir Checkout Resmi Scalev →</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-3 my-2 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
              <span className="flex-1 h-px bg-neutral-200" />
              <span>Atau isi formulir cepat di bawah</span>
              <span className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* Price & Value Reassurance */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-neutral-900 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Harga Promo Terbatas
                </span>
                <span className="text-xs text-neutral-500 line-through font-mono">Rp 129.000</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black font-mono text-emerald-800">
                  Rp 49.000
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  Sekali Bayar · Selamanya
                </span>
              </div>
              <p className="text-xs font-bold text-amber-950 pt-1">
                🔥 Dijual 1 kali saja seharga Rp 49.000 sudah langsung balik modal!
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700 font-semibold">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Buyer Contact Form */}
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                Data Penerima Akses:
              </label>

              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pak Bambang"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="w-full px-4 py-3 text-base border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 bg-white shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="w-full px-4 py-3 text-base border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 bg-white shadow-2xs"
                />
                <p className="text-xs text-neutral-600 mt-1">
                  Tautan akses folder Google Drive akan dikirimkan ke nomor ini.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  Alamat Email Aktif <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="namaanda@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="w-full px-4 py-3 text-base border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 bg-white shadow-2xs"
                />
                <p className="text-xs text-neutral-600 mt-1">
                  Tautan akses resmi Google Drive akan dikirimkan otomatis ke email ini.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-base font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Lanjut Pembayaran Rp 49.000</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-700 font-medium mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                <span>Tanpa langganan bulanan · Akses seumur hidup</span>
              </div>
            </div>

          </form>
        )}

        {/* STEP 2: PAYMENT (QRIS, TRANSFER BANK & SCALEV LINK) */}
        {step === 'payment' && (
          <div className="p-6 space-y-5">
            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
                Selesaikan Pembayaran
              </span>
              <h4 className="text-3xl font-black text-neutral-950 mt-1 font-mono">
                Rp 49.000
              </h4>
              <p className="text-xs text-neutral-700 font-medium mt-0.5">
                Atas nama: <strong className="text-neutral-950 font-bold">{name}</strong> ({whatsapp})
              </p>
            </div>

            {/* Direct Official Link */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('modal_step2_scalev')}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-black text-white bg-red-600 hover:bg-red-700 active:scale-[0.99] rounded-xl shadow-md transition-colors cursor-pointer text-center"
            >
              <span>Bayar Otomatis di Halaman Resmi Scalev →</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Notice */}
            <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-center text-xs text-amber-950 font-semibold">
              Atau transfer langsung tepat <strong>Rp 49.000</strong> melalui QRIS / Bank Transfer:
            </div>

            {/* QRIS Visual */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-neutral-300 flex flex-col items-center text-center">
              <div className="w-44 h-44 bg-white border border-neutral-300 rounded-xl p-3 flex flex-col items-center justify-center shadow-inner mb-3">
                <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-950">
                  <rect x="0" y="0" width="100" height="100" fill="white" />
                  <path d="M10 10h30v30h-30z M15 15h20v20h-20z M20 20h10v10h-10z" fill="currentColor" />
                  <path d="M60 10h30v30h-30z M65 15h20v20h-20z M70 20h10v10h-10z" fill="currentColor" />
                  <path d="M10 60h30v30h-30z M15 65h20v20h-20z M20 70h10v10h-10z" fill="currentColor" />
                  <rect x="45" y="15" width="10" height="10" fill="currentColor" />
                  <rect x="15" y="45" width="10" height="10" fill="currentColor" />
                  <rect x="50" y="50" width="15" height="15" fill="currentColor" />
                  <rect x="70" y="70" width="15" height="15" fill="currentColor" />
                  <rect x="75" y="45" width="10" height="15" fill="currentColor" />
                  <rect x="45" y="75" width="15" height="10" fill="currentColor" />
                </svg>
              </div>
              <p className="text-xs font-extrabold text-neutral-950">
                Pindai QRIS (BCA, Livin, BRImo, GoPay, OVO, DANA)
              </p>
              <p className="text-[12px] font-medium text-neutral-700">
                Mendukung seluruh m-banking dan e-wallet Indonesia
              </p>
            </div>

            {/* Alternatif Transfer Manual */}
            <div className="p-3.5 rounded-xl bg-stone-100/90 border border-neutral-300 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-neutral-800">Bank Central Asia (BCA):</span>
                <button
                  type="button"
                  onClick={() => handleCopyAcc('8735029112')}
                  className="inline-flex items-center gap-1 text-emerald-800 hover:underline font-bold cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Tersalin!' : 'Salin Rekening'}</span>
                </button>
              </div>
              <p className="font-mono text-base font-black text-neutral-950">
                8735 029 112
              </p>
              <p className="text-neutral-700 text-[11px] font-semibold">a.n. Katalog Produk Digital</p>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleSimulatePaymentComplete}
                className="w-full py-3.5 px-4 text-sm font-black text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] rounded-xl shadow-md transition-colors cursor-pointer text-center"
              >
                Saya Sudah Melakukan Pembayaran →
              </button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-emerald-950 bg-emerald-100/80 hover:bg-emerald-200/80 rounded-xl transition-colors border border-emerald-300 text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-800" />
                <span>Konfirmasi via WhatsApp Admin</span>
              </a>

              <button
                type="button"
                onClick={() => setStep('form')}
                className="w-full text-xs font-bold text-neutral-700 hover:text-black py-1 cursor-pointer"
              >
                ← Kembali ke data pemesanan
              </button>
            </div>

          </div>
        )}

        {/* STEP 3: SUCCESS & IMMEDIATE DOWNLOAD ACCESS */}
        {step === 'success' && (
          <div className="p-6 text-center space-y-5 animate-fade-in">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Akses Berhasil Diaktifkan
              </span>
              <h4 className="text-2xl font-extrabold text-neutral-950 font-display mt-1">
                Selamat Datang, {name}!
              </h4>
              <p className="text-sm text-neutral-800 mt-1 max-w-sm mx-auto font-medium">
                Terima kasih atas apresiasi Anda. Seluruh 700+ produk digital, 30.000+ video konten, ribuan template Canva/Excel & panduan jualan LYNK ID sudah siap Anda akses.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-neutral-300 text-left space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-950">
                    Akses Folder Google Drive Utama
                  </p>
                  <p className="text-[12px] text-neutral-700 font-medium">
                    Koleksi 700+ produk & materi jualan tersusun rapi per kategori
                  </p>
                </div>
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors cursor-pointer text-center"
              >
                <span>Buka Detail Pesanan Scalev</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-neutral-800 bg-white hover:bg-neutral-100 rounded-xl border border-neutral-300 transition-colors text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
                <span>Hubungi Admin via WhatsApp</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-bold text-neutral-700 hover:text-black underline cursor-pointer"
            >
              Tutup Jendela Ini
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
