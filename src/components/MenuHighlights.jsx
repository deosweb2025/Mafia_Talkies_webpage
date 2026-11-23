import React, { useState, useMemo } from 'react';
import { 
  Coffee, 
  GlassWater, 
  Utensils, 
  UtensilsCrossed, 
  Soup, 
  Flame, 
  Sandwich, 
  Search, 
  Sparkles, 
  Star, 
  X, 
  CheckCircle2, 
  MessageCircle,
  Clock,
  ChevronRight
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

const MenuHighlights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'non-veg' | 'signature'

  const categories = siteData.fullMenu || [];

  // Icon mapping for categories
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Utensils':
        return Utensils;
      case 'Soup':
        return Soup;
      case 'Flame':
        return Flame;
      case 'UtensilsCrossed':
        return UtensilsCrossed;
      case 'Sandwich':
        return Sandwich;
      case 'Coffee':
        return Coffee;
      case 'GlassWater':
        return GlassWater;
      default:
        return Utensils;
    }
  };

  // Filter items based on active category, search query, and dietary preference
  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        // Match category tab
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        const filteredItems = cat.items.filter((item) => {
          // Dietary filter
          if (dietFilter === 'veg' && !item.isVeg) return false;
          if (dietFilter === 'non-veg' && item.isVeg) return false;
          if (dietFilter === 'signature') {
            const hasSignatureTag = item.tag && (
              item.tag.toLowerCase().includes('signature') || 
              item.tag.toLowerCase().includes('special') || 
              item.tag.toLowerCase().includes('legendary') ||
              item.tag.toLowerCase().includes('bestseller')
            );
            if (!hasSignatureTag) return false;
          }

          // Search query match
          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            const nameMatch = item.name.toLowerCase().includes(q);
            const descMatch = item.desc && item.desc.toLowerCase().includes(q);
            const tagMatch = item.tag && item.tag.toLowerCase().includes(q);
            const categoryMatch = cat.category.toLowerCase().includes(q);
            if (!nameMatch && !descMatch && !tagMatch && !categoryMatch) return false;
          }

          return true;
        });

        if (filteredItems.length === 0) return null;

        return {
          ...cat,
          items: filteredItems,
        };
      })
      .filter(Boolean);
  }, [categories, selectedCategory, searchQuery, dietFilter]);

  // Total matching item count
  const totalItemCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  // Construct WhatsApp order link for specific dish
  const getWhatsAppOrderUrl = (itemName, price) => {
    const text = encodeURIComponent(
      `Hello Mafia Talkies! I would like to order / inquire about "${itemName}"${price ? ` (₹${price})` : ''} from your menu.`
    );
    return `https://wa.me/91${siteData.contact.whatsapp}?text=${text}`;
  };

  return (
    <section
      id="menu"
      className="py-20 md:py-28 relative bg-[#08090C] border-t border-[#E5A93C]/15 overflow-hidden"
      aria-label="Gourmet Menu & Culinary Delights"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#E5A93C]/5 via-[#D92338]/5 to-transparent blur-[120px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Gourmet Cinema Reel"
          title="The Grand Talkies Menu"
          subtitle="Explore our handcrafted culinary collection — from fiery wok specials and golden Kolkata fry delicacies to artisanal barista brews and signature mocktails."
        />

        {/* ========================================================================= */}
        {/* VIP HOOKAH LOUNGE AMBIENT BANNER (Inspired by flyer invitation)            */}
        {/* ========================================================================= */}
        <div className="mb-12 relative rounded-3xl overflow-hidden cinema-border p-6 sm:p-8 bg-gradient-to-r from-[#14121A]/95 via-[#1A1412]/95 to-[#12141C]/95 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-[#E5A93C] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{siteData.hookahLounge.tag}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-['Cinzel',serif] tracking-wide">
                {siteData.hookahLounge.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E5A93C] font-semibold tracking-wide">
                {siteData.hookahLounge.headline}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {siteData.hookahLounge.description}
              </p>
              
              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {siteData.hookahLounge.features.map((feat, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 text-[11px] text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#E5A93C]" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] hover:from-[#FFF1A8] hover:to-[#CD8E27] shadow-lg shadow-[#E5A93C]/20 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve Hookah Table</span>
              </a>
              <a
                href={siteData.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-gray-200 bg-[#161922] hover:bg-[#1E2330] border border-white/10 hover:border-[#E5A93C]/40 transition-colors"
              >
                <span>Call {siteData.contact.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CONTROLS: SEARCH & DIETARY TOGGLE                              */}
        {/* ========================================================================= */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Live Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4 text-[#E5A93C]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. dragon chicken, momo, cold coffee)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#11131A] border border-white/10 hover:border-[#E5A93C]/40 focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C] text-sm text-white placeholder-gray-500 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Preference Filters */}
            <div className="flex items-center gap-1.5 p-1 bg-[#11131A] border border-white/10 rounded-xl overflow-x-auto">
              <button
                type="button"
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  dietFilter === 'all'
                    ? 'bg-[#E5A93C] text-black shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                All Dishes
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('veg')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Pure Veg</span>
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('non-veg')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  dietFilter === 'non-veg'
                    ? 'bg-rose-700 text-white shadow-sm'
                    : 'text-gray-400 hover:text-rose-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span>Non-Veg</span>
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('signature')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  dietFilter === 'signature'
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-bold shadow-sm'
                    : 'text-gray-400 hover:text-amber-300'
                }`}
              >
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>Signatures</span>
              </button>
            </div>

          </div>

          {/* Result Count and Active Filters Helper */}
          <div className="flex items-center justify-between text-xs text-gray-400 px-1">
            <span>
              Showing <strong className="text-[#E5A93C]">{totalItemCount}</strong> gourmet items
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            {(searchQuery || dietFilter !== 'all' || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setDietFilter('all');
                  setSelectedCategory('all');
                }}
                className="text-[#E5A93C] hover:underline font-medium cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY SWITCHER PILLS                                                   */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 transition-all duration-300 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] text-black shadow-lg shadow-[#E5A93C]/20'
                : 'bg-[#12141C] text-gray-300 hover:text-white border border-white/5 hover:border-[#E5A93C]/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Menu</span>
          </button>

          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat.icon);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] text-black shadow-lg shadow-[#E5A93C]/20'
                    : 'bg-[#12141C] text-gray-300 hover:text-white border border-white/5 hover:border-[#E5A93C]/30'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.shortTitle || cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MENU CATEGORIES & ITEMS LIST                                              */}
        {/* ========================================================================= */}
        {filteredCategories.length === 0 ? (
          <div className="py-16 text-center rounded-3xl cinema-border bg-[#101218]/90 max-w-xl mx-auto p-8">
            <Utensils className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white font-['Cinzel',serif] mb-2">No matching dishes found</h4>
            <p className="text-gray-400 text-sm mb-6">
              We couldn't find any items matching your current filters. Try searching for something else or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setDietFilter('all');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#E5A93C] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#FDE68A] transition-colors cursor-pointer"
            >
              Show Full Menu
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((section) => {
              const Icon = getCategoryIcon(section.icon);
              return (
                <div key={section.id} className="space-y-4">
                  {/* Category Section Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#E5A93C]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center text-[#E5A93C]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Cinzel',serif] tracking-wide">
                          {section.category}
                        </h3>
                        {section.subtitle && (
                          <p className="text-xs text-gray-400 font-light mt-0.5">
                            {section.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-[#E5A93C] tracking-wider uppercase pl-11 sm:pl-0">
                      {section.items.length} {section.items.length === 1 ? 'Item' : 'Items'}
                    </span>
                  </div>

                  {/* Items Grid: 2 columns on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 pt-1">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="group relative rounded-2xl bg-[#10131B]/90 hover:bg-[#151923] border border-white/5 hover:border-[#E5A93C]/40 p-4 sm:p-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#E5A93C]/5 flex flex-col justify-between"
                      >
                        {/* Upper row: Dietary indicator, Item Name, Tags, Price */}
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-1.5">
                            <div className="flex items-start gap-2.5">
                              {/* Pure Veg or Non-Veg Icon Symbol */}
                              <span 
                                className={`mt-1 shrink-0 w-3.5 h-3.5 border flex items-center justify-center rounded-[3px] ${
                                  item.isVeg 
                                    ? 'border-emerald-500 bg-emerald-950/40' 
                                    : 'border-rose-500 bg-rose-950/40'
                                }`}
                                title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-400' : 'bg-rose-500'}`} />
                              </span>

                              <div>
                                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5A93C] transition-colors font-['Cinzel',serif] leading-tight">
                                  {item.name}
                                </h4>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                  {item.tag && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D92338]/20 border border-[#D92338]/40 text-[#FFA5A5]">
                                      {item.tag}
                                    </span>
                                  )}
                                  {item.addon && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-[#E5A93C]">
                                      {item.addon}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Price Badge */}
                            {item.price !== undefined && (
                              <div className="text-right shrink-0">
                                <span className="font-['Cinzel',serif] text-base sm:text-lg font-extrabold text-gold-gradient tracking-tight">
                                  ₹{item.price}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Appetizing Culinary Description */}
                          {item.desc && (
                            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed pl-6 mt-1 mb-2">
                              {item.desc}
                            </p>
                          )}

                          {/* Multi-variants breakdown (e.g. Fried Rice Veg/Egg/Chicken/Mix) */}
                          {item.variants && (
                            <div className="pl-6 mt-2 pt-2 border-t border-white/5">
                              <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block mb-1.5">
                                Select Portion & Protein:
                              </span>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                                {item.variants.map((v, vIdx) => (
                                  <div
                                    key={vIdx}
                                    className="flex items-center justify-between px-2.5 py-1 rounded-md bg-[#161922] border border-white/5 text-[11px]"
                                  >
                                    <span className="text-gray-300 truncate">{v.name}</span>
                                    <span className="text-[#E5A93C] font-bold font-mono ml-1">₹{v.price}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom action bar */}
                        <div className="pl-6 pt-3 mt-2 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#E5A93C]" />
                            <span>Freshly Prepared</span>
                          </span>

                          <a
                            href={getWhatsAppOrderUrl(item.name, item.price)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#E5A93C] hover:text-[#FDE68A] group-hover:translate-x-0.5 transition-all"
                            title={`Order ${item.name} via WhatsApp`}
                          >
                            <span>Order / Inquire</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* FOOTER CTA & WHATSAPP ASSISTANCE                                          */}
        {/* ========================================================================= */}
        <div className="mt-16 pt-8 border-t border-dashed border-[#E5A93C]/30 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0E1017] p-6 rounded-2xl border border-white/5">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white font-['Cinzel',serif] flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#E5A93C]" />
              <span>Dine-In, Takeaway & Party Lounge Bookings</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Have specific spice preferences, dietary requirements or want to book for birthday/group events?
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={siteData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] hover:from-[#FFF1A8] hover:to-[#CD8E27] shadow-lg shadow-[#E5A93C]/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MenuHighlights;
