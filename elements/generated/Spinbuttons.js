class FirefoxSpinbuttons extends FirefoxBasecontrol {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    console.log(this, "connected");

    this.innerHTML = `<vbox class="spinbuttons-box" flex="1">
<button anonid="increaseButton" type="repeat" flex="1" class="spinbuttons-button spinbuttons-up" inherits="disabled,disabled=increasedisabled">
</button>
<button anonid="decreaseButton" type="repeat" flex="1" class="spinbuttons-button spinbuttons-down" inherits="disabled,disabled=decreasedisabled">
</button>
</vbox>`;
    let comment = document.createComment("Creating firefox-spinbuttons");
    this.prepend(comment);
  }
  disconnectedCallback() {}

  get _increaseButton() {
    return document.getAnonymousElementByAttribute(
      this,
      "anonid",
      "increaseButton"
    );
  }

  get _decreaseButton() {
    return document.getAnonymousElementByAttribute(
      this,
      "anonid",
      "decreaseButton"
    );
  }

  set increaseDisabled(val) {
    if (val) this._increaseButton.setAttribute("disabled", "true");
    else this._increaseButton.removeAttribute("disabled");
    return val;
  }

  get increaseDisabled() {
    return this._increaseButton.getAttribute("disabled") == "true";
  }

  set decreaseDisabled(val) {
    if (val) this._decreaseButton.setAttribute("disabled", "true");
    else this._decreaseButton.removeAttribute("disabled");
    return val;
  }

  get decreaseDisabled() {
    return this._decreaseButton.getAttribute("disabled") == "true";
  }
}
customElements.define("firefox-spinbuttons", FirefoxSpinbuttons);
