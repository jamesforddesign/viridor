const fs = require('fs');
const path = require('path');

const directoryPath = path.resolve(__dirname, '../data/pages');
const structure = getDirectoryStructure(directoryPath);

/**
 * Recursively reads a directory and returns the structure as an array.
 * @param {string} dir - The directory to read.
 * @param {string} parentPath - The parent path.
 * @param {string} basePath - The base path.
 * @returns {Array} - The directory and file structure.
 */
function getDirectoryStructure(dir, basePath = '') {
    const results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const relativeFilePath = path.relative(__dirname, filePath);
        const stat = fs.statSync(filePath);

        if (!require(relativeFilePath).navIgnore) {
            if (stat && stat.isDirectory()) {
                // Recurse into the directory but don't push the directory itself to results
                results.push(...getDirectoryStructure(filePath, filePath, basePath));
            } else {
                results.push({
                    // Anchor link
                    anchor: require(relativeFilePath).anchor,

                    // Page title
                    title: require(relativeFilePath).title,

                    // Get full path of item
                    permalink: require(relativeFilePath).permalink,

                    // Get social image URL
                    socialImage: require(relativeFilePath).socialImage,

                    // Nest this item within its relative parent directory
                    parent: require(relativeFilePath).parent,

                    // Where in nav is item placed?
                    navOrder: require(relativeFilePath).navOrder,

                    // Check if nav item is an external link
                    external: require(relativeFilePath).external,

                    // Blocks required for the page structure
                    blocks: require(relativeFilePath).blocks,
                });
            }
        }
    });

    return results;
}

module.exports = structure;