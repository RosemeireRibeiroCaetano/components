import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuprimeirobotaoComponent } from './meuprimeirobotao/meuprimeirobotao.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuprimeirobotaoComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
