
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed w-full z-50 transition-all duration-300 bg-gradient-to-r from-blue-900 to-purple-800 text-white shadow-lg">
<div class="container mx-auto px-6 py-4">
          <div class="flex justify-between items-center">
            <a href="/" class="text-2xl font-bold">Give-A-Hand.Tech</a>
            <div class="hidden md:flex space-x-8">
              <a href="#mission" class="hover:text-blue-200 transition">Mission</a>
              <a href="#services" class="hover:text-blue-200 transition">Services</a>
              <a href="#team" class="hover:text-blue-200 transition">Team</a>
              <a href="#footer" class="hover:text-blue-200 transition">Contact</a>
              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-5866" class="hover:text-blue-200 transition">Donate</a>
            </div>
            <button class="md:hidden focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    `;
    
    // Add scrolling behavior
    let lastScroll = 0;
    const navbar = this.querySelector('nav');
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        navbar.classList.remove('scrolled-down');
        navbar.classList.remove('scrolled-up');
        return;
      }
      
      if (currentScroll > lastScroll && !navbar.classList.contains('scrolled-down')) {
        // Scroll down
        navbar.classList.remove('scrolled-up');
        navbar.classList.add('scrolled-down');
      } else if (currentScroll < lastScroll && navbar.classList.contains('scrolled-down')) {
        // Scroll up
        navbar.classList.remove('scrolled-down');
        navbar.classList.add('scrolled-up');
      }
      
      lastScroll = currentScroll;
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);