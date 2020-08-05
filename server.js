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

const PORT = process.env.PORT || 8080;
const INDEX = 'index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: './dist/oobat' }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});
