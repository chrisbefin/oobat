import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private socket: Socket) {
    this.socket.emit('connect');
  }

  sendMessage(msg: string){
    this.socket.emit('message', msg);
  }
  // getMessage() {
  //   return this.socket
  //     .fromEvent("message")
  //     .pipe(map((data) => data.msg));
  // }

}