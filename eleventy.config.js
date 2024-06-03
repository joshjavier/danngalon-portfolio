const markdownIt = require('markdown-it');
const esbuild = require('./_source/_utilities/esbuild.js');
const lightningcss = require('./_source/_utilities/lightningcss.js');
const image = require('./_source/_utilities/image.js');
const style = require('./_source/_utilities/style.js');
const setVar = require('./_source/_utilities/setVar.js');
const fullDate = require('./_source/_utilities/fullDate.js');
const getRandom = require('./_source/_utilities/getRandom.js');
const markdownify = require('./_source/_utilities/markdownify.js');
const sortBy = require('./_source/_utilities/sortBy.js');
const where = require('./_source/_utilities/where.js');
const hexEncode = require('./_source/_utilities/hexEncode.js');

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
  /* --------------------------------------------------------------------------
  Plugins, shortcodes, filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(esbuild);
  eleventyConfig.addPlugin(lightningcss);
  eleventyConfig.addShortcode('image', image);
  eleventyConfig.addPairedShortcode('setVar', setVar);
  eleventyConfig.addPairedShortcode('style', style);
  eleventyConfig.addFilter('fullDate', fullDate);
  eleventyConfig.addFilter('getRandom', getRandom);
  eleventyConfig.addFilter('markdownify', markdownify);
  eleventyConfig.addFilter('sortBy', sortBy);
  eleventyConfig.addFilter('where', where);
  eleventyConfig.addFilter('hexEncode', hexEncode);

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  const markdownItOptions = {
    html: true,
    typographer: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));

  /* --------------------------------------------------------------------------
  Files & folders
  -------------------------------------------------------------------------- */
  eleventyConfig.addPassthroughCopy('_source/assets/fonts');
  eleventyConfig.addPassthroughCopy('_source/assets/images');
  eleventyConfig.addPassthroughCopy('_source/assets/videos');

  /* --------------------------------------------------------------------------
  Collections
  -------------------------------------------------------------------------- */
  eleventyConfig.addCollection('campaign', (collectionApi) => {
    const campaigns = collectionApi.getAll().filter((item) => item.data.category === 'Campaigns');
    return campaigns.sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addCollection('specialProject', (collectionApi) => {
    const specialProjects = collectionApi.getAll().filter((item) => item.data.category === 'Special Projects');
    return specialProjects.sort((a, b) => a.data.order - b.data.order);
  });

  return {
    dir: {
      input: '_source',
      output: '_public',
      layouts: '_layouts',
      includes: '_includes',
    },
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
  };
};
