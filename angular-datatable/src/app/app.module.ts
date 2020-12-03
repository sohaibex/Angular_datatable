import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { WizzardComponent } from './components/wizzard/wizzard/wizzard.component';
import { DrivenFormComponent } from './components/Froms/driven-form/driven-form.component';
import { AppRoutingModule } from './app-routing.module';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormModalComponent } from './components/Froms/form-modal/form-modal.component';
import { ReactiveFormComponent } from './components/Froms/reactive-form/reactive-form.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/store/store';




@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    WizzardComponent,
    DrivenFormComponent,
    DatatableComponent,
    FormModalComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
