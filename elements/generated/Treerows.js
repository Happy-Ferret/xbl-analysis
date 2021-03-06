class FirefoxTreerows extends FirefoxTreeBase {
  connectedCallback() {
    super.connectedCallback();
    this.innerHTML = `
      <xul:hbox flex="1" class="tree-bodybox">
        <children></children>
      </xul:hbox>
      <xul:scrollbar height="0" minwidth="0" minheight="0" orient="vertical" inherits="collapsed=hidevscroll" style="position:relative; z-index:2147483647;"></xul:scrollbar>
    `;

    this.addEventListener("underflow", event => {
      // Scrollport event orientation
      // 0: vertical
      // 1: horizontal
      // 2: both (not used)
      var tree = document.getBindingParent(this);
      if (event.detail == 1) tree.setAttribute("hidehscroll", "true");
      else if (event.detail == 0) tree.setAttribute("hidevscroll", "true");
      event.stopPropagation();
    });

    this.addEventListener("overflow", event => {
      var tree = document.getBindingParent(this);
      if (event.detail == 1) tree.removeAttribute("hidehscroll");
      else if (event.detail == 0) tree.removeAttribute("hidevscroll");
      event.stopPropagation();
    });
  }
}
customElements.define("firefox-treerows", FirefoxTreerows);
