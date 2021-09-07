import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformazioniComponent } from './components/informazioni/informazioni.component';
import { PersonaComponent } from './components/persona/persona.component';



const routes: Routes = [
  {path:'', redirectTo: 'persona', pathMatch: 'full'},
  {path: 'informazioni/:id', component: InformazioniComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'prova', loadChildren: ()=> import('./prova/prova.module').then(m=>m.ProvaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
