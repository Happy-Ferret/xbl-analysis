class XblWizardpage extends XblWizardBase {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    console.log(this, "connected");

    let comment = document.createComment("Creating xbl-wizardpage");
    this.prepend(comment);
  }
  disconnectedCallback() {}

  set pageid(val) {
    this.setAttribute("pageid", val);
  }

  get pageid() {
    return this.getAttribute("pageid");
  }

  set next(val) {
    this.setAttribute("next", val);
    this.parentNode._accessMethod = "random";
    return val;
  }

  get next() {
    return this.getAttribute("next");
  }
}
customElements.define("xbl-wizardpage", XblWizardpage);