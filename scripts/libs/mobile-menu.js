class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.querySelector("#global-container");
    this.eventType = this._getEventType();
    this._addEvent();
    this._resize();
  }

  _getEventType() {
    // const isTouchCapable =
    //   "ontouchstart" in window ||
    //   (window.DocumentTouch && document instanceof window.DocumentTouch) ||
    //   navigator.maxTouchPoints > 0 ||
    //   window.navigator.msMaxTouchPoints > 0;

    // return isTouchCapable ? "touchstart" : "click";
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }
  
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    
  }

  _remove() {
    this.DOM.container.classList.remove("menu-open");
  }
  _resize(){
    window.addEventListener('resize', this._remove.bind(this));

  }
}