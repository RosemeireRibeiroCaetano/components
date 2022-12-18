import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent  {

@Input() public clicando1 = false;
@Output() public clica = new EventEmitter();

clicando() {
  this.clica.emit(!this.clicando1);
}


}
