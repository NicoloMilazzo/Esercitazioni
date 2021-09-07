import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './component/lazy-loading/lazy-loading.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: LazyLoadingComponent },
  
];


@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class ProvaModule { }
