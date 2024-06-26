/* ----------------------------------------------------------------------------
process CSS files with PostCSS
---------------------------------------------------------------------------- */
const browserslist = require('browserslist');
const { browserslistToTargets, bundleAsync } = require('lightningcss');
const path = require('node:path');

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    async compile(inputContent, inputPath) {
      const baseDir = path.basename(path.dirname(inputPath));
      if (baseDir.startsWith('_')) {
        return undefined;
      }
      const files = [];
      const targets = browserslistToTargets(browserslist());
      const result = await bundleAsync({
        filename: inputPath,
        minify: true,
        sourceMap: true,
        drafts: {
          customMedia: true,
          nesting: true,
        },
        resolver: {
          resolve(specifier, from) {
            const importPath = path.resolve(path.dirname(from), specifier);
            files.push(importPath);
            return path.resolve(path.dirname(from), specifier);
          },
        },
        targets,
      });
      this.addDependencies(inputPath, files);
      return () => result.code.toString();
    },
  });
};
