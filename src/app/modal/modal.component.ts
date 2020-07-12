import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  isVisible = false;
  isVisibleNew = false
  constructor() { }
  ngOnInit() { }
  showModal(): void {
    this.isVisible = true;
  }

  showModalNew() {
    this.isVisibleNew = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleNew = false;
  }

}
