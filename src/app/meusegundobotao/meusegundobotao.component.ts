import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meusegundobotao',
  templateUrl: './meusegundobotao.component.html',
  styleUrls: ['./meusegundobotao.component.css']
})
export class MeusegundobotaoComponent {
  @Input() texto = "";
  @Input() disabled = false;
  @Output() acao2 = new EventEmitter<any>();

  clickDoBotao() {
    this.acao2.emit()
  }

}
