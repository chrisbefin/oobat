import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent implements OnInit {
  gameIDForm;

  constructor(private service: GameService, private router: Router, private formBuilder: FormBuilder) {
    this.gameIDForm = this.formBuilder.group({
      name: '',
      gameID: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(playerData) {
    // Process checkout data here
    this.gameIDForm.reset();
    console.log(playerData.name, playerData.gameID);
    this.service.joinSession(playerData.gameID, playerData.name).then(status => {
      if (status == false) {
        alert("invalid session ID");
      }
      else {
        console.log("connected to multiplayer session");
        this.router.navigate(['/lobby']);
      }
    });
  }
}
