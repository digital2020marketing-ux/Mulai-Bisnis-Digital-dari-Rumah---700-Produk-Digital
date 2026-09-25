import React from 'react';
import { ShieldCheck, Smartphone, Cpu, HelpCircle, Code, ShoppingBag } from 'lucide-react';

export const BeginnerFriendlySection: React.FC = () => {
  const objections = [
    {
      icon: Cpu,
      title: '“Saya Gaptek dan Takut Bingung Mengoperasikannya”',
      answer: 'Semua materi telah disusun dengan bahasa Indonesia sehari-hari dan petunjuk bergambar. Anda cukup membuka Google Drive dan mengikuti langkah yang sudah dipetakan.',
    },
    {
      icon: Smartphone,
      title: '“Saya Hanya Punya HP, Belum Ada Laptop”',
      answer: 'Bisa dijalankan cukup dari smartphone Anda. Membuka link Google Drive, mengatur toko online Lynk ID, dan membagikan materi promosi semuanya bisa dilakukan lewat layar HP.',
    },
    {
      icon: Code,
      title: '“Saya Tidak Bisa Coding atau Bikin Website Rumit”',
      answer: 'Sama sekali tidak memerlukan coding, sewa domain, atau hosting teknis. Platform toko digital yang kami pandukan bisa langsung digunakan tanpa keahlian teknis.',
    },
    {
      icon: ShoppingBag,
      title: '“Saya Belum Pernah Jualan Produk Digital Sebelumnya”',
      answer: 'Itulah sebabnya materi promosi dan panduan cara menawarkan sudah disertakan, sehingga Anda memiliki pegangan yang jelas untuk memulai langkah pertama.',
    },
  ];

  return (
    <section id="pemula-40" className="py-12 sm:py-16 md:py-20 bg-stone-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Klarifikasi Khusus Usia 40+ & Pemula</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance mb-2.5">
            Dirancang Ramah untuk Pemula & Usia 40+
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto font-medium">
            Kekhawatiran teknis yang sering ditanyakan sebelum memulai, dijawab secara sederhana:
          </p>
        </div>

        {/* 4 Objection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {objections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs space-y-2.5"
              >
                <div className="flex items-center gap-2.5 text-neutral-950 font-bold text-base">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="leading-snug font-extrabold">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed pl-11 font-normal">
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

