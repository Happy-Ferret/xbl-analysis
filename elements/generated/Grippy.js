class FirefoxGrippy extends XULElement {
  connectedCallback() {
    this.addEventListener("command", event => {
      var splitter = this.parentNode;
      if (splitter) {
        var state = splitter.getAttribute("state");
        if (state == "collapsed") splitter.setAttribute("state", "open");
        else splitter.setAttribute("state", "collapsed");
      }
    });
  }
}
customElements.define("firefox-grippy", FirefoxGrippy);
