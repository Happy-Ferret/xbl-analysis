class XblDialog extends XblRootElement {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    console.log(this, "connected");

    this.innerHTML = `<vbox class="box-inherit dialog-content-box" flex="1">
<children>
</children>
</vbox>
<hbox class="dialog-button-box" anonid="buttons" inherits="pack=buttonpack,align=buttonalign,dir=buttondir,orient=buttonorient">
<button dlgtype="disclosure" class="dialog-button" hidden="true">
</button>
<button dlgtype="help" class="dialog-button" hidden="true">
</button>
<button dlgtype="extra2" class="dialog-button" hidden="true">
</button>
<button dlgtype="extra1" class="dialog-button" hidden="true">
</button>
<spacer anonid="spacer" flex="1">
</spacer>
<button dlgtype="cancel" class="dialog-button">
</button>
<button dlgtype="accept" class="dialog-button" inherits="disabled=buttondisabledaccept">
</button>
<button dlgtype="extra2" class="dialog-button" hidden="true">
</button>
<spacer anonid="spacer" flex="1" hidden="true">
</spacer>
<button dlgtype="accept" class="dialog-button" inherits="disabled=buttondisabledaccept">
</button>
<button dlgtype="extra1" class="dialog-button" hidden="true">
</button>
<button dlgtype="cancel" class="dialog-button">
</button>
<button dlgtype="help" class="dialog-button" hidden="true">
</button>
<button dlgtype="disclosure" class="dialog-button" hidden="true">
</button>
</hbox>`;
    let comment = document.createComment("Creating xbl-dialog");
    this.prepend(comment);
  }
  disconnectedCallback() {}

  set buttons(val) {
    this._configureButtons(val);
    return val;
  }

  get buttons() {
    return this.getAttribute("buttons");
  }
  acceptDialog() {
    return this._doButtonCommand("accept");
  }
  cancelDialog() {
    return this._doButtonCommand("cancel");
  }
  getButton(aDlgType) {
    return this._buttons[aDlgType];
  }
  moveToAlertPosition() {
    // hack. we need this so the window has something like its final size
    if (window.outerWidth == 1) {
      dump(
        "Trying to position a sizeless window; caller should have called sizeToContent() or sizeTo(). See bug 75649.\n"
      );
      sizeToContent();
    }

    if (opener) {
      var xOffset = (opener.outerWidth - window.outerWidth) / 2;
      var yOffset = opener.outerHeight / 5;

      var newX = opener.screenX + xOffset;
      var newY = opener.screenY + yOffset;
    } else {
      newX = (screen.availWidth - window.outerWidth) / 2;
      newY = (screen.availHeight - window.outerHeight) / 2;
    }

    // ensure the window is fully onscreen (if smaller than the screen)
    if (newX < screen.availLeft) newX = screen.availLeft + 20;
    if (newX + window.outerWidth > screen.availLeft + screen.availWidth)
      newX = screen.availLeft + screen.availWidth - window.outerWidth - 20;

    if (newY < screen.availTop) newY = screen.availTop + 20;
    if (newY + window.outerHeight > screen.availTop + screen.availHeight)
      newY = screen.availTop + screen.availHeight - window.outerHeight - 60;

    window.moveTo(newX, newY);
  }
  centerWindowOnScreen() {
    var xOffset = screen.availWidth / 2 - window.outerWidth / 2;
    var yOffset = screen.availHeight / 2 - window.outerHeight / 2;

    xOffset = xOffset > 0 ? xOffset : 0;
    yOffset = yOffset > 0 ? yOffset : 0;
    window.moveTo(xOffset, yOffset);
  }
  postLoadInit(aEvent) {
    function focusInit() {
      const dialog = document.documentElement;
      const defaultButton = dialog.getButton(dialog.defaultButton);
      // give focus to the first focusable element in the dialog
      if (!document.commandDispatcher.focusedElement) {
        document.commandDispatcher.advanceFocusIntoSubtree(dialog);

        var focusedElt = document.commandDispatcher.focusedElement;
        if (focusedElt) {
          var initialFocusedElt = focusedElt;
          while (
            focusedElt.localName == "tab" ||
            focusedElt.getAttribute("noinitialfocus") == "true"
          ) {
            document.commandDispatcher.advanceFocusIntoSubtree(focusedElt);
            focusedElt = document.commandDispatcher.focusedElement;
            if (focusedElt == initialFocusedElt) break;
          }

          if (initialFocusedElt.localName == "tab") {
            if (focusedElt.hasAttribute("dlgtype")) {
              // We don't want to focus on anonymous OK, Cancel, etc. buttons,
              // so return focus to the tab itself
              initialFocusedElt.focus();
            }
          } else if (
            !/Mac/.test(navigator.platform) &&
            focusedElt.hasAttribute("dlgtype") &&
            focusedElt != defaultButton
          ) {
            defaultButton.focus();
          }
        }
      }

      try {
        if (defaultButton) window.notifyDefaultButtonLoaded(defaultButton);
      } catch (e) {}
    }

    // Give focus after onload completes, see bug 103197.
    setTimeout(focusInit, 0);
  }
  _configureButtons(aButtons) {
    // by default, get all the anonymous button elements
    var buttons = {};
    this._buttons = buttons;
    buttons.accept = document.getAnonymousElementByAttribute(
      this,
      "dlgtype",
      "accept"
    );
    buttons.cancel = document.getAnonymousElementByAttribute(
      this,
      "dlgtype",
      "cancel"
    );
    buttons.extra1 = document.getAnonymousElementByAttribute(
      this,
      "dlgtype",
      "extra1"
    );
    buttons.extra2 = document.getAnonymousElementByAttribute(
      this,
      "dlgtype",
      "extra2"
    );
    buttons.help = document.getAnonymousElementByAttribute(
      this,
      "dlgtype",
      "help"
    );
    buttons.disclosure = document.getAnonymousElementByAttribute(
      this,
      "dlgtype",
      "disclosure"
    );

    // look for any overriding explicit button elements
    var exBtns = this.getElementsByAttribute("dlgtype", "*");
    var dlgtype;
    var i;
    for (i = 0; i < exBtns.length; ++i) {
      dlgtype = exBtns[i].getAttribute("dlgtype");
      buttons[dlgtype].hidden = true; // hide the anonymous button
      buttons[dlgtype] = exBtns[i];
    }

    // add the label and oncommand handler to each button
    for (dlgtype in buttons) {
      var button = buttons[dlgtype];
      button.addEventListener("command", this._handleButtonCommand, true);

      // don't override custom labels with pre-defined labels on explicit buttons
      if (!button.hasAttribute("label")) {
        // dialog attributes override the default labels in dialog.properties
        if (this.hasAttribute("buttonlabel" + dlgtype)) {
          button.setAttribute(
            "label",
            this.getAttribute("buttonlabel" + dlgtype)
          );
          if (this.hasAttribute("buttonaccesskey" + dlgtype))
            button.setAttribute(
              "accesskey",
              this.getAttribute("buttonaccesskey" + dlgtype)
            );
        } else if (dlgtype != "extra1" && dlgtype != "extra2") {
          button.setAttribute(
            "label",
            this.mStrBundle.GetStringFromName("button-" + dlgtype)
          );
          var accessKey = this.mStrBundle.GetStringFromName(
            "accesskey-" + dlgtype
          );
          if (accessKey) button.setAttribute("accesskey", accessKey);
        }
      }
      // allow specifying alternate icons in the dialog header
      if (!button.hasAttribute("icon")) {
        // if there's an icon specified, use that
        if (this.hasAttribute("buttonicon" + dlgtype))
          button.setAttribute(
            "icon",
            this.getAttribute("buttonicon" + dlgtype)
          );
        else
          // otherwise set defaults
          switch (dlgtype) {
            case "accept":
              button.setAttribute("icon", "accept");
              break;
            case "cancel":
              button.setAttribute("icon", "cancel");
              break;
            case "disclosure":
              button.setAttribute("icon", "properties");
              break;
            case "help":
              button.setAttribute("icon", "help");
              break;
            default:
              break;
          }
      }
    }

    // ensure that hitting enter triggers the default button command
    this.defaultButton = this.defaultButton;

    // if there is a special button configuration, use it
    if (aButtons) {
      // expect a comma delimited list of dlgtype values
      var list = aButtons.split(",");

      // mark shown dlgtypes as true
      var shown = {
        accept: false,
        cancel: false,
        help: false,
        disclosure: false,
        extra1: false,
        extra2: false
      };
      for (i = 0; i < list.length; ++i) shown[list[i].replace(/ /g, "")] = true;

      // hide/show the buttons we want
      for (dlgtype in buttons) buttons[dlgtype].hidden = !shown[dlgtype];

      // show the spacer on Windows only when the extra2 button is present
      if (/Win/.test(navigator.platform)) {
        var spacer = document.getAnonymousElementByAttribute(
          this,
          "anonid",
          "spacer"
        );
        spacer.removeAttribute("hidden");
        spacer.setAttribute("flex", shown["extra2"] ? "1" : "0");
      }
    }
  }
  _setDefaultButton(aNewDefault) {
    // remove the default attribute from the previous default button, if any
    var oldDefaultButton = this.getButton(this.defaultButton);
    if (oldDefaultButton) oldDefaultButton.removeAttribute("default");

    var newDefaultButton = this.getButton(aNewDefault);
    if (newDefaultButton) {
      this.setAttribute("defaultButton", aNewDefault);
      newDefaultButton.setAttribute("default", "true");
    } else {
      this.setAttribute("defaultButton", "none");
      if (aNewDefault != "none")
        dump(
          "invalid new default button: " + aNewDefault + ", assuming: none\n"
        );
    }
  }
  _handleButtonCommand(aEvent) {
    return document.documentElement._doButtonCommand(
      aEvent.target.getAttribute("dlgtype")
    );
  }
  _doButtonCommand(aDlgType) {
    var button = this.getButton(aDlgType);
    if (!button.disabled) {
      var noCancel = this._fireButtonEvent(aDlgType);
      if (noCancel) {
        if (aDlgType == "accept" || aDlgType == "cancel") {
          var closingEvent = new CustomEvent("dialogclosing", {
            bubbles: true,
            detail: { button: aDlgType }
          });
          this.dispatchEvent(closingEvent);
          window.close();
        }
      }
      return noCancel;
    }
    return true;
  }
  _fireButtonEvent(aDlgType) {
    var event = document.createEvent("Events");
    event.initEvent("dialog" + aDlgType, true, true);

    // handle dom event handlers
    var noCancel = this.dispatchEvent(event);

    // handle any xml attribute event handlers
    var handler = this.getAttribute("ondialog" + aDlgType);
    if (handler != "") {
      var fn = new Function("event", handler);
      var returned = fn(event);
      if (returned == false) noCancel = false;
    }

    return noCancel;
  }
  _hitEnter(evt) {
    if (evt.defaultPrevented) return;

    var btn = this.getButton(this.defaultButton);
    if (btn) this._doButtonCommand(this.defaultButton);
  }
}
customElements.define("xbl-dialog", XblDialog);