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

  getCard() {
    this.socket.emit("getCard");
    this.socket.on("card", (key,hint1,hint2,hint3,hint4,hint5) => {
      console.log("card received");
      console.log(key, hint1, hint2, hint3, hint4, hint5);
      return [key,hint1,hint2,hint3,hint4,hint5];
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
