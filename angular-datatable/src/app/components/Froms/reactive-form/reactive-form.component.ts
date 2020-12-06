import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { google } from '@google/maps';
import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'reactive-form',
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
  public lat;
  public lng;
  public Position: any
  ngOnInit(): void {
    this.getLocation();
  }





  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          console.log(this.lat);
          console.log(this.lat);
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
