import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkboxterceiro',
  templateUrl: './checkboxterceiro.component.html',
  styleUrls: ['./checkboxterceiro.component.css']
})
export class CheckboxterceiroComponent  {

 @Input() public variavelNgModelDeValor = false;
 @Output() public emitindoEventoDeClick = new EventEmitter();

 acaoDeClick() {
  this.emitindoEventoDeClick.emit(!this.variavelNgModelDeValor);
 }

}
