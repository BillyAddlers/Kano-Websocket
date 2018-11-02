require('dotenv').config()
const { readdirSync } = require('fs');
const { join } = require('path');

const articles = [];

const modules = readdirSync(join(__dirname, '../../articles'));
console.log(`${modules.length} category detected, starting module circular startup...`);

for(const module of modules){
    console.log(`${module} module loaded!`);
    const commandFile = readdirSync(join(__dirname, '../../articles', module));
    for(const file of commandFile){
        console.log(`Loading articles ${file}`);
        articles.push({ filename: file, category: module });
    }
}

module.exports = { articles };