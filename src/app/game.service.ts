import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { GameSession } from './models/gameSession';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  currSessionID: string = "";
  currPlayerNum: number = -1;

  constructor(private socket: Socket) { }

  sendScore(username, score, mode) {
    this.socket.emit("addScore", username, score, mode);
  }

  getCard(timeout = 10000): Promise<any> {//queries the DB for a new card using promises
    return new Promise((resolve, reject) => {
        let timer;

        this.socket.emit("getRandomCard");

        function responseHandler(data) {
          // resolve promise with the value we got
          resolve(data);
          clearTimeout(timer);
        }

        this.socket.once("card", responseHandler);

        // set timeout so if a response is not received within a
        // reasonable amount of time, the promise will reject
        timer = setTimeout(() => {
          reject(new Error("timeout waiting for server response"));
          alert("No server connection");
          this.socket.removeListener("card", responseHandler);
        }, timeout);

    });
  }

  getScores(gamemode, timeout = 10000): Promise<any> {//queries the DB for a gamemode's top 3 scores using promises
    return new Promise((resolve, reject) => {
        let timer;

        this.socket.emit("getScores", gamemode);

        function responseHandler(data) {
          // resolve promise with the value we got
          resolve(data);
          clearTimeout(timer);
        }

        this.socket.once(`${gamemode}scores`, responseHandler);

        // set timeout so if a response is not received within a
        // reasonable amount of time, the promise will reject
        timer = setTimeout(() => {
          reject(new Error("timeout waiting for server response"));
          this.socket.removeListener("scores", responseHandler);
        }, timeout);

    });
  }

  createSession(name, gamemode) {
    let sessionCode = this.generateCode();
    let session = {
      id: sessionCode,
      mode: gamemode,
      active: true,
      numPlayers: 1,
      playerNameList: [name, '', '', ''],
      playerScoreList: [0, 0, 0, 0]
    }
    this.socket.emit("addSession", session);
    return sessionCode;
  }

  joinSession(sessionID, name, timeout = 10000): Promise<any> {// asks server to join a game session
    return new Promise((resolve, reject) => {
        let timer;

        this.socket.emit("joinSession", name, sessionID); // request to join specific session

        function responseHandler(status, playerNum) {
          // resolve promise with the value we got
          if (status == true) {
            this.currPlayerNum = playerNum; // update class data members
            this.currSessionID = sessionID;
          }
          resolve(status);
          clearTimeout(timer);
        }

        this.socket.once("joinStatus", responseHandler); //wait for server to signal if join was success or failure

        // set timeout so if a response is not received within a
        // reasonable amount of time, the promise will reject
        timer = setTimeout(() => {
          reject(new Error("timeout waiting for server response"));
          this.socket.removeListener("joinStatus", responseHandler);
        }, timeout);

    });
  }

  private generateCode() {
    let text = '';//generates random 5 digit code to allow players to join games
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }


}
