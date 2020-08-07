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

cardObject = {
  key : "sun",
  hint1 : "shine",
  hint2 : "sky",
  hint3 : "hot",
  hint4 : "fire",
  hint5 : "yellow"
};

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

  socket.on("getCard", () => {
    console.log(cardObject.key);
    socket.emit("card", [cardObject.key, cardObject.hint1, cardObject.hint2,cardObject.hint3, cardObject.hint4, cardObject.hint5]);
    console.log("card info sent");
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

function getHighScores (gamemode) {
  client.connect();

  // client.query(`SELECT name, score FROM scores WHERE gamemode = ${gamemode}; ORDER BY score DESC LIMIT(3)`, (err, res) => {
  //   if (err) throw err;
  //   for (let row of res.rows) {
  //     console.log(JSON.stringify(row));
  //   }
  //   client.end();
  // });
  client.query(`SELECT * FROM scores`, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });
}
getHighScores("hi");
