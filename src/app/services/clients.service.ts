import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  url = "http://localhost:8000"
  constructor( private http: HttpClient) { }
  
  getClient(){
   return this.http.get(this.url+'/apip/clients')
  }

}
