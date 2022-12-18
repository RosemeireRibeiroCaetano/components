import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-meuterceirobotao',
  templateUrl: './meuterceirobotao.component.html',
  styleUrls: ['./meuterceirobotao.component.css']
})
export class MeuterceirobotaoComponent {
  @Input() texto2 = "";
  @Input() disabled = false;
  @Output() acao2 = new EventEmitter<any>();

  clickDoBotao() {
    this.acao2.emit()
  }


}
