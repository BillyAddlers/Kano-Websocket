const { articles } = require('./libs/getArticles');
const { getRows, connection } = require('./libs/mysqlFullHandler');
const { getHeader } = require('./libs/getHeader');
const { readEngine } = require('./libs/readEngine');
const config = require('./../config.json');

module.exports = { 
    articles, 
    getRows, 
    connection, 
    getHeader,
    readEngine,
    config
};
