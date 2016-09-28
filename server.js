var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Express server running on port ', app.get('port'));
});




// ----------- ROUTING ----------- //

app.get('/api/test', function(req, res, next) {
  console.log('test route hti')
  res.send('hello world!');
});
