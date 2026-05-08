class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="utility">
        <div class="shell">
          <span><span class="pulse"></span>Now accepting proposals · Read the call below</span>
          <span>501(c)(3) · State of Ohio</span>
        </div>
      </div>
      <nav class="nav">
        <div class="shell">
          <a class="brand" href="/">
            <span class="brand-mark">G</span>
            <span class="brand-name">Give-A-Hand<span>.tech</span></span>
          </a>
          <div class="nav-links">
            <a href="#mission">Mission</a>
            <a href="#services">Services</a>
            <a href="#cfp">Call for Proposals</a>
            <a href="#videos">Videos</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          <a class="nav-cta" href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-5866">Donate</a>
          <button class="nav-burger" aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
