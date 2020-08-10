import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-sp-summary',
  templateUrl: './sp-summary.component.html',
  styleUrls: ['./sp-summary.component.css']
})
export class SPSummaryComponent implements OnInit {
  score : string;
  mode : string;
  constructor(private _Activatedroute : ActivatedRoute, private router: Router, private service: GameService) { }

  ngOnInit(): void {
    this.score = this._Activatedroute.snapshot.paramMap.get("score");
    this.mode = this._Activatedroute.snapshot.paramMap.get("mode");
    document.getElementById("score").innerHTML = this.score;
    document.getElementById("mode").innerHTML = this.mode;
  }

  submitScore() {
    this.service.sendScore("chris", this.score, this.mode);
    this.router.navigate(['/main-menu']);
  }
}
