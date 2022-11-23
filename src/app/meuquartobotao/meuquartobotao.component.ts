import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meuquartobotao',
  templateUrl: './meuquartobotao.component.html',
  styleUrls: ['./meuquartobotao.component.css']
})
export class MeuquartobotaoComponent {
@Input() text4 = '';
@Input() disabled = false;
@Output() acao4 = new EventEmitter<any>();

true() {
  this.acao4.emit()
}
}
