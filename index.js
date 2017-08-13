var express         = require("express");
var bodyParser      = require("body-parser");

var app = express();

//config
app.set('port', 80);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// route
app.use('/weixin', require('./wechat'));

// start up server
app.listen(app.get('port'), function () {
    console.log('Server listening on:', app.get('port'));
});