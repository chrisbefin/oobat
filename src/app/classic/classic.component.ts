import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../game.service';
import { Card } from '../models/card';

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
  getCard() {
    this.service.getCard().then(message => {
   console.log(message);
   document.getElementById("hint1").innerHTML = message;
});

    // document.getElementById("hint2").innerHTML = cardInfo[2];
    // document.getElementById("hint3").innerHTML = cardInfo[3];
    // document.getElementById("hint4").innerHTML = cardInfo[4];
    // document.getElementById("hint5").innerHTML = cardInfo[5];

  }
}
