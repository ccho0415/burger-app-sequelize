var express = require('express');
var bodyParser = require('body-parser');
var exphbs= require('express-handlebars');
var app = express();
var db = require("./models");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}))
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set("view engine", "handlebars");
var routes = require("./controllers/defaultRoutes.js")
app.use("/", routes);
var port = 3000;
db.sequelize.sync().then(function() {
	app.listen(port);
})
