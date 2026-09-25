import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Search, 
  ChevronDown, 
  ChevronUp,
  FileSpreadsheet, 
  Video, 
  Palette, 
  BookOpen, 
  FileText, 
  Globe, 
  Calendar,
  Sparkles,
  CheckCircle2,
  FolderOpen,
  Filter,
  ArrowRight
} from 'lucide-react';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES, ProductItem } from '../data/products';
import { CHECKOUT_URL } from '../config/constants';
import { trackInitiateCheckout } from '../utils/metaPixel';

export const WhatYouGetSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDropdownCategory, setSelectedDropdownCategory] = useState<string>('Semua');
  // State for which category accordions are open. By default, all are closed.
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const categoryList = PRODUCT_CATEGORIES.filter((c) => c !== 'Semua');

  // Filter products by search
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        product.title.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        (product.highlight && product.highlight.toLowerCase().includes(q)) ||
        product.format.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  // Group filtered products by category
  const productsByCategory = useMemo(() => {
    const map: Record<string, ProductItem[]> = {};
    categoryList.forEach((cat) => {
      map[cat] = [];
    });
    filteredProducts.forEach((product) => {
      if (!map[product.category]) {
        map[product.category] = [];
      }
      map[product.category].push(product);
    });
    return map;
  }, [filteredProducts, categoryList]);

  // Categories to display based on selected dropdown filter
  const displayedCategories = useMemo(() => {
    if (selectedDropdownCategory === 'Semua') {
      return categoryList;
    }
    return categoryList.filter((cat) => cat === selectedDropdownCategory);
  }, [selectedDropdownCategory, categoryList]);

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const handleExpandAll = () => {
    const allOpen: Record<string, boolean> = {};
    categoryList.forEach((cat) => {
      allOpen[cat] = true;
    });
    setOpenCategories(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenCategories({});
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Panduan & Kelas Jualan':
        return <Video className="w-5 h-5 text-emerald-600" />;
      case 'Excel & Spreadsheet Finansial':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-700" />;
      case 'Video & Bank Konten Viral':
        return <Video className="w-5 h-5 text-red-500" />;
      case 'Canva, PPT & Desain Grafis':
        return <Palette className="w-5 h-5 text-cyan-600" />;
      case 'Worksheet, Cerita & Edukasi Anak':
        return <BookOpen className="w-5 h-5 text-purple-600" />;
      case 'E-Book Bisnis & Copywriting':
        return <FileText className="w-5 h-5 text-amber-600" />;
      case 'Template Web & Elementor':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Template Acara, Religi & Planner':
        return <Calendar className="w-5 h-5 text-rose-500" />;
      default:
        return <FolderOpen className="w-5 h-5 text-neutral-600" />;
    }
  };

  const getFormatBadge = (format: ProductItem['format']) => {
    switch (format) {
      case 'Excel':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Video':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Canva':
        return 'bg-cyan-100 text-cyan-800 border-cyan-300';
      case 'PPT':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'PDF / Ebook':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Elementor / Web':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-neutral-100 text-neutral-800 border-neutral-300';
    }
  };

  return (
    <section id="koleksi" className="py-12 sm:py-16 md:py-20 bg-stone-50/60 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Katalog Sebagian Preview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 font-display tracking-tight text-balance mb-2.5">
            Lihat Sebagian dari 700+ Produk Digital yang Bisa Anda Pasarkan
          </h2>
          <p className="text-[15px] sm:text-base text-neutral-700 leading-relaxed font-normal">
            Di bawah ini adalah beberapa kategori dan contoh produk dari total 700+ produk digital yang tersedia di dalam paket. Sebagian koleksi lainnya tersedia setelah Anda mendapatkan akses lengkap.
          </p>
        </div>

        {/* Compact Dropdown Control Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200 shadow-sm mb-6 space-y-3.5">
          <div className="flex items-center justify-between gap-2 pb-1 border-b border-neutral-100">
            <span className="text-xs font-extrabold text-neutral-800 uppercase tracking-wider">
              Contoh Kategori yang Ditampilkan di Halaman Ini
            </span>
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Preview Sampel
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="sm:col-span-7 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                  if (val.trim()) {
                    // Automatically open all categories that match search
                    const openMap: Record<string, boolean> = {};
                    categoryList.forEach((c) => {
                      openMap[c] = true;
                    });
                    setOpenCategories(openMap);
                  }
                }}
                placeholder="Cari produk (misal: Excel, Canva, Video, Ebook, LYNK)..."
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-500 hover:text-neutral-800 bg-neutral-200/80 px-2 py-0.5 rounded"
                >
                  Batal
                </button>
              )}
            </div>

            {/* Category Dropdown Select */}
            <div className="sm:col-span-5 relative">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-neutral-500 shrink-0 hidden sm:block" />
                <div className="relative w-full">
                  <select
                    value={selectedDropdownCategory}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSelectedDropdownCategory(val);
                    }}
                    className="w-full pl-3.5 pr-8 py-2.5 rounded-xl border border-neutral-300 bg-white text-neutral-900 font-semibold text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer shadow-2xs"
                  >
                    <option value="Semua">📁 Tampilkan Semua Kategori (700+ Produk Digital)</option>
                    {categoryList.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat} ({productsByCategory[cat]?.length || 0} Produk)
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stats & Expand/Collapse Toggle Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-100 text-xs">
            <span className="text-neutral-900 font-bold">
              Total Ditemukan: <strong className="text-emerald-900 font-extrabold">{selectedDropdownCategory === 'Semua' && !searchQuery.trim() ? '700+' : filteredProducts.length} Produk Siap Jual</strong>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleExpandAll}
                className="text-xs font-bold text-neutral-900 hover:text-black bg-stone-200/90 hover:bg-stone-300 px-3 py-1 rounded-lg transition-colors cursor-pointer border border-neutral-300"
              >
                Buka Semua ↓
              </button>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="text-xs font-bold text-neutral-900 hover:text-black bg-stone-200/90 hover:bg-stone-300 px-3 py-1 rounded-lg transition-colors cursor-pointer border border-neutral-300"
              >
                Tutup Semua ↑
              </button>
            </div>
          </div>
        </div>

        {/* Accordion / Dropdown Lists */}
        <div className="space-y-3 mb-8">
          {displayedCategories.map((category) => {
            const items = productsByCategory[category] || [];
            const isOpen = Boolean(openCategories[category] || searchQuery.trim().length > 0);

            if (items.length === 0 && searchQuery.trim()) {
              return null; // hide empty categories during search
            }

            return (
              <div
                key={category}
                className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-2xs transition-all hover:border-neutral-300"
              >
                {/* Dropdown Header Trigger */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-4 sm:p-4.5 text-left bg-white hover:bg-stone-50/80 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-9 h-9 rounded-xl bg-stone-100 border border-neutral-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-extrabold text-neutral-950 text-sm sm:text-base tracking-tight truncate">
                          {category}
                        </h3>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                          {items.length} Produk
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold text-neutral-800 hidden sm:inline">
                      {isOpen ? 'Tutup' : 'Lihat Produk'}
                    </span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center bg-stone-200 text-neutral-900 group-hover:bg-emerald-800 group-hover:text-white transition-all ${isOpen ? 'rotate-180 bg-emerald-800 text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Dropdown Content - Compact Scannable List */}
                {isOpen && (
                  <div className="border-t border-neutral-200 bg-stone-50/70 p-3 sm:p-4 animate-in fade-in duration-200">
                    <div className="max-h-[380px] overflow-y-auto pr-1 space-y-2 divide-y divide-neutral-200/80 scrollbar-thin">
                      {items.map((prod, idx) => (
                        <div
                          key={prod.id}
                          className="pt-2 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 p-2.5 rounded-xl hover:bg-white hover:shadow-2xs transition-all"
                        >
                          <div className="flex items-start gap-2.5 min-w-0">
                            <span className="text-xs font-bold text-neutral-700 font-mono mt-0.5 w-6 shrink-0 text-right">
                              {idx + 1}.
                            </span>
                            <div className="min-w-0">
                              <p className="font-extrabold text-neutral-950 text-sm leading-snug">
                                {prod.title}
                              </p>
                              {prod.highlight && (
                                <p className="text-xs font-medium text-neutral-700 mt-0.5 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                                  <span>{prod.highlight}</span>
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center pl-8 sm:pl-0 mt-1 sm:mt-0">
                            <span className={`text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${getFormatBadge(prod.format)}`}>
                              {prod.format}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-950 bg-emerald-100/90 border border-emerald-300 px-2 py-0.5 rounded">
                              Siap Jual
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note that not all products are shown on this page */}
        <div className="text-center p-3 mb-6 bg-stone-100 rounded-xl border border-neutral-200">
          <p className="text-xs sm:text-sm text-neutral-700 font-medium">
            💡 Masih ada ratusan produk lainnya yang tidak seluruhnya ditampilkan di halaman ini agar katalog tetap mudah dibaca.
          </p>
        </div>

        {/* Emphasized Takeaway Block - Clean Light Theme */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 text-neutral-950 shadow-sm border-2 border-emerald-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left flex-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-neutral-950 mb-1">
                  Akses Seluruh 700+ Produk Tersedia di Google Drive Resmi
                </h4>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                  Seluruh file master, template, video, dan modul tersimpan rapi dalam folder cloud resmi yang langsung bisa Anda akses setelah menyelesaikan pemesanan.
                </p>
              </div>
            </div>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('catalog_banner')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-extrabold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-xl shadow-md transition-all shrink-0 whitespace-nowrap cursor-pointer"
            >
              <span>Dapatkan Akses Lengkap (Rp 49.000)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
