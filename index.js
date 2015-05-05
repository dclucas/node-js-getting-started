var express = require('express');
var app = express();
var osIP = undefined

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  osIP = add
})

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var port = server.address().port;
  response.send('Hello World from ' + osIP + ':' + port + '!');
});

var server = app.listen(app.get('port'), function() {
  //console.log('Node app is running on port', app.get('port'));
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
