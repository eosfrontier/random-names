const express = require("express");
const app = express();
const http = require("http").Server(app);

let port = process.env.PORT || 3737;
const { testQuery } = require('./core/nameGen')


http.listen(port, () => console.log('init random-names successful'))



app.get('/', (req, res) => res.send('Random-names API'))
app.get('/names', (req, res) => {
  return res.send(testQuery(req.query));
})