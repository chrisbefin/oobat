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
  sendMsg() {
    this.service.sendMessage();
    let card = this.service.getCard();
    if (card != null) {
      document.getElementById("hint1").innerHTML = card.hint1;
      document.getElementById("hint2").innerHTML = card.hint2;
      document.getElementById("hint3").innerHTML = card.hint3;
      document.getElementById("hint4").innerHTML = card.hint4;
      document.getElementById("hint5").innerHTML = card.hint5;
    }
  }
}
