import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  createGameForm;
  gameCode : string;
  constructor(private service: GameService, private router: Router, private formBuilder: FormBuilder) {
    this.createGameForm = this.formBuilder.group({
      name: '',
      mode: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(gameData) {
    // Process checkout data here
    this.gameCode = this.service.createSession(gameData.name, gameData.mode);
    this.createGameForm.reset();
    console.log(gameData.name, gameData.mode, this.gameCode);
    this.router.navigate(['/lobby']);
  }

}
