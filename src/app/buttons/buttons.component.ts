import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  cont = 1;
  buttons = ['1'];

  constructor() {}

  ngOnInit(): void {}

  onCreateButton() {
    this.cont++;
    this.buttons.push(this.cont.toString());
  }
}
