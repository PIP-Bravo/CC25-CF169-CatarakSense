class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <nav class="footer-menu">
            <a href="index.html">Home</a>
            <a href="deteksi.html">Deteksi</a>
            <a href="kontak.html">Kontak</a>
          </nav>
          <p class="footer-bottom-text">
            CC25-CF169-CatarakSense &#169; 2025 | Coding Camp 2025 powered by DBS Foundation
          </p>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);
