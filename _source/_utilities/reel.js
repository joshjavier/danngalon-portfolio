/* ----------------------------------------------------------------------------
Block for adding items to a work page's media reel
{% reel %}<video /><img />{% endreel %}
---------------------------------------------------------------------------- */

/** @param {String} content  */
function reel(content) {
  this.page.reel = content;
  return '';
}

module.exports = reel;
