const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/taichung', function (req, res) {
    console.log('get');
    request({ url: 'http://ybjson01.youbike.com.tw:1002/gwjs.json' }, function (error, response, body) {
        res.send(response);
        // console.log(response);
    });
});

app.listen(port, function () { console.log('listening on port ' + port); });