import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListeclientComponent } from './clients/listeclient/listeclient.component';
import { AjoutclientComponent } from './clients/ajoutclient/ajoutclient.component';
import { AjoutfraisComponent } from './frais/ajoutfrais/ajoutfrais.component';
import { ListefraisComponent } from './frais/listefrais/listefrais.component';


@NgModule({
  declarations: [ListeclientComponent, AjoutclientComponent, AjoutfraisComponent, ListefraisComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
