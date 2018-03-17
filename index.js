var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(3000, function () {
  console.log("Express server listening on port 3000");
});

app.get('/', function (req, res) {
  res.render('pages/index');
})

app.get('/limits', function (req, res) {
  res.render('pages/limits')
});
