
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div class="container mx-auto px-6">
          <div class="py-12 text-center">
            <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
            <p class="mb-8 max-w-2xl mx-auto">Send us a message for additional information or questions about the foundation.</p>
            <div class="max-w-md mx-auto">
              <a href="mailto:support@give-a-hand.tech" class="inline-block bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition duration-300 shadow">Email</a>
            </div>
          </div>
          <div class="border-t border-navy-700 pt-6 pb-6 text-center">
            <p class="mb-3 text-sm">&copy; ${new Date().getFullYear()} Give-A-Hand.tech</p>
</div>
        </div>
      </footer>
`;
  }
}

customElements.define('custom-footer', CustomFooter);