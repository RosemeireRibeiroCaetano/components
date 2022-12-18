import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkboxquinto',
  templateUrl: './checkboxquinto.component.html',
  styleUrls: ['./checkboxquinto.component.css']
})
export class CheckboxquintoComponent  {


  @Input() public clicando4 = false;
  @Output() public clica = new EventEmitter();

  clicando() {
    this.clica.emit(!this.clicando4);
  }

}
