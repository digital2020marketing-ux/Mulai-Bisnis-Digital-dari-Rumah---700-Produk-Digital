import React from 'react';
import { ShieldCheck, FolderCheck, CheckCircle2, Zap, Cloud, FileCode } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const proofItems = [
    {
      icon: Cloud,
      title: 'Akses Google Drive Resmi Terstruktur',
      desc: 'Seluruh 700+ materi sudah dikelompokkan ke dalam folder yang rapi: Folder Template Canva, Folder Excel Keuangan, Folder 30.000 Video, dan Folder Modul Bisnis.',
      badge: 'Terorganisir Rapi',
    },
    {
      icon: Zap,
      title: 'Pengiriman Tautan Instan Otomatis',
      desc: 'Sistem pengiriman bekerja otomatis. Tautan akses resmi langsung dikirimkan ke email aktif Anda dalam hitungan detik setelah transfer terverifikasi.',
      badge: 'Instan 24/7',
    },
    {
      icon: FileCode,
      title: 'Format File Master Asli & Siap Pakai',
      desc: 'File spreadsheet sudah berisi rumus aktif, template Canva dapat langsung disalin ke akun gratis Anda, dan video tanpa watermark beresolusi tinggi.',
      badge: 'Kompatibel & Teruji',
    },
  ];

  return (
    <section id="bukti-nyata" className="py-12 sm:py-16 md:py-20 bg-stone-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
            <FolderCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Keandalan & Transparansi Layanan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance mb-2.5">
            Bukti Nyata Sistem Akses & Keamanan Pengiriman
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto font-medium">
            Kami memastikan Anda menerima apa yang dijanjikan tanpa kendala teknis:
          </p>
        </div>

        {/* Real Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {proofItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md border border-emerald-200">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-neutral-950 text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Access Guarantee Pill */}
        <div className="p-4 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-800 font-normal">
              <strong className="text-neutral-950 font-bold">Jaminan Akses Seumur Hidup:</strong> Tautan cloud Google Drive Anda berlaku permanen tanpa biaya bulanan dan dapat Anda unduh berulang kali.
            </p>
          </div>
          <span className="text-xs font-extrabold text-emerald-900 bg-emerald-100/80 border border-emerald-300 px-3 py-1 rounded-lg shrink-0">
            Akses Permanen
          </span>
        </div>

      </div>
    </section>
  );
};

