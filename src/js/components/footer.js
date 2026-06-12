// src/js/components/footer.js

export function initFooter() {
  const footerContainer = document.getElementById('footer-placeholder');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="relative bg-[#F2EDDF] dark:bg-black overflow-hidden transition-colors duration-300">
      <div class="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-16 pb-8">
        <!-- Link Columns -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">

          <!-- Company -->
          <div>
            <h4 class="text-base font-bold text-gray-900 dark:text-white mb-5">Company</h4>
            <ul class="space-y-3">
              <li><a href="about_us.html" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Management team</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Corporate</a></li>
              <li><a href="about_us.html" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <!-- News & Event -->
          <div>
            <h4 class="text-base font-bold text-gray-900 dark:text-white mb-5">News &amp; Event</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Events</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">News</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Media Library</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="text-base font-bold text-gray-900 dark:text-white mb-5">Resources</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Developer Central</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Explore Resources</a></li>
            </ul>
          </div>

          <!-- Partners -->
          <div>
            <h4 class="text-base font-bold text-gray-900 dark:text-white mb-5">Partners</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Partner Hub</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Distributors</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Program</a></li>
            </ul>
          </div>

          <!-- Investor -->
          <div>
            <h4 class="text-base font-bold text-gray-900 dark:text-white mb-5">Investor</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Financial</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Board Information</a></li>
              <li><a href="#" class="text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">SEC Filing</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Bar -->
         <div class="border-t border-gray-400/40 dark:border-gray-800 pt-8 flex flex-col items-center gap-3 text-center">
           <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-gray-700 dark:text-gray-400">
             <a href="#" class="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
             <span class="text-gray-400 dark:text-gray-600">|</span>
             <a href="#" class="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
             <span class="text-gray-400 dark:text-gray-600">|</span>
             <a href="#" class="hover:text-black dark:hover:text-white transition-colors">Cookies Policy</a>
           </div>
           <p class="text-sm text-gray-600 dark:text-gray-500">@ 2025  JejakNusa Traveling, Inc</p>
         </div>
    </footer>
  `;
}
