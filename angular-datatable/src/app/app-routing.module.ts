import { WizzardComponent } from './components/wizzard/wizzard/wizzard.component';

import { ReactiveFormComponent } from './components/Froms/reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatatableComponent } from './components/Posts/datatable/datatable.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'Forms', component: ReactiveFormComponent },
  { path: 'smartable', component: WizzardComponent },
  { path: 'Display', component: DatatableComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
