class FirefoxEditor extends XULElement {
  connectedCallback() {
    Object.defineProperty(this, "_editorContentListener", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._editorContentListener;
        return (this._editorContentListener = {
          QueryInterface(iid) {
            if (
              iid.equals(Components.interfaces.nsIURIContentListener) ||
              iid.equals(Components.interfaces.nsISupportsWeakReference) ||
              iid.equals(Components.interfaces.nsISupports)
            )
              return this;

            throw Components.results.NS_ERROR_NO_INTERFACE;
          },
          onStartURIOpen(uri) {
            return false;
          },
          doContent(contentType, isContentPreferred, request, contentHandler) {
            return false;
          },
          isPreferred(contentType, desiredContentType) {
            return false;
          },
          canHandleContent(
            contentType,
            isContentPreferred,
            desiredContentType
          ) {
            return false;
          },
          loadCookie: null,
          parentContentListener: null
        });
      },
      set(val) {
        delete this._editorContentListener;
        return (this._editorContentListener = val);
      }
    });
    Object.defineProperty(this, "_finder", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._finder;
        return (this._finder = null);
      },
      set(val) {
        delete this._finder;
        return (this._finder = val);
      }
    });
    Object.defineProperty(this, "_fastFind", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._fastFind;
        return (this._fastFind = null);
      },
      set(val) {
        delete this._fastFind;
        return (this._fastFind = val);
      }
    });
    Object.defineProperty(this, "_lastSearchString", {
      configurable: true,
      enumerable: true,
      get() {
        delete this._lastSearchString;
        return (this._lastSearchString = null);
      },
      set(val) {
        delete this._lastSearchString;
        return (this._lastSearchString = val);
      }
    });

    // Make window editable immediately only
    //   if the "editortype" attribute is supplied
    // This allows using same contentWindow for different editortypes,
    //   where the type is determined during the apps's window.onload handler.
    if (this.editortype) this.makeEditable(this.editortype, true);
  }
  disconnectedCallback() {
    undefined;
  }

  get finder() {
    if (!this._finder) {
      if (!this.docShell) return null;

      let Finder = Components.utils.import(
        "resource://gre/modules/Finder.jsm",
        {}
      ).Finder;
      this._finder = new Finder(this.docShell);
    }
    return this._finder;
  }

  get fastFind() {
    if (!this._fastFind) {
      if (!("@mozilla.org/typeaheadfind;1" in Components.classes)) return null;

      if (!this.docShell) return null;

      this._fastFind = Components.classes[
        "@mozilla.org/typeaheadfind;1"
      ].createInstance(Components.interfaces.nsITypeAheadFind);
      this._fastFind.init(this.docShell);
    }
    return this._fastFind;
  }

  set editortype(val) {
    this.setAttribute("editortype", val);
    return val;
  }

  get editortype() {
    return this.getAttribute("editortype");
  }

  get webNavigation() {
    return this.docShell.QueryInterface(Components.interfaces.nsIWebNavigation);
  }

  get contentDocument() {
    return this.webNavigation.document;
  }

  get docShell() {
    let { frameLoader } = this;
    return frameLoader ? frameLoader.docShell : null;
  }

  get currentURI() {
    return this.webNavigation.currentURI;
  }

  get contentWindow() {
    return this.docShell
      .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
      .getInterface(Components.interfaces.nsIDOMWindow);
  }

  get contentWindowAsCPOW() {
    return this.contentWindow;
  }

  get webBrowserFind() {
    return this.docShell
      .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
      .getInterface(Components.interfaces.nsIWebBrowserFind);
  }

  get markupDocumentViewer() {
    return this.docShell.contentViewer;
  }

  get editingSession() {
    return this.webNavigation
      .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
      .getInterface(Components.interfaces.nsIEditingSession);
  }

  get commandManager() {
    return this.webNavigation
      .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
      .getInterface(Components.interfaces.nsICommandManager);
  }

  set fullZoom(val) {
    this.markupDocumentViewer.fullZoom = val;
  }

  get fullZoom() {
    return this.markupDocumentViewer.fullZoom;
  }

  set textZoom(val) {
    this.markupDocumentViewer.textZoom = val;
  }

  get textZoom() {
    return this.markupDocumentViewer.textZoom;
  }

  get isSyntheticDocument() {
    return this.contentDocument.isSyntheticDocument;
  }

  get messageManager() {
    if (this.frameLoader) {
      return this.frameLoader.messageManager;
    }
    return null;
  }

  get outerWindowID() {
    return this.contentWindow
      .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
      .getInterface(Components.interfaces.nsIDOMWindowUtils).outerWindowID;
  }
  makeEditable(editortype, waitForUrlLoad) {
    this.editingSession.makeWindowEditable(
      this.contentWindow,
      editortype,
      waitForUrlLoad,
      true,
      false
    );
    this.setAttribute("editortype", editortype);

    this.docShell
      .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
      .getInterface(
        Components.interfaces.nsIURIContentListener
      ).parentContentListener = this._editorContentListener;
  }
  getEditor(containingWindow) {
    return this.editingSession.getEditorForWindow(containingWindow);
  }
  getHTMLEditor(containingWindow) {
    var editor = this.editingSession.getEditorForWindow(containingWindow);
    return editor.QueryInterface(Components.interfaces.nsIHTMLEditor);
  }
}
customElements.define("firefox-editor", FirefoxEditor);
