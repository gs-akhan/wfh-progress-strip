import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.css']
})
export class Grid1Component implements OnInit {

  languages = ["Rust", "Go Lang", "Java", "ErLang", "Perl"];
  constructor() { }

  ngOnInit(): void {
  }

}
