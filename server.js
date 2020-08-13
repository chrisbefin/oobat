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

client.connect(); // connect to SQL database
const sessions = {}; //in memory storage of multiplayer game sessions

io.on("connection", socket => {
  console.log("Client connected!");
  let previousId;
  const safeJoin = currentId => { // each client can only be in one session at once
    socket.leave(previousId); // leave previous session before joining new session
    socket.join(currentId);
    previousId = currentId; // session just joined becomes previous session
  };


  //Database signals


  socket.on("addScore", function (username, score, gamemode) {
    console.log(username, score, gamemode);
    client.query(`INSERT INTO scores(name, score, gamemode) VALUES('${username}', ${score}, '${gamemode}');`, function(err, result) {
      console.log(err, result);
      console.log("DB updated");
    });
  });

  socket.on("getRandomCard", function () { // pulls random card from cards table and emits it to client
    client.query(`SELECT * FROM cards OFFSET RANDOM() * (SELECT COUNT(*) FROM cards) LIMIT 1 ;`, function(err, result) {
      console.log(result);
      socket.emit("card", result);
      console.log("random card sent");
    });
  });

  socket.on("getScores", function (gamemode) { // emits top 3 scores for certain gamemode to client
    console.log(gamemode);
    client.query(`SELECT name, score FROM scores WHERE gamemode = '${gamemode}' ORDER BY score DESC LIMIT(3);`, function(err, results) { // query the DB
      console.log(results);
      socket.emit(`${gamemode}scores`, results); //report results to client
      console.log("scores sent");
    });
  });


  // Multiplayer signals


  socket.on("addSession", session => {
    sessions[session.id] = session; // add new session to the sessions object
    console.log("session added to server:", session.id);
    console.log(session);
    safeJoin(session.id); // join the room associated with this session ID
  });

  socket.on("joinSession", function (name, sessionID) {
    if (!(sessionID in sessions)) { //check if requested session exists
      console.log("Session doest not exist", sessionID);
      socket.emit("joinStatus", false, -1); //report failure to client
    }
    else if (sessions[sessionID].mode == "party" && sessions[sessionID].numPlayers == 4) {
      console.log("Session already full", sessionID); //no room in session for client
      socket.emit("joinStatus", false, -1); //report failure to client
    }
    else if (sessions[sessionID].mode == "versus" && sessions[sessionID].numPlayers == 2) {
      console.log("Session already full", sessionID); //no room in session for client
      socket.emit("joinStatus", false, -1); //report failure to client
    }
    else { // session exists and has room
      safeJoin(sessionID); // join the session
      sessions[sessionID].numPlayers++; //increment number of players in the session
      let clientIndex = sessions[sessionID].numPlayers - 1; //get index of current player for array access
      sessions[sessionID].playerNameList[clientIndex] = name;
      sessions[sessionID].playerScoreList[clientIndex] = 0;
      console.log(sessions[sessionID]);
      socket.emit("joinStatus", true, (sessions[sessionID].numPlayers+1)); // report success to client, send them their player number
      socket.to(sessionID).emit("updateSession", sessions[sessionID]); //broadcast the updated session when a new player joins
    }
  });

  socket.on("modifySession", session => {
    sessions[session.id] = session; // update the session object
    console.log("session modified:", session.id);
    console.log(session);
    socket.to(session.id).emit("updateSession", session); // send out to session to all clients in the room/game
  });

});
