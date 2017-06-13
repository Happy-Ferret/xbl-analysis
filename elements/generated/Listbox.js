class XblListbox extends XblListboxBase {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    console.log(this, "connected");

    this.innerHTML = `<children includes="listcols">
<listcols>
<listcol flex="1">
</listcol>
</listcols>
</children>
<listrows>
<children includes="listhead">
</children>
<listboxbody inherits="rows,size,minheight">
<children includes="listitem">
</children>
</listboxbody>
</listrows>`;
    let comment = document.createComment("Creating xbl-listbox");
    this.prepend(comment);
  }
  disconnectedCallback() {}

  get listBoxObject() {
    return this.boxObject;
  }

  get itemCount() {
    return this.listBoxObject.getRowCount();
  }
  _fireOnSelect() {
    if (!this._suppressOnSelect && !this.suppressOnSelect) {
      var event = document.createEvent("Events");
      event.initEvent("select", true, true);
      this.dispatchEvent(event);
    }
  }
  appendItem(aLabel, aValue) {}
  insertItemAt(aIndex, aLabel, aValue) {}
  getIndexOfItem(item) {
    if (this._selecting && this._selecting.item == item)
      return this._selecting.index;
    return this.listBoxObject.getIndexOfItem(item);
  }
  getItemAtIndex(index) {
    if (this._selecting && this._selecting.index == index)
      return this._selecting.item;
    return this.listBoxObject.getItemAtIndex(index);
  }
  ensureIndexIsVisible(index) {}
  ensureElementIsVisible(element) {}
  scrollToIndex(index) {}
  getNumberOfVisibleRows() {}
  getIndexOfFirstVisibleRow() {}
  getRowCount() {}
  scrollOnePage(direction) {
    var pageOffset = this.getNumberOfVisibleRows() * direction;
    // skip over invisible elements - the user won't care about them
    for (var i = 0; i != pageOffset; i += direction) {
      var item = this.getItemAtIndex(this.currentIndex + i);
      if (item && !this._canUserSelect(item)) pageOffset += direction;
    }
    var newTop = this.getIndexOfFirstVisibleRow() + pageOffset;
    if (direction == 1) {
      var maxTop = this.getRowCount() - this.getNumberOfVisibleRows();
      for (i = this.getRowCount(); i >= 0 && i > maxTop; i--) {
        item = this.getItemAtIndex(i);
        if (item && !this._canUserSelect(item)) maxTop--;
      }
      if (newTop >= maxTop) newTop = maxTop;
    }
    if (newTop < 0) newTop = 0;
    this.scrollToIndex(newTop);
    return pageOffset;
  }
}
customElements.define("xbl-listbox", XblListbox);