import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudden-death',
  templateUrl: './sudden-death.component.html',
  styleUrls: ['./sudden-death.component.css']
})
export class SuddenDeathComponent implements OnInit {
  score : number;
  timeLeft : number = 60;
  constructor() { }

  ngOnInit(): void {
  }

  checkAnswer() {

  }
}
