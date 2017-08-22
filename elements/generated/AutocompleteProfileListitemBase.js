class FirefoxAutocompleteProfileListitemBase extends FirefoxRichlistitem {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    console.log(this, "connected");

    let comment = document.createComment(
      "Creating firefox-autocomplete-profile-listitem-base"
    );
    this.prepend(comment);

    Object.defineProperty(this, "selectedByMouseOver", {
      configurable: true,
      enumerable: true,
      get() {
        delete this.selectedByMouseOver;
        return (this.selectedByMouseOver = true);
      },
      set(val) {
        delete this.selectedByMouseOver;
        return (this.selectedByMouseOver = val);
      }
    });

    try {
      undefined;
    } catch (e) {}
  }
  disconnectedCallback() {}

  get _stringBundle() {
    /* global Services */
    if (!this.__stringBundle) {
      this.__stringBundle = Services.strings.createBundle(
        "chrome://formautofill/locale/formautofill.properties"
      );
    }
    return this.__stringBundle;
  }
  _cleanup() {
    this.removeAttribute("formautofillattached");
    if (this._itemBox) {
      this._itemBox.removeAttribute("size");
    }
  }
  _onChanged() {}
  _onOverflow() {}
  _onUnderflow() {}
  handleOverUnderflow() {}
  _adjustAutofillItemLayout() {
    let outerBoxRect = this.parentNode.getBoundingClientRect();

    // Make item fit in popup as XUL box could not constrain
    // item's width
    this._itemBox.style.width = outerBoxRect.width + "px";
    // Use two-lines layout when width is smaller than 150px or
    // 185px if an image precedes the label.
    let oneLineMinRequiredWidth = this.getAttribute("ac-image") ? 185 : 150;

    if (outerBoxRect.width <= oneLineMinRequiredWidth) {
      this._itemBox.setAttribute("size", "small");
    } else {
      this._itemBox.removeAttribute("size");
    }
  }
}
customElements.define(
  "firefox-autocomplete-profile-listitem-base",
  FirefoxAutocompleteProfileListitemBase
);
