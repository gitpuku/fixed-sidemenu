document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.footer = document.querySelector('.footer')
        this._init();
        this._scrollInit();
    }
    _init() {
        new MobileMenu();
    }

    _scrollAnimation(el, inview) {
        if(inview) {
            this.footer.classList.add('inview');
        }else {
            this.footer.classList.remove('inview');
        }
    }

    _scrollInit() {
        this.observers = new ScrollObserver('.scroll-intersection', this._scrollAnimation.bind(this), {once: false, rootMargin: "100px 0px"});
    }
}

