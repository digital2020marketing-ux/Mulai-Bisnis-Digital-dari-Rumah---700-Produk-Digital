import React from 'react';
import { Compass, FolderDown, CheckSquare, Store, Megaphone, Send, ArrowRight } from 'lucide-react';

export const HowToStartSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: FolderDown,
      title: 'Akses Produk di Google Drive',
      description: 'Setelah pembayaran terkonfirmasi, Anda langsung menerima link resmi untuk membuka seluruh isi folder Google Drive.',
    },
    {
      number: '02',
      icon: CheckSquare,
      title: 'Pilih Produk yang Ingin Anda Jual',
      description: 'Pilih 1 produk atau 1 kategori yang ingin Anda tawarkan terlebih dahulu, misalnya template Excel, materi anak, atau template Canva.',
    },
    {
      number: '03',
      icon: Store,
      title: 'Buat / Tata Toko Digital di Lynk ID',
      description: 'Buka akun gratis di Lynk ID mengikuti panduan. Masukkan judul produk, tentukan harga, dan tautkan link Google Drive untuk pembeli.',
    },
    {
      number: '04',
      icon: Megaphone,
      title: 'Pasang Materi Promosi Siap Pakai',
      description: 'Salin teks promosi (copywriting) dan gunakan banner gambar yang sudah kami sediakan di dalam marketing kit.',
    },
    {
      number: '05',
      icon: Send,
      title: 'Mulai Menawarkan Produk',
      description: 'Bagikan tautan produk atau toko digital Anda ke media sosial atau tawarkan langsung ke kontak yang membutuhkan sesuai panduan.',
    },
  ];

  return (
    <section id="cara-mulai" className="py-12 sm:py-16 md:py-20 bg-stone-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Alur Langkah Praktis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance mb-2.5">
            Kalau Saya Beli, Mulai dari Mana?
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto font-medium">
            Alurnya sangat sederhana dan terstruktur. Anda tidak perlu bingung karena cukup mengikuti 5 tahapan berikut:
          </p>
        </div>

        {/* 5-Step Linear Timeline */}
        <div className="space-y-3.5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-xs font-black text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-2.5 py-1 rounded-lg">
                    Langkah {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-neutral-900 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald-800" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-neutral-950 text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
