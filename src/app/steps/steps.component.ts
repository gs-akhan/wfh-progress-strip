import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First Content';
        break;
      }
      case 1: {
        this.index = 'Second Content';
        break;
      }
      case 2: {
        this.index = 'Third Content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor() { }
  ngOnInit() { }
}
