module.exports = () => {
    const newsStructure = require('../../../modules/news');
    const data = newsStructure('./src/data/news/en');

    return data;
}