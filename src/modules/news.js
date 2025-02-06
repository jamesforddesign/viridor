const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const marked = require('marked');

/**
 * Recursively reads a directory and returns the structure as an array.
 * @param {string} dir - The directory to read.
 * @param {string} parentPath - The parent path for nested directories.
 * @param {string} basePath - The base path for constructing full paths.
 * @returns {Array} - The directory and file structure.
 */
function getDirectoryStructure(dir, basePath = '') {
    const results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            // Recurse into the directory but don't push the directory itself to results
            results.push(...getDirectoryStructure(filePath, filePath, basePath));
        } else {
            // Read markdown file
            const data = fs.readFileSync(`./${filePath}`, 'utf8');

            // Extract the YAML front matter
            const match = data.match(/---\n([\s\S]+?)\n---/);

            // Bail if no front matter data - template will break otherwise
            if (!match) {
                console.error('No front matter found.');
                return;
            }

            const yamlContent = match[1];
            const markdownContent = data.slice(match[0].length);

            // Parse the YAML front matter
            const metadata = yaml.load(yamlContent);

            // Parse the markdown content
            const htmlContent = marked.parse(markdownContent);

            results.push({
                // Get full path of item
                permalink: metadata.permalink,

                // Nest this item within its relative parent directory
                parent: metadata.parent,

                // Get title from markdown front matter
                title: metadata.title,

                // Get date from markdown front matter
                date: metadata.date,

                // Get description from markdown front matter
                description: metadata.description,

                // Get image from markdown front matter
                image: metadata.image,

                // Get markdown (parsed as HTML) required for the article
                content: htmlContent,
            });
        }
    });

    return results;
}

/**
 * Main function to get the directory structure based on a provided path.
 * @param {string} directoryPath - The directory path to read.
 * @returns {Array} - The directory and file structure.
 */
function newsStructure(directoryPath) {
    return getDirectoryStructure(directoryPath);
}

module.exports = newsStructure;