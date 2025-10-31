
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white shadow-md py-4 px-6 fixed w-full z-50">
        <div class="container mx-auto flex justify-between items-center">
          <a href="/" class="text-2xl font-bold text-blue-600">
            Give-A-Hand<span class="text-xs text-gray-500">.tech</span>
          </a>
          <div class="flex space-x-6">
            <a href="/" class="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#services" class="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#subscribe" class="text-gray-700 hover:text-blue-600">Contact</a>
</div>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);