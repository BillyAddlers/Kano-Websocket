const headerList = require('.././../assets/static/header.json/');

function getHeader() {
    let result = headerList[Math.floor(Math.random()*headerList.length)%headerList.length]
    return result;
}

module.exports = getHeader;