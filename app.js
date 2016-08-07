const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 80;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/taichung', (req, res) => {
    request({ url: 'http://ybjson01.youbike.com.tw:1002/gwjs.json' }, (error, response, body) => {
        res.send(response);
    });
});

app.listen(port, () => { console.log('listening on port ' + port); });