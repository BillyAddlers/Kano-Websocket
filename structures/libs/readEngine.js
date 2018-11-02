const hbs = require('express-handlebars');

exports.readEngine = (WebSocket) => {
    WebSocket.app.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + './../../layouts'
    }))
}