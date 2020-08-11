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
  submitted : boolean = false;
  constructor(private _Activatedroute : ActivatedRoute, private router: Router, private service: GameService) { }

  ngOnInit(): void {
    this.score = this._Activatedroute.snapshot.paramMap.get("score");
    this.mode = this._Activatedroute.snapshot.paramMap.get("mode");
  }


  submitScore() {
    if (this.submitted == false) {
      let name = (<HTMLInputElement>document.getElementById("name")).value;
      if (name == "") {
        name = "anon";
      }
      this.service.sendScore(name, this.score, this.mode);
      this.submitted = true;
      (<HTMLInputElement>document.getElementById("name")).value = "";
      location.reload();
    }
    else {
      alert("score has already been submitted")
    }
  }
}
