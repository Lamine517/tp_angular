import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { ContactComponent } from './contact/contact.component';
import { QcmComponent } from './qcm/qcm.component';
import { EditQcmComponent } from './qcm/edit-qcm/edit-qcm.component';
import { AddQcmComponent } from './qcm/add-qcm/add-qcm.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AProposComponent,
    NosServicesComponent,
    ContactComponent,
    QcmComponent,
    EditQcmComponent,
    AddQcmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
