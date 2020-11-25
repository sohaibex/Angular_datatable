import { DatatableComponent } from './components/datatable/datatable.component';
import { WizzardComponent } from './components/wizzard/wizzard/wizzard.component';
import { DrivenFormComponent } from './components/Froms/driven-form/driven-form.component';
import { ReactiveFormComponent } from './components/Froms/reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  { path: "ReactiveForm", component: ReactiveFormComponent },
  { path: "DrivenForm", component: DrivenFormComponent },
  { path: "Wizzard", component: WizzardComponent },
  { path: "", redirectTo: '/Home', pathMatch: 'full' },
  { path: "Home", component: DatatableComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
