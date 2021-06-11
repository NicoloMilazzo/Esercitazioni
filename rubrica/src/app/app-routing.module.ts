import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformazioniComponent } from './informazioni/informazioni.component';


const routes: Routes = [
  {path:'', redirectTo: '/persona', pathMatch: 'full'},
  {path: 'informazioni', component: InformazioniComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
