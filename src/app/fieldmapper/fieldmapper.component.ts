import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldmapper',
  templateUrl: './fieldmapper.component.html',
  styleUrls: ['./fieldmapper.component.css']
})
export class FieldmapperComponent implements OnInit {

  public languages = [
    {
      name: "Rust",
      description: "Rust Lang",
      editable: true
    },
    {
      name: "Go",
      description: "Go Lang",
      editable: true
    },
    {
      name: "Java",
      description: "Java",
      editable: false
    },
    {
      name: "Python",
      description: "Python Lang",
      editable: false
    },
    {
      name: "Erlang",
      description: "Erlang Prog",
      editable: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
