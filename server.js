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

// io.on('connect', ws => {
//   console.log('Client connected');
//   io.send("hello from server!");
// });
//
// io.on('message', msg => {
//   console.log(msg);
// });

io.on("connection", socket => {
  console.log("Client connected!");
  // let previousId;
  // const safeJoin = currentId => {
  //   socket.leave(previousId);
  //   socket.join(currentId);
  //   previousId = currentId;
  // };

  socket.on("msg", msg => {
    console.log(msg);
  });

  // socket.on("addDoc", doc => {
  //   documents[doc.id] = doc;
  //   safeJoin(doc.id);
  //   io.emit("documents", Object.keys(documents));
  //   socket.emit("document", doc);
  // });
  //
  // socket.on("editDoc", doc => {
  //   documents[doc.id] = doc;
  //   socket.to(doc.id).emit("document", doc);
  // });

});
