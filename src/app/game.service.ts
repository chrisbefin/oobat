import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private socket: Socket) {

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
