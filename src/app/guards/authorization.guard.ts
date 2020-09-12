import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: NbAuthService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      /**
       * Ici grace au pipe -> taop on va s'imiscer dans la logique de fonctionnement
       * isAUthenticated retourne un Observable<boolean>
       * Le pipe tap nous permet de rentrer dans l'observable et de pouvoir travailler directement avec le boolean
       */
      return this.authService.isAuthenticated()
        .pipe(
          tap(authenticated => {
            if (!authenticated){
              this.router.navigate(['auth/login']);
            }
          })
        );
  }
}
