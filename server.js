var express = require('express');
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/routes.js")(app);
var port = process.env.PORT || 5000;

app.listen(port);
console.log(`Server running on: ${port}`);