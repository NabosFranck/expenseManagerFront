import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraisService {
  url = "http://localhost:8000";
  constructor( private http: HttpClient) { }

  getFrais(id){
   return this.http.get(this.url+'/apip/commercial/frais/'+id)
    
  }
}
