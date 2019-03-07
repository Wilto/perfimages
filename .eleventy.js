module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/_assets");

    eleventyConfig.addCollection("blurbs", function(collection) {
      return collection.getAllSorted().filter(function(item) {
        return item.inputPath.match(/^\.\/_src\/blurbs\//) !== null;
     });
    });

  eleventyConfig.addCollection("bios", function(collection) {
    return collection.getFilteredByGlob("**/bio.md");
  });

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
