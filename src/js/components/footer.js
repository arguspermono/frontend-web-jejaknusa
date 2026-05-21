// src/js/components/footer.js

export function initFooter() {
  const footerContainer = document.getElementById('footer-placeholder');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-12 pb-6 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">

          <!-- Company -->
          <div>
            <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide" data-i18n="footer_company">Company</h4>
            <ul class="space-y-2">
              <li><a href="about_us.html" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red transition-colors" data-i18n="footer_about">About Us</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_team">Meet Our Team</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_careers">Careers</a></li>
              <li><a href="about_us.html" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_contact">Contact Us</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_sitemap">Sitemap</a></li>
            </ul>
          </div>

          <!-- News & Event -->
          <div>
            <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide" data-i18n="footer_news">News & Event</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_events">Events</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_newslink">News</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_media">Media Kontak</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide" data-i18n="footer_resources">Resources</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_help">Help Center</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_guide">Travel Guide</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_web">Website</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_faq">Tanya & Jawab</a></li>
            </ul>
          </div>

          <!-- Partners -->
          <div>
            <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide" data-i18n="footer_partners">Partners</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_hotel">Hotels</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_airlines">Airlines</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_tours">Tour Operators</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_program">Program</a></li>
            </ul>
          </div>

          <!-- Investor -->
          <div>
            <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide" data-i18n="footer_investor">Investor</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_annual">Annual Reports</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_stocks">Stock Info</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_ir">Investor Relations</a></li>
              <li><a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_blog">Blog</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <span class="text-xs font-bold text-gray-900 dark:text-white uppercase">JEJAKNUSA</span>
          </div>
          <p class="text-xs text-gray-400 dark:text-gray-600" data-i18n="footer_copy">© 2025 JejakNusa Travel. All rights reserved.</p>
          <div class="flex items-center gap-4">
            <a href="#" class="text-xs text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_privacy">Privacy Policy</a>
            <a href="#" class="text-xs text-gray-400 hover:text-brand-red transition-colors" data-i18n="footer_terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
