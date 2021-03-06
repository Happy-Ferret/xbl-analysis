class FirefoxCustomizableuiToolbarMenubarAutohide extends FirefoxToolbar {
  connectedCallback() {
    super.connectedCallback();

    Object.defineProperty(this, "_inactiveTimeout", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._inactiveTimeout;
        return (this._inactiveTimeout = null);
      },
      set(val) {
        delete this._inactiveTimeout;
        return (this._inactiveTimeout = val);
      }
    });
    Object.defineProperty(this, "_contextMenuListener", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._contextMenuListener;
        return (this._contextMenuListener = {
          toolbar: this,
          contextMenu: null,

          get active() {
            return !!this.contextMenu;
          },

          init(event) {
            let node = event.target;
            while (node != this.toolbar) {
              if (node.localName == "menupopup") return;
              node = node.parentNode;
            }

            let contextMenuId = this.toolbar.getAttribute("context");
            if (!contextMenuId) return;

            this.contextMenu = document.getElementById(contextMenuId);
            if (!this.contextMenu) return;

            this.contextMenu.addEventListener("popupshown", this);
            this.contextMenu.addEventListener("popuphiding", this);
            this.toolbar.addEventListener("mousemove", this);
          },
          handleEvent(event) {
            switch (event.type) {
              case "popupshown":
                this.toolbar.removeEventListener("mousemove", this);
                break;
              case "popuphiding":
              case "mousemove":
                this.toolbar._setInactiveAsync();
                this.toolbar.removeEventListener("mousemove", this);
                this.contextMenu.removeEventListener("popuphiding", this);
                this.contextMenu.removeEventListener("popupshown", this);
                this.contextMenu = null;
                break;
            }
          }
        });
      },
      set(val) {
        delete this._contextMenuListener;
        return (this._contextMenuListener = val);
      }
    });

    this._setInactive();

    this.addEventListener("DOMMenuBarActive", event => {
      this._setActive();
    });

    this.addEventListener("popupshowing", event => {
      this._setActive();
    });

    this.addEventListener("mousedown", event => {
      this._contextMenuListener.init(event);
    });

    this.addEventListener("DOMMenuBarInactive", event => {
      if (!this._contextMenuListener.active) this._setInactiveAsync();
    });
  }
  disconnectedCallback() {
    this._setActive();
  }
  _setInactive() {
    this.setAttribute("inactive", "true");
  }
  _setInactiveAsync() {
    this._inactiveTimeout = setTimeout(
      function(self) {
        if (self.getAttribute("autohide") == "true") {
          self._inactiveTimeout = null;
          self._setInactive();
        }
      },
      0,
      this
    );
  }
  _setActive() {
    if (this._inactiveTimeout) {
      clearTimeout(this._inactiveTimeout);
      this._inactiveTimeout = null;
    }
    this.removeAttribute("inactive");
  }
}
customElements.define(
  "firefox-customizableui-toolbar-menubar-autohide",
  FirefoxCustomizableuiToolbarMenubarAutohide
);
