class FirefoxTreecolImage extends FirefoxTreecolBase {
  connectedCallback() {
    super.connectedCallback();
    this.innerHTML = `
      <xul:image class="treecol-icon" inherits="src"></xul:image>
    `;
  }
}
customElements.define("firefox-treecol-image", FirefoxTreecolImage);
