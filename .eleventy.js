module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("static");

  return {
    markdownTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid'
  };
};
