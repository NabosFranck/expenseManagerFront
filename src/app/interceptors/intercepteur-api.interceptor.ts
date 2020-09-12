import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';

@Injectable()
export class IntercepteurApiInterceptor implements HttpInterceptor {
  token: string;

  constructor(private authService: NbAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.body === null){

      //----------- Appel du service authService pour récupéré le token et le mettre dans la variables token -----------
      this.authService.getToken()
        .subscribe(
          (data) => {
            this.token = data.getValue();
          },
          (error) => {
            console.log('Pas de token trouvée !');
          }
        );
        //----------- On clone la requete pour travailler dessus -----------
      const clone = request.clone({
        setHeaders: { Authorization: 'Bearer ' + this.token}
      });
      
      //----------- On retourne la requetes cloner et modifié  -----------
      return next.handle(clone);
    }else{
      
      //----------- Si la requetes n'est pas nul est contient email ou password dans hasOwnProperty alors on push le token  -----------
      if (request.body.hasOwnProperty('email') && request.body.hasOwnProperty('password')){
        //----------- On clone la requete pour travailler dessus -----------
        const clone = request.clone({
          body: {
            "username": request.body['email'],
            "password": request.body['password'] 
          }
        });
        //----------- On retourne la requetes cloner et modifié  -----------
        return next.handle(clone);

       //----------- Si la requetes n'est pas nul on déclare le général -----------
      }else{

        this.authService.getToken()
        .subscribe(
          (data) => {
            this.token = data.getValue();
          },
          (error) => {
            console.log('Pas de token trouvée !');
          }
        );
      //----------- On clone la requete pour travailler dessus -----------
      const clone = request.clone({
        setHeaders: { Authorization: 'Bearer ' + this.token}
      });
        //----------- On retourne la requetes cloner et modifié  -----------
        return next.handle(clone);
      }
    
    }
  }
}

export const IntercepteurApiProvider = {
provide: HTTP_INTERCEPTORS,
useClass: IntercepteurApiInterceptor,
multi: true
};

  

