class CustomFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="footer" id="contact">
        <div class="shell">
          <div class="footer-grid">
            <div>
              <h3>Questions? <em>Let&rsquo;s&nbsp;talk.</em></h3>
              <p style="color: oklch(75% 0 0); margin-top: 18px; max-width: 38ch;">Whether you have an abandoned device, decades of experience, or just want to help, we&rsquo;d love to hear from you.</p>
              <a class="btn btn-primary footer-cta" href="mailto:support@give-a-hand.tech" style="background: var(--accent);">
                support@give-a-hand.tech →
              </a>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Site</div>
              <ul>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#cfp">Call for Proposals</a></li>
                <li><a href="#videos">Videos</a></li>
                <li><a href="#team">Team</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Get involved</div>
              <ul>
                <li><a href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-5866">Donate</a></li>
                <li><a href="mailto:support@give-a-hand.tech">Volunteer</a></li>
                <li><a href="mailto:support@give-a-hand.tech">Partner with us</a></li>
                <li><a href="components/GAHt Application Guide - v4 5-05-2026.pdf">Submit a proposal</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${year} Give-A-Hand.tech</span>
            <span>An adoptive home for abandoned neural devices</span>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
