import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complexgrid',
  templateUrl: './complexgrid.component.html',
  styleUrls: ['./complexgrid.component.css']
})
export class ComplexgridComponent implements OnInit {

  languages = ["Rust", "Go", "Python", "Perl", "Cobalt", "Java"];
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
