import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'clients', loadChildren: () => import('./clients/client.module')
      .then(m => m.ClientModule)
  },
  {
    path: 'frais', loadChildren: () => import('./frais/frais.module')
      .then(m => m.FraisModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
