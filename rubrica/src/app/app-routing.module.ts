import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformazioniComponent } from './informazioni/informazioni.component';
import { PersonaComponent } from './persona/persona.component';


const routes: Routes = [
  {path:'', redirectTo: '/persona', pathMatch: 'full'},
  {path: 'informazioni/:id', component: InformazioniComponent},
  {path: 'persona', component: PersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
