require('dotenv').config()
const express = require('express');
const { urlencoded, json } = require('body-parser');
const { 
    getRows, 
    connection,
    readEngine,
    getHeader,
    config
} = require('./index');
const { join } = require('path');

class WebSocket {
    constructor(port) {
		this.connection = connection;
		this.rows = getRows;
		this.extConfig = config;
        this.app = express()
        this.app.set('views', join(__dirname, './../views'))
        this.app.set('view engine', 'hbs')
        this.app.use(express.static(join(__dirname, '../public')))
        this.app.use(urlencoded({ extended: false }))
        readEngine(this)
        this.app.use(json())
        this.server = this.app.listen(port, () => {
            console.log(`Kano-chan Websocket is listening on port ${this.server.address().port}`)
        })
    }

    registerRoots() {
        this.app.get('/', (req, res) => {
            let header = getHeader();
            res.render('index', { title: 'Kano-chan Gate', header: header })
		})
    }
}

module.exports = WebSocket;
