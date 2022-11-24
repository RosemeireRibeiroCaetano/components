import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-meuterceirobotao',
  templateUrl: './meuterceirobotao.component.html',
  styleUrls: ['./meuterceirobotao.component.css']
})
export class MeuterceirobotaoComponent  {
  @Input() texto1 = "";
  @Input() disabled = false;
  @Output() acao3 = new EventEmitter<any>();

  clickDoBotao1() {
    this.acao3.emit()
  }
}
