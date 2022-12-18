import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuprimeirobotaoComponent } from './meuprimeirobotao/meuprimeirobotao.component';
import { MeusegundobotaoComponent } from './meusegundobotao/meusegundobotao.component';
import { MeuterceirobotaoComponent } from './meuterceirobotao/meuterceirobotao.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxsegundoComponent } from './checkboxsegundo/checkboxsegundo.component';
import { CheckboxterceiroComponent } from './checkboxterceiro/checkboxterceiro.component';
import { CheckboxquartoComponent } from './checkboxquarto/checkboxquarto.component';
import { CheckboxquintoComponent } from './checkboxquinto/checkboxquinto.component';






@NgModule({
  declarations: [
    AppComponent,
    MeuprimeirobotaoComponent,
    MeusegundobotaoComponent,
    MeuterceirobotaoComponent,
    CheckboxComponent,
    CheckboxsegundoComponent,
    CheckboxterceiroComponent,
    CheckboxquartoComponent,
    CheckboxquintoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
