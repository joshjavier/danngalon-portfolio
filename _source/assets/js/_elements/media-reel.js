class MediaReel extends HTMLElement {
  static getObservedAttributes() {
    return ['itemWidth', 'height', 'space', 'noBar'];
  }

  connectedCallback() {
    this.classList.add('reel');
    if ('ResizeObserver' in window) {
      new ResizeObserver((entries) => {
        this.toggleOverflowClass(entries[0].target);
      }).observe(this);
    }

    if ('MutationObserver' in window) {
      new MutationObserver((entries) => {
        this.toggleOverflowClass(entries[0].target);
      }).observe(this, { childList: true });
    }
  }

  /** @param {HTMLElement} elem */
  toggleOverflowClass(elem) {
    elem.classList.toggle('overflowing', this.scrollWidth > this.clientWidth);
  }
}

if (!customElements.get('media-reel')) {
  customElements.define('media-reel', MediaReel);
}

export default MediaReel;
