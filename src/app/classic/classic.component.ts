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
  currKey : string = "sun";
  score : number;

  constructor(private service: GameService) {

  }

  ngOnInit() {
    this.score = 0;
    this.getNextCard();
  }
  checkAnswer() {
    let guess = (<HTMLInputElement>document.getElementById("answer")).value;
    console.log(guess);
    if (guess == this.currKey) {
      this.getNextCard();
      this.score = this.score + 1;
      console.log(this.score);
      (<HTMLInputElement>document.getElementById("answer")).value = "";
    }
  }
  getNextCard() {
    this.service.getCard().then(data => {
   console.log(data);
   this.currKey = data[0];
   document.getElementById("hint1").innerHTML = data[1];//
   document.getElementById("hint2").innerHTML = data[2];
   document.getElementById("hint3").innerHTML = data[3];
   document.getElementById("hint4").innerHTML = data[4];
   document.getElementById("hint5").innerHTML = data[5];
});

    // document.getElementById("hint2").innerHTML = cardInfo[2];
    // document.getElementById("hint3").innerHTML = cardInfo[3];
    // document.getElementById("hint4").innerHTML = cardInfo[4];
    // document.getElementById("hint5").innerHTML = cardInfo[5];

  }
}
