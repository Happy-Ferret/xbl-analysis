class FirefoxListitemIconic extends FirefoxListitem {
  connectedCallback() {
    super.connectedCallback();
    this.innerHTML = `
      <children>
        <xul:listcell class="listcell-iconic" inherits="label,image,crop,disabled,flexlabel"></xul:listcell>
      </children>
    `;
  }
}
customElements.define("firefox-listitem-iconic", FirefoxListitemIconic);
