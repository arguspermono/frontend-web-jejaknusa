import { BASE_URL } from '../utils/base-url.js';

export async function initHomeComponents() {
  try {
    const [heroRes, latestStoriesRes, travelPromoRes, featuredDestRes] = await Promise.all([
      fetch(`${import.meta.env.BASE_URL}components/home/hero.html`),
      fetch(`${import.meta.env.BASE_URL}components/home/latest-stories.html`),
      fetch(`${import.meta.env.BASE_URL}components/home/travel-promotion.html`),
      fetch(`${import.meta.env.BASE_URL}components/home/featured-destination.html`)
    ]);

    const heroHtml = await heroRes.text();
    const latestStoriesHtml = await latestStoriesRes.text();
    const travelPromoHtml = await travelPromoRes.text();
    const featuredDestHtml = await featuredDestRes.text();

    const heroPlaceholder = document.getElementById('hero-placeholder');
    if (heroPlaceholder) heroPlaceholder.outerHTML = heroHtml;

    const latestStoriesPlaceholder = document.getElementById('latest-stories-placeholder');
    if (latestStoriesPlaceholder) latestStoriesPlaceholder.outerHTML = latestStoriesHtml;

    const travelPromoPlaceholder = document.getElementById('travel-promotion-placeholder');
    if (travelPromoPlaceholder) travelPromoPlaceholder.outerHTML = travelPromoHtml;

    const featuredDestPlaceholder = document.getElementById('featured-destination-placeholder');
    if (featuredDestPlaceholder) featuredDestPlaceholder.outerHTML = featuredDestHtml;

    // SET IMAGE URLS AFTER COMPONENTS ARE INSERTED
    document.querySelectorAll('[data-img]').forEach(img => {
      img.src = BASE_URL + img.dataset.img;
    });

  } catch (error) {
    console.error("Error loading home components:", error);
  }
}