import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { InformazioniComponent } from './informazioni/informazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    InformazioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
