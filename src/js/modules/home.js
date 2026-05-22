export async function initHomeComponents() {
  try {
    const [heroRes, latestStoriesRes, travelPromoRes, featuredDestRes] = await Promise.all([
      fetch('/src/components/home/hero.html'),
      fetch('/src/components/home/latest-stories.html'),
      fetch('/src/components/home/travel-promotion.html'),
      fetch('/src/components/home/featured-destination.html')
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
  } catch (error) {
    console.error("Error loading home components:", error);
  }
}
