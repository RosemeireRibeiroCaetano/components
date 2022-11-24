import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuprimeirobotaoComponent } from './meuprimeirobotao/meuprimeirobotao.component';
import { MeusegundobotaoComponent } from './meusegundobotao/meusegundobotao.component';
import { MeuterceirobotaoComponent } from './meuterceirobotao/meuterceirobotao.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuprimeirobotaoComponent,
    MeusegundobotaoComponent,
    MeuterceirobotaoComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
