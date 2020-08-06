import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private socket: Socket) {
    this.socket.emit('connect');
    console.log("connected");
  }

  sendMessage(msg: string){
    console.log("sending message");
    console.log(msg);
    this.socket.emit('message', "hello from client");
  }
  // getMessage() {
  //   return this.socket
  //     .fromEvent("message")
  //     .pipe(map((data) => data.msg));
  // }

}
