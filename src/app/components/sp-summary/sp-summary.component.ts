import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-sp-summary',
  templateUrl: './sp-summary.component.html',
  styleUrls: ['./sp-summary.component.css']
})
export class SPSummaryComponent implements OnInit {
  score : number;
  mode : string;
  submitted : boolean = false;
  highScoreForm;
  constructor(private _Activatedroute : ActivatedRoute, private router: Router, private service: GameService,  private formBuilder: FormBuilder) {
    this.highScoreForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(8)]]
    });
  }

  ngOnInit(): void {
    this.score = this.service.currSPScore;
    this.mode = this.service.currSPGameMode;
  }

  onSubmit(scoreData) {
    this.service.sendScore(scoreData.name);
    this.highScoreForm.reset(); //empty out the form
    this.router.navigate(['/main-menu']); // go to the lobby to wait for the game to start
  }
}
