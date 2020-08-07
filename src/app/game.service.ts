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

  // getCard() {
  //   // this.socket.emit("getCard");
  //   // let answer = "";
  //   // this.socket.on("card", function (key) {
  //   //   console.log("key received");
  //   //   console.log(key);
  //   //   answer = key;
  //   // });
  //   let answer = "hi ";
  //   this.socket.emit("getCard");
  //   this.socket.on("card", function (data) {
  //     answer = answer + data;
  //     console.log(answer);
  //     //return answer;
  //   });
  //   return answer;
  // }

  getCard( timeout = 10000): Promise<string> {
    return new Promise((resolve, reject) => {
        let timer;

        this.socket.emit("getCard");

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


  sendMessage(){
    console.log("sending message to server");
    this.socket.emit("msg", "hello from client!");
    }
    //  getMessage() {
    //      return this.socket
    //          .fromEvent("message")
    //          .pipe(map((data) => data.msg));
    // }


}
