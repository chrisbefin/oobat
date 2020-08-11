const express = require('express');
const socketIO = require('socket.io');
const { Client } = require('pg');

const PORT = process.env.PORT || 8080;
const INDEX = 'index.html';

const server = express()//start up express server
  .use(express.static('./dist/oobat'))
  .use((req, res) => res.sendFile('index.html', { root: 'dist/oobat' }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

const client = new Client({ //connect to database
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


io.on("connection", socket => {
  console.log("Client connected!");
  client.connect();
  // let previousId;
  // const safeJoin = currentId => {
  //   socket.leave(previousId);
  //   socket.join(currentId);
  //   previousId = currentId;
  // };

  socket.on("msg", msg => {
    console.log(msg);
  });

  socket.on("addScore", function (username, score, gamemode) {
    //client.connect();
    console.log(username, score, gamemode);
    client.query(`INSERT INTO scores(name, score, gamemode) VALUES('${username}', ${score}, '${gamemode}');`, function(err, result) {
      console.log(err, result);
      console.log("DB updated");
      //client.end();
    });
  });

  socket.on("getRandomCard", function () {
    //client.connect();
    client.query(`SELECT * FROM cards OFFSET RANDOM() * (SELECT COUNT(*) FROM cards) LIMIT 1 ;`, function(err, result) {
      console.log(result);
      socket.emit("card", result);
      console.log("random card sent");
      //client.end();
    });
  });

  socket.on("getScores", function (gamemode) {
    //client.connect();
    console.log(gamemode);
    client.query(`SELECT name, score FROM scores WHERE gamemode = '${gamemode}' ORDER BY score DESC LIMIT(3);`, function(err, results) {
      socket.emit("scores", results);
      console.log("scores sent");
      //client.end();
    });
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
