module.exports = () => {
    const newsStructure = require('../../../modules/news');
    const data = newsStructure('./src/data/news/cy');

    return data;
}