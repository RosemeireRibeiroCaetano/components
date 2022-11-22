import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meusegundobotao',
  templateUrl: './meusegundobotao.component.html',
  styleUrls: ['./meusegundobotao.component.css']
})
export class MeusegundobotaoComponent  {
  @Input() text = "";
  @Output() acao2 = new EventEmitter<any>();


  exibir2() {
    this.acao2.emit()
  }
}
