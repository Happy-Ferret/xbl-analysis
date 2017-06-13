class XblStatusbarpanelMenuIconic extends XblStatusbarpanel {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    console.log(this, "connected");

    this.innerHTML = `<image class="statusbarpanel-icon" inherits="src,src=image">
</image>
<children>
</children>`;
    let comment = document.createComment(
      "Creating xbl-statusbarpanel-menu-iconic"
    );
    this.prepend(comment);
  }
  disconnectedCallback() {}
}
customElements.define(
  "xbl-statusbarpanel-menu-iconic",
  XblStatusbarpanelMenuIconic
);