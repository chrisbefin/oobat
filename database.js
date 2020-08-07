const { Client } = require('pg');


const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
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

// client.connect();
//
// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });
