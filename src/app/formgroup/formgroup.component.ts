import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {


  volunteerForm: FormGroup;
  locations = ["Hyderabad", "Bangalore", "Delhi", "Mumbai"];
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  addPreference() {
    (this.volunteerForm.get("preferences") as FormArray).push(this.fb.control(''));
  }

  removeEmail(index) {
    (this.volunteerForm.get("preferences") as FormArray).removeAt(index);
  }
  initForm() {
    this.volunteerForm = this.fb.group({
      name: "",
      phoneNumber: "",
      location: "",
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      preferences: this.fb.array([this.fb.control('')])
    })
  }

  submitForm() {
    console.log(this.volunteerForm.value);
  }
  get preferences(): FormArray {
    return this.volunteerForm.get("preferences") as FormArray
  }

}
