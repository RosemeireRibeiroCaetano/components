import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkboxsegundo',
  templateUrl: './checkboxsegundo.component.html',
  styleUrls: ['./checkboxsegundo.component.css']
})
export class CheckboxsegundoComponent {
  @Input() public clicando2 = false;
  @Output() public clica = new EventEmitter();

  clicando() {
    this.clica.emit(!this.clicando2)
  }

}
