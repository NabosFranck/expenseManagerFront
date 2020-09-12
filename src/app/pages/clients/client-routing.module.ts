import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeclientComponent } from './listeclient/listeclient.component';
import { AjoutclientComponent } from './ajoutclient/ajoutclient.component';


const routes: Routes = [
  {
    path: 'liste', component: ListeclientComponent
  },
  {
    path: 'ajouter', component: AjoutclientComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
