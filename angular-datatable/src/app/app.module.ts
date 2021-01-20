import { PostsService } from './services/posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { WizzardComponent } from './components/wizzard/wizzard/wizzard.component';

import { AppRoutingModule } from './app-routing.module';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormModalComponent } from './components/Froms/form-modal/form-modal.component';
import { ReactiveFormComponent } from './components/Froms/reactive-form/reactive-form.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/store/store';

import { GoogleMapsModule } from '@angular/google-maps'
import { GoogleMapsAPIWrapper, AgmCoreModule } from '@agm/core';

import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import fr from '@angular/common/locales/fr';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
registerLocaleData(fr);






@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    WizzardComponent,
    DatatableComponent,
    FormModalComponent

  ],
  imports: [

    BrowserModule,
    NzButtonModule,
    CommonModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWxDX-KlmuFfvCvkc92MJoFrjR17FOpDM'
    }),
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NgbModule,
    NzModalModule,
    NzFormModule,
    NzBadgeModule,
    NzTypographyModule




  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
