const cors = require('cors')
const express = require('express');
const app = express()
app.use(cors())
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})
const http = require("http").Server(app)

let port = process.env.PORT || 3737;
const { generateNames } = require('./core/nameGen')

http.listen(port, () => console.log('init random-names successful'))
app.get('/', (req, res) => res.send('Random-names API'))
app.get('/names', (req, res) => res.send(generateNames(req.query)))
