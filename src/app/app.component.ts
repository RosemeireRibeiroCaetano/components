import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public botaoverde = 'Completed';
  public botaovermelho = 'Ended';
  public botaoamarelo = 'Active';


  botao() {
    console.log('acao')
  }
  botao1() {
    console.log('acao')
  }
  botao2() {
    console.log('acao1')
  }
  botao3() {
    console.log('acao1')
  }
  botao4() {
   console.log('acao2')
  }
  botao5() {
    console.log('acao2')
  }

  funcaoDeClickNoCheckBox(x: boolean) {
    console.log('clicando aqui', x)
  }

  funcaoDeClickNoCheckBoxSegundoBtn(x: boolean) {
    console.log('clicando aqui', x)
  }

  funcaoDeClickNoquartoBtn(x: boolean) {
    console.log('clicando aqui', x)
  }

  funcaoDeClickNoTerceitoBtn(x: boolean) {
    console.log('clicando ', x)
  }

  funcaoDeClickNoQuintoBtn(x: boolean) {
    console.log('quinto')
  }






}



