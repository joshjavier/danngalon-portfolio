/* ----------------------------------------------------------------------------
process CSS tag pair and add it to a <style> tag in the page head
{% style %}.foo { bar: fizz;}{% endstyle %}
---------------------------------------------------------------------------- */
const browserslist = require('browserslist');
const { browserslistToTargets, transform } = require('lightningcss');

module.exports = function style(content) {
  const targets = browserslistToTargets(browserslist());
  const result = transform({
    code: Buffer.from(content),
    minify: true,
    drafts: {
      customMedia: true,
      nesting: true,
    },
    targets,
  });
  this.page.style = result.code.toString('utf8');
  return '';
};
