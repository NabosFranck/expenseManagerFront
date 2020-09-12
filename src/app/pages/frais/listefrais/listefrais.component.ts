import { Component, OnInit } from '@angular/core';
import { FraisService } from 'src/app/services/frais.service';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-listefrais',
  templateUrl: './listefrais.component.html',
  styleUrls: ['./listefrais.component.scss']
})
export class ListefraisComponent implements OnInit {
  idCom : number
  FraisTabs: any;
  constructor(private frais: FraisService, private auth: NbAuthService) {
      
  }

  ngOnInit(): void {
    this.auth.getToken()
        .subscribe(
          (data) => {
           this.idCom =data.getPayload().id;
          }
        ), 
        this.frais.getFrais(this.idCom).subscribe((Response: any)=> {
          this.FraisTabs = Response;
        });      
      }
         
}
