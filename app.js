var express = require('express')
var request = require('request')
var app = express()

var port = 8080;

var url = "http://localhost:3004/cities"

var citiesJson = null

request({
    url: url,
    json: true
}, function(error, response, body) {
    if(!error && response.statusCode === 200) {
        citiesJson = body
    }
})

var router = express.Router()

router.get('/cities/', function(req, res){
    res.json(citiesJson)
})

app.use('/api', router)

app.listen(port)

console.log('server started on port: '+port)