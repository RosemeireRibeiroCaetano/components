import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkboxquarto',
  templateUrl: './checkboxquarto.component.html',
  styleUrls: ['./checkboxquarto.component.css']
})
export class CheckboxquartoComponent {

 @Input() public variavelNgModelDeValor = false;
 @Output() public clica = new EventEmitter();

 acaoDeClick() {
  this.clica.emit(!this.acaoDeClick);
 }

}
