class FirefoxSearchOneOffs extends XULElement {
  connectedCallback() {
    this.innerHTML = `
      <xul:deck anonid="search-panel-one-offs-header" selectedIndex="0" class="search-panel-header search-panel-current-input">
        <xul:label anonid="searchbar-oneoffheader-search" value="FROM-DTD-searchWithHeader-label"></xul:label>
        <xul:hbox anonid="search-panel-searchforwith" class="search-panel-current-input">
          <xul:label anonid="searchbar-oneoffheader-before" value="FROM-DTD-searchFor-label"></xul:label>
          <xul:label anonid="searchbar-oneoffheader-searchtext" class="search-panel-input-value" flex="1" crop="end"></xul:label>
          <xul:label anonid="searchbar-oneoffheader-after" flex="10000" value="FROM-DTD-searchWith-label"></xul:label>
        </xul:hbox>
        <xul:hbox anonid="search-panel-searchonengine" class="search-panel-current-input">
          <xul:label anonid="searchbar-oneoffheader-beforeengine" value="FROM-DTD-search-label"></xul:label>
          <xul:label anonid="searchbar-oneoffheader-engine" class="search-panel-input-value" flex="1" crop="end"></xul:label>
          <xul:label anonid="searchbar-oneoffheader-afterengine" flex="10000" value="FROM-DTD-searchAfter-label"></xul:label>
        </xul:hbox>
      </xul:deck>
      <xul:description anonid="search-panel-one-offs" role="group" class="search-panel-one-offs" inherits="compact">
        <xul:button anonid="search-settings-compact" oncommand="showSettings();" class="searchbar-engine-one-off-item search-setting-button-compact" tooltiptext="FROM-DTD-changeSearchSettings-tooltip" inherits="compact"></xul:button>
      </xul:description>
      <xul:vbox anonid="add-engines" class="search-add-engines"></xul:vbox>
      <xul:button anonid="search-settings" oncommand="showSettings();" class="search-setting-button search-panel-header" label="FROM-DTD-changeSearchSettings-button" inherits="compact"></xul:button>
      <xul:menupopup anonid="search-one-offs-context-menu">
        <xul:menuitem anonid="search-one-offs-context-open-in-new-tab" label="FROM-DTD-searchInNewTab-label" accesskey="FROM-DTD-searchInNewTab-accesskey"></xul:menuitem>
        <xul:menuitem anonid="search-one-offs-context-set-default" label="FROM-DTD-searchSetAsDefault-label" accesskey="FROM-DTD-searchSetAsDefault-accesskey"></xul:menuitem>
      </xul:menupopup>
    `;
    Object.defineProperty(this, "_popup", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._popup;
        return (this._popup = null);
      },
      set(val) {
        delete this._popup;
        return (this._popup = val);
      }
    });
    Object.defineProperty(this, "_textbox", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._textbox;
        return (this._textbox = null);
      },
      set(val) {
        delete this._textbox;
        return (this._textbox = val);
      }
    });
    Object.defineProperty(this, "_textboxWidth", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._textboxWidth;
        return (this._textboxWidth = 0);
      },
      set(val) {
        delete this._textboxWidth;
        return (this._textboxWidth = val);
      }
    });
    Object.defineProperty(this, "telemetryOrigin", {
      configurable: true,
      enumerable: true,
      get() {
        delete this.telemetryOrigin;
        return (this.telemetryOrigin = "");
      },
      set(val) {
        delete this.telemetryOrigin;
        return (this.telemetryOrigin = val);
      }
    });
    Object.defineProperty(this, "_query", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._query;
        return (this._query = "");
      },
      set(val) {
        delete this._query;
        return (this._query = val);
      }
    });
    Object.defineProperty(this, "_selectedButton", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._selectedButton;
        return (this._selectedButton = null);
      },
      set(val) {
        delete this._selectedButton;
        return (this._selectedButton = val);
      }
    });
    Object.defineProperty(this, "buttons", {
      configurable: true,
      enumerable: true,
      get() {
        delete this.buttons;
        return (this.buttons = document.getAnonymousElementByAttribute(
          this,
          "anonid",
          "search-panel-one-offs"
        ));
      }
    });
    Object.defineProperty(this, "header", {
      configurable: true,
      enumerable: true,
      get() {
        delete this.header;
        return (this.header = document.getAnonymousElementByAttribute(
          this,
          "anonid",
          "search-panel-one-offs-header"
        ));
      }
    });
    Object.defineProperty(this, "addEngines", {
      configurable: true,
      enumerable: true,
      get() {
        delete this.addEngines;
        return (this.addEngines = document.getAnonymousElementByAttribute(
          this,
          "anonid",
          "add-engines"
        ));
      }
    });
    Object.defineProperty(this, "settingsButton", {
      configurable: true,
      enumerable: true,
      get() {
        delete this.settingsButton;
        return (this.settingsButton = document.getAnonymousElementByAttribute(
          this,
          "anonid",
          "search-settings"
        ));
      }
    });
    Object.defineProperty(this, "settingsButtonCompact", {
      configurable: true,
      enumerable: true,
      get() {
        delete this.settingsButtonCompact;
        return (this.settingsButtonCompact = document.getAnonymousElementByAttribute(
          this,
          "anonid",
          "search-settings-compact"
        ));
      }
    });
    Object.defineProperty(this, "_bundle", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._bundle;
        return (this._bundle = null);
      },
      set(val) {
        delete this._bundle;
        return (this._bundle = val);
      }
    });
    Object.defineProperty(this, "_contextEngine", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._contextEngine;
        return (this._contextEngine = null);
      },
      set(val) {
        delete this._contextEngine;
        return (this._contextEngine = val);
      }
    });
    Object.defineProperty(this, "_engines", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._engines;
        return (this._engines = null);
      },
      set(val) {
        delete this._engines;
        return (this._engines = val);
      }
    });
    Object.defineProperty(this, "_addEngineMenuThreshold", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._addEngineMenuThreshold;
        return (this._addEngineMenuThreshold = 5);
      },
      set(val) {
        delete this._addEngineMenuThreshold;
        return (this._addEngineMenuThreshold = val);
      }
    });
    Object.defineProperty(this, "_addEngineMenuTimeoutMs", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._addEngineMenuTimeoutMs;
        return (this._addEngineMenuTimeoutMs = 200);
      },
      set(val) {
        delete this._addEngineMenuTimeoutMs;
        return (this._addEngineMenuTimeoutMs = val);
      }
    });
    Object.defineProperty(this, "_addEngineMenuTimeout", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._addEngineMenuTimeout;
        return (this._addEngineMenuTimeout = null);
      },
      set(val) {
        delete this._addEngineMenuTimeout;
        return (this._addEngineMenuTimeout = val);
      }
    });
    Object.defineProperty(this, "_addEngineMenuShouldBeOpen", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._addEngineMenuShouldBeOpen;
        return (this._addEngineMenuShouldBeOpen = false);
      },
      set(val) {
        delete this._addEngineMenuShouldBeOpen;
        return (this._addEngineMenuShouldBeOpen = val);
      }
    });

    // Prevent popup events from the context menu from reaching the autocomplete
    // binding (or other listeners).
    let menu = document.getAnonymousElementByAttribute(
      this,
      "anonid",
      "search-one-offs-context-menu"
    );
    let listener = aEvent => aEvent.stopPropagation();
    menu.addEventListener("popupshowing", listener);
    menu.addEventListener("popuphiding", listener);
    menu.addEventListener("popupshown", aEvent => {
      this._ignoreMouseEvents = true;
      aEvent.stopPropagation();
    });
    menu.addEventListener("popuphidden", aEvent => {
      this._ignoreMouseEvents = false;
      aEvent.stopPropagation();
    });

    // Add weak referenced observers to invalidate our cached list of engines.
    Services.prefs.addObserver("browser.search.hiddenOneOffs", this, true);
    Services.obs.addObserver(this, "browser-search-engine-modified", true);

    // Rebuild the buttons when the theme changes.  See bug 1357800 for
    // details.  Summary: On Linux, switching between themes can cause a row
    // of buttons to disappear.
    Services.obs.addObserver(this, "lightweight-theme-changed", true);

    this.addEventListener("mousedown", event => {
      let target = event.originalTarget;
      if (target.getAttribute("anonid") == "addengine-menu-button") {
        return;
      }
      // Required to receive click events from the buttons on Linux.
      event.preventDefault();
    });

    this.addEventListener("mousemove", event => {
      let target = event.originalTarget;

      // Handle mouseover on the add-engine menu button and its popup items.
      if (
        target.getAttribute("anonid") == "addengine-menu-button" ||
        (target.localName == "menuitem" &&
          target.classList.contains("addengine-item"))
      ) {
        let menuButton = document.getAnonymousElementByAttribute(
          this,
          "anonid",
          "addengine-menu-button"
        );
        this._updateStateForButton(menuButton);
        this._addEngineMenuShouldBeOpen = true;
        this._resetAddEngineMenuTimeout();
        return;
      }

      if (target.localName != "button") return;

      // Ignore mouse events when the context menu is open.
      if (this._ignoreMouseEvents) return;

      let isOneOff =
        target.classList.contains("searchbar-engine-one-off-item") &&
        !target.classList.contains("dummy");
      if (
        isOneOff ||
        target.classList.contains("addengine-item") ||
        target.classList.contains("search-setting-button")
      ) {
        this._updateStateForButton(target);
      }
    });

    this.addEventListener("mouseout", event => {
      let target = event.originalTarget;

      // Handle mouseout on the add-engine menu button and its popup items.
      if (
        target.getAttribute("anonid") == "addengine-menu-button" ||
        (target.localName == "menuitem" &&
          target.classList.contains("addengine-item"))
      ) {
        this._updateStateForButton(null);
        this._addEngineMenuShouldBeOpen = false;
        this._resetAddEngineMenuTimeout();
        return;
      }

      if (target.localName != "button") {
        return;
      }

      // Don't update the mouseover state if the context menu is open.
      if (this._ignoreMouseEvents) return;

      this._updateStateForButton(null);
    });

    this.addEventListener("click", event => {
      if (event.button == 2) return; // ignore right clicks.

      let button = event.originalTarget;
      let engine = button.engine;

      if (!engine) return;

      // Select the clicked button so that consumers can easily tell which
      // button was acted on.
      this.selectedButton = button;
      this.handleSearchCommand(event, engine);
    });

    this.addEventListener("command", event => {
      let target = event.originalTarget;
      if (target.classList.contains("addengine-item")) {
        // On success, hide the panel and tell event listeners to reshow it to
        // show the new engine.
        let installCallback = {
          onSuccess: engine => {
            this._rebuild();
          },
          onError(errorCode) {
            if (
              errorCode != Ci.nsISearchInstallCallback.ERROR_DUPLICATE_ENGINE
            ) {
              // Download error is shown by the search service
              return;
            }
            const kSearchBundleURI =
              "chrome://global/locale/search/search.properties";
            let searchBundle = Services.strings.createBundle(kSearchBundleURI);
            let brandBundle = document.getElementById("bundle_brand");
            let brandName = brandBundle.getString("brandShortName");
            let title = searchBundle.GetStringFromName(
              "error_invalid_engine_title"
            );
            let text = searchBundle.formatStringFromName(
              "error_duplicate_engine_msg",
              [brandName, target.getAttribute("uri")],
              2
            );
            Services.prompt.QueryInterface(Ci.nsIPromptFactory);
            let prompt = Services.prompt.getPrompt(
              gBrowser.contentWindow,
              Ci.nsIPrompt
            );
            prompt.QueryInterface(Ci.nsIWritablePropertyBag2);
            prompt.setPropertyAsBool("allowTabModal", true);
            prompt.alert(title, text);
          }
        };
        Services.search.addEngine(
          target.getAttribute("uri"),
          null,
          target.getAttribute("image"),
          false,
          installCallback
        );
      }
      let anonid = target.getAttribute("anonid");
      if (anonid == "search-one-offs-context-open-in-new-tab") {
        // Select the context-clicked button so that consumers can easily
        // tell which button was acted on.
        this.selectedButton = this._buttonForEngine(this._contextEngine);
        this.handleSearchCommand(event, this._contextEngine, true);
      }
      if (anonid == "search-one-offs-context-set-default") {
        let currentEngine = Services.search.currentEngine;

        if (!this.getAttribute("includecurrentengine")) {
          // Make the target button of the context menu reflect the current
          // search engine first. Doing this as opposed to rebuilding all the
          // one-off buttons avoids flicker.
          let button = this._buttonForEngine(this._contextEngine);
          button.id = this._buttonIDForEngine(currentEngine);
          let uri = "chrome://browser/skin/search-engine-placeholder.png";
          if (currentEngine.iconURI) uri = currentEngine.iconURI.spec;
          button.setAttribute("image", uri);
          button.setAttribute("tooltiptext", currentEngine.name);
          button.engine = currentEngine;
        }

        Services.search.currentEngine = this._contextEngine;
      }
    });

    this.addEventListener("contextmenu", event => {
      let target = event.originalTarget;
      // Prevent the context menu from appearing except on the one off buttons.
      if (
        !target.classList.contains("searchbar-engine-one-off-item") ||
        target.classList.contains("dummy")
      ) {
        event.preventDefault();
        return;
      }
      document
        .getAnonymousElementByAttribute(
          this,
          "anonid",
          "search-one-offs-context-set-default"
        )
        .setAttribute(
          "disabled",
          target.engine == Services.search.currentEngine
        );

      this._contextEngine = target.engine;
    });
  }

  get buttonWidth() {
    return 49;
  }

  set popup(val) {
    let events = ["popupshowing", "popuphidden"];
    if (this._popup) {
      for (let event of events) {
        this._popup.removeEventListener(event, this);
      }
    }
    if (val) {
      for (let event of events) {
        val.addEventListener(event, this);
      }
    }
    this._popup = val;

    // If the popup is already open, rebuild the one-offs now.  The
    // popup may be opening, so check that the state is not closed
    // instead of checking popupOpen.
    if (val && val.state != "closed") {
      this._rebuild();
    }
    return val;
  }

  get popup() {
    return this._popup;
  }

  set textbox(val) {
    if (this._textbox) {
      this._textbox.removeEventListener("input", this);
    }
    if (val) {
      val.addEventListener("input", this);
    }
    return (this._textbox = val);
  }

  get textbox() {
    return this._textbox;
  }

  set query(val) {
    this._query = val;
    if (this.popup && this.popup.popupOpen) {
      this._updateAfterQueryChanged();
    }
    return val;
  }

  get query() {
    return this._query;
  }

  set selectedButton(val) {
    if (val && val.classList.contains("dummy")) {
      // Never select dummy buttons.
      val = null;
    }
    if (this._selectedButton) {
      this._selectedButton.removeAttribute("selected");
    }
    if (val) {
      val.setAttribute("selected", "true");
    }
    this._selectedButton = val;
    this._updateStateForButton(null);
    if (val && !val.engine) {
      // If the button doesn't have an engine, then clear the popup's
      // selection to indicate that pressing Return while the button is
      // selected will do the button's command, not search.
      this.popup.selectedIndex = -1;
    }
    let event = document.createEvent("Events");
    event.initEvent("SelectedOneOffButtonChanged", true, false);
    this.dispatchEvent(event);
    return val;
  }

  get selectedButton() {
    return this._selectedButton;
  }

  set selectedButtonIndex(val) {
    let buttons = this.getSelectableButtons(true);
    this.selectedButton = buttons[val];
    return val;
  }

  get selectedButtonIndex() {
    let buttons = this.getSelectableButtons(true);
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] == this._selectedButton) {
        return i;
      }
    }
    return -1;
  }

  get compact() {
    return this.getAttribute("compact") == "true";
  }

  get bundle() {
    if (!this._bundle) {
      const kBundleURI = "chrome://browser/locale/search.properties";
      this._bundle = Services.strings.createBundle(kBundleURI);
    }
    return this._bundle;
  }

  get engines() {
    if (this._engines) return this._engines;
    let currentEngineNameToIgnore;
    if (!this.getAttribute("includecurrentengine"))
      currentEngineNameToIgnore = Services.search.currentEngine.name;

    let pref = Services.prefs.getStringPref("browser.search.hiddenOneOffs");
    let hiddenList = pref ? pref.split(",") : [];

    this._engines = Services.search.getVisibleEngines().filter(e => {
      let name = e.name;
      return (
        (!currentEngineNameToIgnore || name != currentEngineNameToIgnore) &&
        !hiddenList.includes(name)
      );
    });

    return this._engines;
  }
  handleEvent(event) {
    switch (event.type) {
      case "input":
        // Allow the consumer's input to override its value property with
        // a oneOffSearchQuery property.  That way if the value is not
        // actually what the user typed (e.g., it's autofilled, or it's a
        // mozaction URI), the consumer has some way of providing it.
        this.query = event.target.oneOffSearchQuery || event.target.value;
        break;
      case "popupshowing":
        this._rebuild();
        break;
      case "popuphidden":
        Services.tm.dispatchToMainThread(() => {
          this.selectedButton = null;
          this._contextEngine = null;
        });
        break;
    }
  }
  observe(aEngine, aTopic, aData) {
    // Make sure the engine list is refetched next time it's needed.
    this._engines = null;
  }
  showSettings() {
    BrowserUITelemetry.countSearchSettingsEvent(this.telemetryOrigin);

    openPreferences("paneSearch", { origin: "contentSearch" });

    // If the preference tab was already selected, the panel doesn't
    // close itself automatically.
    this.popup.hidePopup();
  }
  _updateAfterQueryChanged() {
    let headerSearchText = document.getAnonymousElementByAttribute(
      this,
      "anonid",
      "searchbar-oneoffheader-searchtext"
    );
    headerSearchText.setAttribute("value", this.query);
    let groupText;
    let isOneOffSelected =
      this.selectedButton &&
      this.selectedButton.classList.contains("searchbar-engine-one-off-item");
    // Typing de-selects the settings or opensearch buttons at the bottom
    // of the search panel, as typing shows the user intends to search.
    if (this.selectedButton && !isOneOffSelected) this.selectedButton = null;
    if (this.query) {
      groupText =
        headerSearchText.previousSibling.value +
        '"' +
        headerSearchText.value +
        '"' +
        headerSearchText.nextSibling.value;
      if (!isOneOffSelected) this.header.selectedIndex = 1;
    } else {
      let noSearchHeader = document.getAnonymousElementByAttribute(
        this,
        "anonid",
        "searchbar-oneoffheader-search"
      );
      groupText = noSearchHeader.value;
      if (!isOneOffSelected) this.header.selectedIndex = 0;
    }
    this.buttons.setAttribute("aria-label", groupText);
  }
  _rebuild() {
    // Update the 'Search for <keywords> with:" header.
    this._updateAfterQueryChanged();

    // Handle opensearch items. This needs to be done before building the
    // list of one off providers, as that code will return early if all the
    // alternative engines are hidden.
    // Skip this in compact mode, ie. for the urlbar.
    if (!this.compact) this._rebuildAddEngineList();

    // Check if the one-off buttons really need to be rebuilt.
    if (this._textbox) {
      // We can't get a reliable value for the popup width without flushing,
      // but the popup width won't change if the textbox width doesn't.
      let DOMUtils = window
        .QueryInterface(Ci.nsIInterfaceRequestor)
        .getInterface(Ci.nsIDOMWindowUtils);
      let textboxWidth = DOMUtils.getBoundsWithoutFlushing(this._textbox).width;
      // We can return early if neither the list of engines nor the panel
      // width has changed.
      if (this._engines && this._textboxWidth == textboxWidth) {
        return;
      }
      this._textboxWidth = textboxWidth;
    }

    // Finally, build the list of one-off buttons.
    while (this.buttons.firstChild != this.settingsButtonCompact)
      this.buttons.firstChild.remove();
    // Remove the trailing empty text node introduced by the binding's
    // content markup above.
    if (this.settingsButtonCompact.nextSibling)
      this.settingsButtonCompact.nextSibling.remove();

    let engines = this.engines;
    let oneOffCount = engines.length;

    // header is a xul:deck so collapsed doesn't work on it, see bug 589569.
    this.header.hidden = this.buttons.collapsed = !oneOffCount;

    if (!oneOffCount) return;

    let panelWidth = parseInt(this.popup.clientWidth);

    // There's one weird thing to guard against: when layout pixels
    // aren't an integral multiple of device pixels, the last button
    // of each row sometimes gets pushed to the next row, depending on the
    // panel and button widths.
    // This is likely because the clientWidth getter rounds the value, but
    // the panel's border width is not an integer.
    // As a workaround, decrement the width if the scale is not an integer.
    let scale = window
      .QueryInterface(Ci.nsIInterfaceRequestor)
      .getInterface(Ci.nsIDOMWindowUtils).screenPixelsPerCSSPixel;
    if (Math.floor(scale) != scale) {
      --panelWidth;
    }

    // The + 1 is because the last button doesn't have a right border.
    let enginesPerRow = Math.floor((panelWidth + 1) / this.buttonWidth);
    let buttonWidth = Math.floor(panelWidth / enginesPerRow);
    // There will be an emtpy area of:
    //   panelWidth - enginesPerRow * buttonWidth  px
    // at the end of each row.

    // If the <description> tag with the list of search engines doesn't have
    // a fixed height, the panel will be sized incorrectly, causing the bottom
    // of the suggestion <tree> to be hidden.
    if (this.compact) ++oneOffCount;
    let rowCount = Math.ceil(oneOffCount / enginesPerRow);
    let height = rowCount * 33; // 32px per row, 1px border.
    this.buttons.setAttribute("height", height + "px");

    // Ensure we can refer to the settings buttons by ID:
    let origin = this.telemetryOrigin;
    this.settingsButton.id = origin + "-anon-search-settings";
    this.settingsButtonCompact.id = origin + "-anon-search-settings-compact";

    const kXULNS =
      "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

    let dummyItems =
      enginesPerRow - (oneOffCount % enginesPerRow || enginesPerRow);
    for (let i = 0; i < engines.length; ++i) {
      let engine = engines[i];
      let button = document.createElementNS(kXULNS, "button");
      button.id = this._buttonIDForEngine(engine);
      let uri = "chrome://browser/skin/search-engine-placeholder.png";
      if (engine.iconURI) {
        uri = engine.iconURI.spec;
      }
      button.setAttribute("image", uri);
      button.setAttribute("class", "searchbar-engine-one-off-item");
      button.setAttribute("tooltiptext", engine.name);
      button.setAttribute("width", buttonWidth);
      button.engine = engine;

      if ((i + 1) % enginesPerRow == 0) button.classList.add("last-of-row");

      if (i + 1 == engines.length) button.classList.add("last-engine");

      if (i >= oneOffCount + dummyItems - enginesPerRow)
        button.classList.add("last-row");

      this.buttons.insertBefore(button, this.settingsButtonCompact);
    }

    let hasDummyItems = !!dummyItems;
    while (dummyItems) {
      let button = document.createElementNS(kXULNS, "button");
      button.setAttribute(
        "class",
        "searchbar-engine-one-off-item dummy last-row"
      );
      button.setAttribute("width", buttonWidth);

      if (!--dummyItems) button.classList.add("last-of-row");

      this.buttons.insertBefore(button, this.settingsButtonCompact);
    }

    if (this.compact) {
      this.settingsButtonCompact.setAttribute("width", buttonWidth);
      if (rowCount == 1 && hasDummyItems) {
        // When there's only one row, make the compact settings button
        // hug the right edge of the panel.  It may not due to the panel's
        // width not being an integral multiple of the button width.  (See
        // the "There will be an emtpy area" comment above.)  Increase the
        // width of the last dummy item by the remainder.
        let remainder = panelWidth - enginesPerRow * buttonWidth;
        let width = remainder + buttonWidth;
        let lastDummyItem = this.settingsButtonCompact.previousSibling;
        lastDummyItem.setAttribute("width", width);
      }
    }
  }
  _rebuildAddEngineList() {
    let list = this.addEngines;
    while (list.firstChild) {
      list.firstChild.remove();
    }

    // Add a button for each engine that the page in the selected browser
    // offers, except when there are too many offered engines.
    // The popup isn't designed to handle too many (by scrolling for
    // example), so a page could break the popup by offering too many.
    // Instead, add a single menu button with a submenu of all the engines.

    if (!gBrowser.selectedBrowser.engines) {
      return;
    }

    const kXULNS =
      "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

    let engines = gBrowser.selectedBrowser.engines;
    let tooManyEngines = engines.length > this._addEngineMenuThreshold;

    if (tooManyEngines) {
      // Make the top-level menu button.
      let button = document.createElementNS(kXULNS, "toolbarbutton");
      list.appendChild(button);
      button.classList.add("addengine-item", "badged-button");
      button.setAttribute("anonid", "addengine-menu-button");
      button.setAttribute("type", "menu");
      button.setAttribute(
        "label",
        this.bundle.GetStringFromName("cmd_addFoundEngineMenu")
      );
      button.setAttribute("crop", "end");
      button.setAttribute("pack", "start");

      // Set the menu button's image to the image of the first engine.  The
      // offered engines may have differing images, so there's no perfect
      // choice here.
      let engine = engines[0];
      if (engine.icon) {
        button.setAttribute("image", engine.icon);
      }

      // Now make the button's child menupopup.
      list = document.createElementNS(kXULNS, "menupopup");
      button.appendChild(list);
      list.setAttribute("anonid", "addengine-menu");
      list.setAttribute("position", "topright topleft");

      // Events from child menupopups bubble up to the autocomplete binding,
      // which breaks it, so prevent these events from propagating.
      let suppressEventTypes = [
        "popupshowing",
        "popuphiding",
        "popupshown",
        "popuphidden"
      ];
      for (let type of suppressEventTypes) {
        list.addEventListener(type, event => {
          event.stopPropagation();
        });
      }
    }

    // Finally, add the engines to the list.  If there aren't too many
    // engines, the list is the add-engines vbox.  Otherwise it's the
    // menupopup created earlier.  In the latter case, create menuitem
    // elements instead of buttons, because buttons don't get keyboard
    // handling for free inside menupopups.
    let eltType = tooManyEngines ? "menuitem" : "toolbarbutton";
    for (let engine of engines) {
      let button = document.createElementNS(kXULNS, eltType);
      button.classList.add("addengine-item");
      if (!tooManyEngines) {
        button.classList.add("badged-button");
      }
      button.id =
        this.telemetryOrigin +
        "-add-engine-" +
        this._fixUpEngineNameForID(engine.title);
      let label = this.bundle.formatStringFromName(
        "cmd_addFoundEngine",
        [engine.title],
        1
      );
      button.setAttribute("label", label);
      button.setAttribute("crop", "end");
      button.setAttribute("tooltiptext", engine.title + "\n" + engine.uri);
      button.setAttribute("uri", engine.uri);
      button.setAttribute("title", engine.title);
      if (engine.icon) {
        button.setAttribute("image", engine.icon);
      }
      if (tooManyEngines) {
        button.classList.add("menuitem-iconic");
      } else {
        button.setAttribute("pack", "start");
      }
      list.appendChild(button);
    }
  }
  _buttonIDForEngine(engine) {
    return (
      this.telemetryOrigin +
      "-engine-one-off-item-" +
      this._fixUpEngineNameForID(engine.name)
    );
  }
  _fixUpEngineNameForID(name) {
    return name.replace(/ /g, "-");
  }
  _buttonForEngine(engine) {
    return document.getElementById(this._buttonIDForEngine(engine));
  }
  _updateStateForButton(mousedOverButton) {
    let button = mousedOverButton;

    // Ignore dummy buttons.
    if (button && button.classList.contains("dummy")) {
      button = null;
    }

    // If there's no moused-over button, then the one-offs should reflect
    // the selected button, if any.
    button = button || this.selectedButton;

    if (!button) {
      this.header.selectedIndex = this.query ? 1 : 0;
      if (this.textbox) {
        this.textbox.removeAttribute("aria-activedescendant");
      }
      return;
    }

    if (
      button.classList.contains("searchbar-engine-one-off-item") &&
      button.engine
    ) {
      let headerEngineText = document.getAnonymousElementByAttribute(
        this,
        "anonid",
        "searchbar-oneoffheader-engine"
      );
      this.header.selectedIndex = 2;
      headerEngineText.value = button.engine.name;
    } else {
      this.header.selectedIndex = this.query ? 1 : 0;
    }
    if (this.textbox) {
      this.textbox.setAttribute("aria-activedescendant", button.id);
    }
  }
  getSelectableButtons(aIncludeNonEngineButtons) {
    let buttons = [];
    for (
      let oneOff = this.buttons.firstChild;
      oneOff;
      oneOff = oneOff.nextSibling
    ) {
      // oneOff may be a text node since the list xul:description contains
      // whitespace and the compact settings button.  See the markup
      // above.  _rebuild removes text nodes, but it may not have been
      // called yet (because e.g. the popup hasn't been opened yet).
      if (oneOff.nodeType == Node.ELEMENT_NODE) {
        if (
          oneOff.classList.contains("dummy") ||
          oneOff.classList.contains("search-setting-button-compact")
        )
          break;
        buttons.push(oneOff);
      }
    }

    if (aIncludeNonEngineButtons) {
      for (
        let addEngine = this.addEngines.firstChild;
        addEngine;
        addEngine = addEngine.nextSibling
      ) {
        buttons.push(addEngine);
      }
      buttons.push(
        this.compact ? this.settingsButtonCompact : this.settingsButton
      );
    }

    return buttons;
  }
  handleSearchCommand(aEvent, aEngine, aForceNewTab) {
    let where = "current";
    let params;

    // Open ctrl/cmd clicks on one-off buttons in a new background tab.
    if (aForceNewTab) {
      where = "tab";
      if (Services.prefs.getBoolPref("browser.tabs.loadInBackground")) {
        params = {
          inBackground: true
        };
      }
    } else {
      var newTabPref = Services.prefs.getBoolPref("browser.search.openintab");
      if ((aEvent instanceof KeyboardEvent && aEvent.altKey) ^ newTabPref)
        where = "tab";
      if (
        aEvent instanceof MouseEvent &&
        (aEvent.button == 1 || aEvent.getModifierState("Accel"))
      ) {
        where = "tab";
        params = {
          inBackground: true
        };
      }
    }

    this.popup.handleOneOffSearch(aEvent, aEngine, where, params);
  }
  advanceSelection(aForward, aIncludeNonEngineButtons, aWrapAround) {
    let buttons = this.getSelectableButtons(aIncludeNonEngineButtons);
    let index;
    if (this.selectedButton) {
      let inc = aForward ? 1 : -1;
      let oldIndex = buttons.indexOf(this.selectedButton);
      index = (oldIndex + inc + buttons.length) % buttons.length;
      if (
        !aWrapAround &&
        ((aForward && index <= oldIndex) || (!aForward && oldIndex <= index))
      ) {
        // The index has wrapped around, but wrapping around isn't
        // allowed.
        index = -1;
      }
    } else {
      index = aForward ? 0 : buttons.length - 1;
    }
    this.selectedButton = index < 0 ? null : buttons[index];
  }
  handleKeyPress(event, numListItems, allowEmptySelection, textboxUserValue) {
    if (!this.popup) {
      return;
    }
    let handled = this._handleKeyPress(
      event,
      numListItems,
      allowEmptySelection,
      textboxUserValue
    );
    if (handled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  _handleKeyPress(event, numListItems, allowEmptySelection, textboxUserValue) {
    if (
      event.keyCode == KeyEvent.DOM_VK_RIGHT &&
      this.selectedButton &&
      this.selectedButton.getAttribute("anonid") == "addengine-menu-button"
    ) {
      // If the add-engine overflow menu item is selected and the user
      // presses the right arrow key, open the submenu.  Unfortunately
      // handling the left arrow key -- to close the popup -- isn't
      // straightforward.  Once the popup is open, it consumes all key
      // events.  Setting ignorekeys=handled on it doesn't help, since the
      // popup handles all arrow keys.  Setting ignorekeys=true on it does
      // mean that the popup no longer consumes the left arrow key, but
      // then it no longer handles up/down keys to select items in the
      // popup.
      this.selectedButton.open = true;
      return true;
    }

    // Handle the Tab key, but only if non-Shift modifiers aren't also
    // pressed to avoid clobbering other shortcuts (like the Alt+Tab
    // browser tab switcher).  The reason this uses getModifierState() and
    // checks for "AltGraph" is that when you press Shift-Alt-Tab,
    // event.altKey is actually false for some reason, at least on macOS.
    // getModifierState("Alt") is also false, but "AltGraph" is true.
    if (
      event.keyCode == KeyEvent.DOM_VK_TAB &&
      !event.getModifierState("Alt") &&
      !event.getModifierState("AltGraph") &&
      !event.getModifierState("Control") &&
      !event.getModifierState("Meta")
    ) {
      if (
        this.getAttribute("disabletab") == "true" ||
        (event.shiftKey && this.selectedButtonIndex <= 0) ||
        (!event.shiftKey &&
          this.selectedButtonIndex ==
            this.getSelectableButtons(true).length - 1)
      ) {
        this.selectedButton = null;
        return false;
      }
      this.popup.selectedIndex = -1;
      this.advanceSelection(!event.shiftKey, true, false);
      return !!this.selectedButton;
    }

    if (event.keyCode == Ci.nsIDOMKeyEvent.DOM_VK_UP) {
      if (event.altKey) {
        // Keep the currently selected result in the list (if any) as a
        // secondary "alt" selection and move the selection up within the
        // buttons.
        this.advanceSelection(false, false, false);
        return true;
      }
      if (numListItems == 0) {
        this.advanceSelection(false, true, false);
        return true;
      }
      if (this.popup.selectedIndex > 0) {
        // Moving up within the list.  The autocomplete controller should
        // handle this case.  A button may be selected, so null it.
        this.selectedButton = null;
        return false;
      }
      if (this.popup.selectedIndex == 0) {
        // Moving up from the top of the list.
        if (allowEmptySelection) {
          // Let the autocomplete controller remove selection in the list
          // and revert the typed text in the textbox.
          return false;
        }
        // Wrap selection around to the last button.
        if (this.textbox && typeof textboxUserValue == "string") {
          this.textbox.value = textboxUserValue;
        }
        this.advanceSelection(false, true, true);
        return true;
      }
      if (!this.selectedButton) {
        // Moving up from no selection in the list or the buttons, back
        // down to the last button.
        this.advanceSelection(false, true, true);
        return true;
      }
      if (this.selectedButtonIndex == 0) {
        // Moving up from the buttons to the bottom of the list.
        this.selectedButton = null;
        return false;
      }
      // Moving up/left within the buttons.
      this.advanceSelection(false, true, false);
      return true;
    }

    if (event.keyCode == Ci.nsIDOMKeyEvent.DOM_VK_DOWN) {
      if (event.altKey) {
        // Keep the currently selected result in the list (if any) as a
        // secondary "alt" selection and move the selection down within
        // the buttons.
        this.advanceSelection(true, false, false);
        return true;
      }
      if (numListItems == 0) {
        this.advanceSelection(true, true, false);
        return true;
      }
      if (
        this.popup.selectedIndex >= 0 &&
        this.popup.selectedIndex < numListItems - 1
      ) {
        // Moving down within the list.  The autocomplete controller
        // should handle this case.  A button may be selected, so null it.
        this.selectedButton = null;
        return false;
      }
      if (this.popup.selectedIndex == numListItems - 1) {
        // Moving down from the last item in the list to the buttons.
        this.selectedButtonIndex = 0;
        if (allowEmptySelection) {
          // Let the autocomplete controller remove selection in the list
          // and revert the typed text in the textbox.
          return false;
        }
        if (this.textbox && typeof textboxUserValue == "string") {
          this.textbox.value = textboxUserValue;
        }
        this.popup.selectedIndex = -1;
        return true;
      }
      if (this.selectedButton) {
        let buttons = this.getSelectableButtons(true);
        if (this.selectedButtonIndex == buttons.length - 1) {
          // Moving down from the buttons back up to the top of the list.
          this.selectedButton = null;
          if (allowEmptySelection) {
            // Prevent the selection from wrapping around to the top of
            // the list by returning true, since the list currently has no
            // selection.  Nothing should be selected after handling this
            // Down key.
            return true;
          }
          return false;
        }
        // Moving down/right within the buttons.
        this.advanceSelection(true, true, false);
        return true;
      }
      return false;
    }

    if (event.keyCode == Ci.nsIDOMKeyEvent.DOM_VK_LEFT) {
      if (this.selectedButton && (this.compact || this.selectedButton.engine)) {
        // Moving left within the buttons.
        this.advanceSelection(false, this.compact, true);
        return true;
      }
      return false;
    }

    if (event.keyCode == Ci.nsIDOMKeyEvent.DOM_VK_RIGHT) {
      if (this.selectedButton && (this.compact || this.selectedButton.engine)) {
        // Moving right within the buttons.
        this.advanceSelection(true, this.compact, true);
        return true;
      }
      return false;
    }

    return false;
  }
  maybeRecordTelemetry(aEvent, aOpenUILinkWhere, aOpenUILinkParams) {
    if (!aEvent) {
      return false;
    }

    let source = null;
    let type = "unknown";
    let engine = null;
    let target = aEvent.originalTarget;

    if (aEvent instanceof KeyboardEvent) {
      type = "key";
      if (this.selectedButton) {
        source = "oneoff";
        engine = this.selectedButton.engine;
      }
    } else if (aEvent instanceof MouseEvent) {
      type = "mouse";
      if (target.classList.contains("searchbar-engine-one-off-item")) {
        source = "oneoff";
        engine = target.engine;
      }
    } else if (
      aEvent instanceof XULCommandEvent &&
      target.getAttribute("anonid") == "search-one-offs-context-open-in-new-tab"
    ) {
      source = "oneoff-context";
      engine = this._contextEngine;
    }

    if (!source) {
      return false;
    }

    if (this.telemetryOrigin) {
      source += "-" + this.telemetryOrigin;
    }

    let tabBackground =
      aOpenUILinkWhere == "tab" &&
      aOpenUILinkParams &&
      aOpenUILinkParams.inBackground;
    let where = tabBackground ? "tab-background" : aOpenUILinkWhere;
    BrowserSearch.recordOneoffSearchInTelemetry(engine, source, type, where);
    return true;
  }
  _resetAddEngineMenuTimeout() {
    if (this._addEngineMenuTimeout) {
      clearTimeout(this._addEngineMenuTimeout);
    }
    this._addEngineMenuTimeout = setTimeout(() => {
      delete this._addEngineMenuTimeout;
      let button = document.getAnonymousElementByAttribute(
        this,
        "anonid",
        "addengine-menu-button"
      );
      button.open = this._addEngineMenuShouldBeOpen;
    }, this._addEngineMenuTimeoutMs);
  }
}
customElements.define("firefox-search-one-offs", FirefoxSearchOneOffs);
