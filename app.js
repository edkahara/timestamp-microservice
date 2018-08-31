var express = require('express');
var app = express();

app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/date', function(req, res) {
    var date = new Date();
    res.json({unix: date.getTime(), utc: date.toUTCString()});
});//get current date

app.get('/date/:date_string', function(req, res) {
    var date_string = req.params.date_string;
    var date = Number(date_string) ? new Date(Number(date_string)) : new Date(Date.parse(date_string));
    res.json({unix: date.getTime(), utc: date.toUTCString()});
});//get date

app.listen(3000);
