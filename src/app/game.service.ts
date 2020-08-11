import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private socket: Socket) {

  }
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




}
