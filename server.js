// const express = require('express');
//
// const app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
//
// app.use(express.static('./dist/oobat'));
//
// app.get('/*', function (req, res) {
//   res.sendFile('index.html', { root: 'dist/oobat' }
//   );
// });
//
// app.listen(process.env.PORT || 8080);
// http.listen(process.env.PORT || 4444);
//
// console.log(`Running on port ${process.env.PORT || 8080}`)

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 8080;
const INDEX = 'index.html';

const server = express()
  .use(express.static('./dist/oobat'))
  .use((req, res) => res.sendFile('index.html', { root: 'dist/oobat' }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', ws => {
  console.log('Client connected');
});

console.log("HELLO");
setTimeout(function(){
    console.log("THIS IS");
}, 10000);
console.log("DOG");
