module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/_assets");

  return {
    templateFormats: [
      "md",
      "njk",
      "html"
    ],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "_src",
      includes: "_layouts",
      data: "_data",
      output: "_site"
    }
  };
};
