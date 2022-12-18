import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meusegundobotao',
  templateUrl: './meusegundobotao.component.html',
  styleUrls: ['./meusegundobotao.component.css']
})
export class MeusegundobotaoComponent  {
  @Input() texto1 = "";
  @Input() disabled = false;
  @Output() acao1 = new EventEmitter<any>();

  clickDoBotao() {
    this.acao1.emit()
  }

}
