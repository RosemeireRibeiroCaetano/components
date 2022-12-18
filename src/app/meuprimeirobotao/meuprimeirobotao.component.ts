import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meuprimeirobotao',
  templateUrl: './meuprimeirobotao.component.html',
  styleUrls: ['./meuprimeirobotao.component.css']
})
export class MeuprimeirobotaoComponent  {
  @Input() texto = "";
  @Input() disabled = false;
  @Output() acao = new EventEmitter<any>()

  clickDoBotao() {
    this.acao.emit()
  }

}
