module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("manifest.json");

  return {
    markdownTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid'
  };
};
