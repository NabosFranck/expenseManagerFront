import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListefraisComponent } from './listefrais/listefrais.component';
import { AjoutfraisComponent } from './ajoutfrais/ajoutfrais.component';


const routes: Routes = [
  {
    path: 'liste', component: ListefraisComponent
  },
  {
    path: 'ajouter', component: AjoutfraisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FraisRoutingModule { }
