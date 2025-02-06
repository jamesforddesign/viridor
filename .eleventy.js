const dayjs = require("dayjs");
const pretty = require("pretty");
const fs = require('fs-extra');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyI18nPlugin } = require("@11ty/eleventy");

require('dotenv').config();

module.exports = function (eleventyConfig) {
    eleventyConfig.addGlobalData('env', process.env);
    
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: process.env.DEFAULT_LANG ? process.env.DEFAULT_LANG : "en",
        errorMode: 'allow-fallback'
    });

    eleventyConfig.addShortcode("assetVersion", function () {
        return dayjs().format("YYYYMMDDHHmmss");
    });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addPassthroughCopy("./src/site/assets");

    eleventyConfig.addTransform("prettyhtml", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            let prettified = pretty(content, {
                ocd: true,
            });

            return prettified;
        }

        return content;
    });

    // Initiate navigation
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Ignore home page from collection
    eleventyConfig.addFilter('ignoreHome', function(collection) {          
        return collection.filter(item => !['', 'en', 'cy'].includes(item.key));
    });

    // Filter navigation by language key
    eleventyConfig.addFilter('navigationLanguage', function(collection, language) {          
        return collection.filter(item => item.lang == language);
    });

    // Format event dates
    eleventyConfig.addFilter("eventDate", date => {
        return dayjs(date).format("D MMMM YYYY");
    });

    // Show feedback form sections only
    eleventyConfig.addFilter("feedbackSections", function(array) {
        if (!Array.isArray(array)) {
          return array;
        }

        // Trim review and success page
        return array.slice(0, -2);
    });

    // Cleanse the additional language files if site not multilingual
    eleventyConfig.on('afterBuild', () => {
        if (process.env.MULTILINGUAL === 'false') {
            console.log('Cleansing distributed files of multilingual support');

            fs.removeSync('dist/cy');
            fs.removeSync('dist/lang-redirect');
            fs.removeSync('dist/search-cy.json');
        }
    });
    
    return {
        dir: {
            input: "src/site",
            output: "dist",
        },
        htmlTemplateEngine: "njk",
        passthroughFileCopy: true,
    };
};