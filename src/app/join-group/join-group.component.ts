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
    this.gameIDForm = this.formBuilder.group({ // template for the form
      name: '',
      gameID: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(playerData) {
    this.gameIDForm.reset(); // clear the form
    console.log(playerData.name, playerData.gameID);
    this.service.joinSession(playerData.gameID, playerData.name).then(data => { //data[0] is status string, data[1] is player number
      if (data[0] == 'false') {
        alert("invalid session ID");
      }
      else if (data[0] == 'true') {
        console.log("connected to multiplayer session");
        this.service.currPlayerName = playerData.name; //update name
        this.service.currPlayerNum = data[1]; // update player number
        this.router.navigate(['/lobby']);
      }
    });
  }
}
