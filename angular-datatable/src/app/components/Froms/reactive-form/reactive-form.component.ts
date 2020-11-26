import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  LoginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  })
  add() {

  }
  constructor() { }

  ngOnInit(): void {
  }

}
