import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private socket: Socket) {

  }

  getCard() {
    this.socket.emit("getCard");
    this.socket.on("card", card => {
      console.log("card received");
      return card;
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
