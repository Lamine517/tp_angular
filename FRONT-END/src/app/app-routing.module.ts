import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { AddQcmComponent } from './qcm/add-qcm/add-qcm.component';
import { EditQcmComponent } from './qcm/edit-qcm/edit-qcm.component';
import { QcmComponent } from './qcm/qcm.component';

const routes: Routes = [
  {path: 'accueil', component:AccueilComponent},
  {path: 'a-propos', component:AProposComponent},
  {path: 'nos-services', component:NosServicesComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'qcm', component:QcmComponent},
  {path: 'qcm/add', component:AddQcmComponent},
  {path: 'qcm/edit', component:EditQcmComponent},
  {path: '**', redirectTo: 'accueil'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
