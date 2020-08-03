// const express = require('express');
//
// const app = express();
//
//
// // serve static files
// app.use(express.static('./src/'));
//
// // direct all requests to index.html
// app.get('/*', function(req, res) {
//   res.sendFile('index.html', {root: 'src/'}
// );
// });
//
// //listen for requests
// app.listen(process.env.PORT || 8080);

// //Install express server
// const express = require('express');
// const path = require('path');
//
// const app = express();
//
// // Serve only the static files from the dist directory
// app.use(express.static(__dirname + '/dist/<name-of-app>'));
//
// app.get('/*', function(req,res) {
//
// res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
// });
//
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);


const express = require('express');

const app = express();

app.use(express.static('./dist/oobat'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/oobat' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)
