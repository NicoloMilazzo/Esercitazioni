import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { InformazioniComponent } from './components/informazioni/informazioni.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EsempioComponent } from './components/esempio/esempio.component';

import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    InformazioniComponent,
    EsempioComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
