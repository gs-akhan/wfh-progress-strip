import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  nameControl = new FormControl("Azhar");
  addressControl = new FormControl("San Fransisco");

  constructor() { }
  ngOnInit(): void {
  }
  clickMe() {
    console.log("The Name will No");
    alert("Changing Name from Azhar to Azar");
    this.nameControl.setValue("Azar");
  }
}
