// src/js/modules/about.js

export async function initAboutComponents() {
  try {
    const [bannerRes, missionRes, teamsRes, galleryRes] = await Promise.all([
      fetch('/src/components/about/banner.html'),
      fetch('/src/components/about/mission.html'),
      fetch('/src/components/about/teams.html'),
      fetch('/src/components/about/gallery.html'),
    ]);

    const bannerHtml  = await bannerRes.text();
    const missionHtml = await missionRes.text();
    const teamsHtml = await teamsRes.text();
    const galleryHtml = await galleryRes.text();

    const bannerEl  = document.getElementById('about-banner-placeholder');
    const missionEl = document.getElementById('about-mission-placeholder');
    const teamsEl = document.getElementById('about-teams-placeholder');
    const galleryEl = document.getElementById('about-gallery-placeholder');

    if (bannerEl)  bannerEl.outerHTML  = bannerHtml;
    if (missionEl) missionEl.outerHTML = missionHtml;
    if (teamsEl) teamsEl.outerHTML = teamsHtml;
    if (galleryEl) galleryEl.outerHTML = galleryHtml;

  } catch (error) {
    console.error('Error loading about components:', error);
  }
}
