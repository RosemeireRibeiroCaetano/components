import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuprimeirobotaoComponent } from './meuprimeirobotao/meuprimeirobotao.component';
import { MeusegundobotaoComponent } from './meusegundobotao/meusegundobotao.component';
import { MeuterceirobotaoComponent } from './meuterceirobotao/meuterceirobotao.component';
import { MeuquartobotaoComponent } from './meuquartobotao/meuquartobotao.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuprimeirobotaoComponent,
    MeusegundobotaoComponent,
    MeuterceirobotaoComponent,
    MeuquartobotaoComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
