
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-6 text-center">
          <p class="mb-4">&copy; ${new Date().getFullYear()} Give-A-Hand.tech</p>
          <div class="flex justify-center space-x-6">
            <a href="/" class="text-gray-300 hover:text-white">Home</a>
            <a href="#services" class="text-gray-300 hover:text-white">Services</a>
            <a href="#subscribe" class="text-gray-300 hover:text-white">Contact</a>
</div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);