import React from 'react';
import { HelpCircle, AlertCircle, Sparkles } from 'lucide-react';

export const ProblemAgitate: React.FC = () => {
  const problems = [
    {
      title: 'Bingung Mau Jualan Produk Apa',
      desc: 'Ingin memulai bisnis dari rumah, tapi tidak memiliki ide produk yang benar-benar dicari dan dibutuhkan pasar.',
    },
    {
      title: 'Tidak Bisa Desain & Buat Materi dari Nol',
      desc: 'Bukan seorang desainer grafis, tidak menguasai Canva rumit, dan tidak tahu cara membuat modul digital sendiri.',
    },
    {
      title: 'Takut Gaptek karena Usia 40+',
      desc: 'Khawatir menghadapi teknologi canggih atau istilah digital yang sulit dipahami bagi orang awam.',
    },
    {
      title: 'Tidak Mau Ribet Stok & Packing Barang',
      desc: 'Enggan keluar modal besar untuk menimbun barang fisik di rumah, repot membungkus paket, atau bolak-balik kirim ekspedisi.',
    },
    {
      title: 'Tidak Tahu Langkah Pertama Harus Mulai dari Mana',
      desc: 'Merasa tersesat dengan begitu banyaknya informasi di internet tanpa tahu urutan langkah praktis yang teruji.',
    },
  ];

  return (
    <section id="masalah" className="py-12 sm:py-16 md:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2.5 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Keresahan yang Sering Dialami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight text-balance">
            Apakah Keresahan Ini yang Membuat Anda Ragu Memulai?
          </h2>
          <p className="text-neutral-700 mt-2 text-base sm:text-lg font-medium">
            Banyak orang ingin mendapatkan penghasilan tambahan dari rumah, namun terhenti oleh kendala berikut:
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 sm:mb-10">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border border-neutral-200/90 bg-stone-50/70 shadow-2xs ${
                idx === problems.length - 1 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 text-base leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition to Solution */}
        <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-5 sm:p-7 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-neutral-950 flex items-center justify-center shrink-0 font-bold">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-neutral-950 text-base sm:text-lg mb-1">
              Kabar Baiknya: Anda Tidak Perlu Melewati Semua Kerumitan Itu
            </h4>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Jika kendala Anda adalah tidak tahu produk apa yang harus dijual dan bagaimana cara membuatnya, solusinya sangat sederhana: gunakan produk yang sudah jadi dan siap langsung Anda pasarkan.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
