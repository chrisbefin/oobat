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
      name: ['',Validators.required],
      mode: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(gameData) {
    this.gameCode = this.service.createSession(gameData.name, gameData.mode); // send the session to the server, receive the session ID
    this.createGameForm.reset();
    console.log(gameData.name, gameData.mode, this.gameCode);
    this.router.navigate(['/lobby']); // go to the lobby to wait for the game to start
  }

}
