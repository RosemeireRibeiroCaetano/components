import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meuprimeirobotao',
  templateUrl: './meuprimeirobotao.component.html',
  styleUrls: ['./meuprimeirobotao.component.css']
})
export class MeuprimeirobotaoComponent  {

  @Input() txt = '';      //variavel
  @Output() acao = new EventEmitter<any>();

  exibir() {
  this.acao.emit()    //funcao
  }

}

