import React from 'react';
import { Megaphone, MessageSquareText, Image, BookOpen, Video, CheckCircle2 } from 'lucide-react';

export const MarketingKitSection: React.FC = () => {
  const items = [
    {
      icon: MessageSquareText,
      title: 'Script Chat & Copywriting Siap Pakai',
      desc: 'Teks penawaran yang sudah terbukti menarik, siap disalin-tempel untuk status WhatsApp, broadcast chat, atau caption media sosial.',
    },
    {
      icon: Image,
      title: 'Banner Promosi Siap Posting',
      desc: 'Puluhan materi visual dan gambar promosi beresolusi tajam yang siap langsung diunggah tanpa perlu Anda desain sendiri.',
    },
    {
      icon: BookOpen,
      title: 'Buku Panduan Toko Digital Lynk ID',
      desc: 'Petunjuk visual langkah demi langkah cara membuat toko online, memasang produk, dan menautkan link pengiriman otomatis.',
    },
    {
      icon: Video,
      title: 'Video Tutorial Praktis untuk Pemula',
      desc: 'Panduan video yang memperlihatkan cara mengunduh, mengatur file di Google Drive, dan membagikannya ke pembeli dengan mudah.',
    },
  ];

  return (
    <section id="marketing-kit" className="py-12 sm:py-16 md:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
            <Megaphone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Materi Promosi & Panduan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance mb-2.5">
            Anda Juga Tidak Harus Membuat Materi Promosi dari Nol.
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto font-medium">
            Pertanyaan yang sering muncul: <em>“Produknya sudah ada, tapi saya jualnya bagaimana?”</em> Inilah materi pendukung yang sudah kami sertakan di dalam paket:
          </p>
        </div>

        {/* 4 Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-stone-50 p-5 rounded-2xl border border-neutral-200 shadow-2xs space-y-2.5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-neutral-950 text-base leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 text-center font-medium">
          💡 <strong className="text-emerald-900 font-bold">Tinggal Terapkan:</strong> Anda cukup mengikuti panduan dan menggunakan materi promosi yang telah disediakan untuk mulai memperkenalkan produk Anda.
        </div>

      </div>
    </section>
  );
};
