import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { menu } from './partials/menu';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  defaultLayout = false;

  items: NbMenuItem[] = menu;

  constructor(private router: Router){

    /**
     * Ici on se met en écoute de chaque évènement du router
     * Dès qu'un évènement correspond à une fin de nvigation on regarde l'url pour
     * Modifier l'état de la variable et afficher cacher des partie de notre layout
     */
    router.events.subscribe(
      (event: NavigationEvent) => {

        if (event instanceof NavigationEnd){

          if (event.url === '/auth/login' || event.urlAfterRedirects === '/auth/login'){
            this.defaultLayout = false;
          }else{
            this.defaultLayout = true;
          }
        }
      }
    )
  }
}
