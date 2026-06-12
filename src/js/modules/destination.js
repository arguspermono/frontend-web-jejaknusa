// src/js/modules/destination.js
import { applyTranslations } from '../utils/translations.js';
import { BASE_URL } from '../utils/base-url.js';

// ─── Destination Data ──────────────────────────────────────────────────────────
const DESTINATIONS = [
  {
    id: 'bromo',
    name: 'Gunung Bromo',
    location: 'Jawa Timur, Indonesia',
    category: 'mountain',
    duration: 3,
    price: '$125',
    image: 'img/Bromo1.jpeg',
    descKey: 'bromo_desc',
  },
  {
    id: 'raja-ampat',
    name: 'Raja Ampat',
    location: 'Papua Barat, Indonesia',
    category: 'beach',
    duration: 5,
    price: '$250',
    image: 'img/RajaAmpat.png',
    descKey: 'raja_desc',
  },
  {
    id: 'borobudur',
    name: 'Candi Borobudur',
    location: 'Jawa Tengah, Indonesia',
    category: 'culture',
    duration: 2,
    price: '$45',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80&auto=format&fit=crop',
    descKey: 'borobudur_desc',
  },
  {
    id: 'bali',
    name: 'Bali',
    location: 'Bali, Indonesia',
    category: 'beach',
    duration: 7,
    price: '$180',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format&fit=crop',
    descKey: 'bali_desc',
  },
  {
    id: 'rinjani',
    name: 'Gunung Rinjani',
    location: 'Nusa Tenggara Barat, Indonesia',
    category: 'mountain',
    duration: 4,
    price: '$150',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop',
    descKey: 'rinjani_desc',
  },
  {
    id: 'yogyakarta',
    name: 'Yogyakarta',
    location: 'DI Yogyakarta, Indonesia',
    category: 'city',
    duration: 3,
    price: '$65',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80&auto=format&fit=crop',
    descKey: 'jogja_desc',
  },
  {
    id: 'toba',
    name: 'Danau Toba',
    location: 'Sumatera Utara, Indonesia',
    category: 'nature',
    duration: 4,
    price: '$95',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80&auto=format&fit=crop',
    descKey: 'toba_desc',
  },
  {
    id: 'komodo',
    name: 'Taman Nasional Komodo',
    location: 'Nusa Tenggara Timur, Indonesia',
    category: 'nature',
    duration: 3,
    price: '$175',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80&auto=format&fit=crop',
    descKey: 'komodo_desc',
  },
  {
    id: 'nusa-penida',
    name: 'Nusa Penida',
    location: 'Bali, Indonesia',
    category: 'beach',
    duration: 2,
    price: '$85',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80&auto=format&fit=crop',
    descKey: 'nusapenida_desc',
  },
];

// ─── Category Config ───────────────────────────────────────────────────────────
const CATEGORIES = [
  { key: 'all',      i18nKey: 'filter_all' },
  { key: 'nature',   i18nKey: 'filter_nature' },
  { key: 'culture',  i18nKey: 'filter_culture' },
  { key: 'mountain', i18nKey: 'filter_mountain' },
  { key: 'beach',    i18nKey: 'filter_beach' },
  { key: 'city',     i18nKey: 'filter_city' },
];

const CAT_I18N = {
  nature:   'cat_nature',
  culture:  'cat_culture',
  mountain: 'cat_mountain',
  beach:    'cat_beach',
  city:     'cat_city',
};

let activeCategory = 'all';

// ─── Render: Category Tabs ─────────────────────────────────────────────────────
function renderTabs() {
  const container = document.getElementById('category-tabs');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(({ key, i18nKey }) => {
    const isActive = key === activeCategory;
    return `
      <button
        data-category="${key}"
        data-i18n="${i18nKey}"
        role="tab"
        aria-selected="${isActive}"
        class="category-tab flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap
               transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5320]
               ${isActive
                 ? 'bg-[#4A5320] dark:bg-[#c5d06a] text-white dark:text-gray-900 shadow-sm'
                 : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[#4A5320] dark:hover:border-[#c5d06a] hover:text-[#4A5320] dark:hover:text-[#c5d06a]'
               }"
      >${key}</button>`;
  }).join('');

  container.querySelectorAll('.category-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      renderTabs();
      renderCards();
      applyTranslations(localStorage.getItem('lang') || 'id');
    });
  });
}

// ─── Render: Destination Cards ─────────────────────────────────────────────────
function renderCards() {
  const grid      = document.getElementById('destination-grid');
  const noResults = document.getElementById('no-results');
  if (!grid) return;

  const list = activeCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === activeCategory);

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults?.classList.remove('hidden');
    return;
  }

  noResults?.classList.add('hidden');
  grid.innerHTML = list.map(buildCardHTML).join('');

  // Staggered entrance: CSS animation driven by delay set here
  grid.querySelectorAll('.dest-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 55}ms`;
  });
}

// ─── Card HTML Builder ─────────────────────────────────────────────────────────
function buildCardHTML(dest) {
  const durationLabel = `${dest.duration} day${dest.duration > 1 ? 's' : ''}`;

  return `
    <article
      class="dest-card group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
             shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      data-id="${dest.id}"
      role="listitem"
    >
      <!-- ── Image ── -->
      <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src="${dest.image}"
          alt="${dest.name}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <!-- Subtle bottom-up gradient on the image -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>

        <!-- Category badge -->
        <span
          class="absolute top-3 left-3 bg-[#4A5320]/90 backdrop-blur-sm text-white
                 text-[0.6rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
          data-i18n="${CAT_I18N[dest.category]}"
        >${dest.category}</span>

        <!-- Duration pill — top right -->
        <span class="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[0.65rem] font-semibold px-2.5 py-1 rounded-full">
          ${durationLabel}
        </span>
      </div>

      <!-- ── Body ── -->
      <div class="p-4 sm:p-5">

        <!-- Destination name -->
        <h3 class="font-bold text-gray-900 dark:text-white text-[0.95rem] leading-snug mb-1.5">
          ${dest.name}
        </h3>

        <!-- Location -->
        <div class="flex items-center gap-1.5 mb-3">
          <svg class="w-3.5 h-3.5 text-[#4A5320] dark:text-[#c5d06a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd" />
          </svg>
          <span class="text-xs text-gray-500 dark:text-gray-400 truncate">${dest.location}</span>
        </div>

        <!-- Short description — 2-line clamp -->
        <p class="text-[0.78rem] text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2"
           data-i18n="${dest.descKey}"></p>

        <!-- ── Footer: Price + CTA ── -->
        <div class="flex items-center justify-between pt-3.5 border-t border-gray-100 dark:border-gray-800">

          <!-- Price -->
          <div>
            <p class="text-[0.58rem] text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none mb-0.5">From</p>
            <p class="text-lg font-black text-gray-900 dark:text-white leading-none">${dest.price}</p>
          </div>

          <!-- CTA Button -->
          <a
            href="destination-detail.html?id=${dest.id}"
            class="group/btn flex items-center gap-1.5
                   bg-[#4A5320] hover:bg-[#3a4118] dark:bg-[#c5d06a] dark:hover:bg-[#b0ba56]
                   text-white dark:text-gray-900 text-xs font-bold
                   px-4 py-2.5 rounded-full
                   transition-all duration-200 active:scale-95"
            aria-label="Lihat detail ${dest.name}"
            data-i18n="see_detail"
          >
            <span>Lihat Detail</span>
            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>

        </div>
      </div>
    </article>`;
}

// ─── Init ──────────────────────────────────────────────────────────────────────
export async function initDestinationComponents() {
  try {
    const [heroRes, contentRes] = await Promise.all([
      fetch(`${import.meta.env.BASE_URL}components/destination/hero.html`),
      fetch(`${import.meta.env.BASE_URL}components/destination/content.html`),
    ]);

    const heroHtml    = await heroRes.text();
    const contentHtml = await contentRes.text();

    const heroEl    = document.getElementById('dest-hero-placeholder');
    const contentEl = document.getElementById('dest-content-placeholder');

    if (heroEl)    heroEl.outerHTML    = heroHtml;
    if (contentEl) contentEl.outerHTML = contentHtml;

    const lang = localStorage.getItem('lang') || 'id';
    renderTabs();
    renderCards();
    applyTranslations(lang);

    // SET IMAGE URLS AFTER COMPONENTS ARE INSERTED
    document.querySelectorAll('[data-img]').forEach(img => {
      img.src = BASE_URL + img.dataset.img;
    });
  } catch (err) {
    console.error('Error loading destination components:', err);
  }
}
