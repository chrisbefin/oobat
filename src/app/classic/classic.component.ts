import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css'],
  providers: [GameService]
})
export class ClassicComponent implements OnInit {

  constructor(private service: GameService) { }

  ngOnInit() {
  }
  sendMsg(msg: string) {
    this.service.sendMessage(msg);
  }
  changeText() {
    document.getElementById("server-time").innerHTML = "hi";
  }
}
