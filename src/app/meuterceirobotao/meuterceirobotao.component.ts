import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meuterceirobotao',
  templateUrl: './meuterceirobotao.component.html',
  styleUrls: ['./meuterceirobotao.component.css']
})
export class MeuterceirobotaoComponent {
 @Input() text3 = '';
 @Output() acao3 = new EventEmitter<any>();


 enviar3() {
  this.acao3.emit()
 }
}
