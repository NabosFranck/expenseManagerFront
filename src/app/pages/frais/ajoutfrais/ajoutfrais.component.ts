import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NbAuthService } from '@nebular/auth';
import { ClientsService } from 'src/app/services/clients.service';
import { FraisService } from 'src/app/services/frais.service';

@Component({
  selector: 'app-ajoutfrais',
  templateUrl: './ajoutfrais.component.html',
  styleUrls: ['./ajoutfrais.component.scss']
})
export class AjoutfraisComponent implements OnInit {

  clientTabs: any;
  idCom: any;
  tabAjouter: { trajet: number; repas: number; nuit: number; etat: boolean; justificatifs: string; client: string; commercial: string; };

  
  constructor(private client: ClientsService, private auth: NbAuthService, private frais: FraisService) { }

  ngOnInit(): void {
    this.client.getClient().subscribe((Response:any) =>{
      let clientTabs = [];
      Response['Client'].forEach(element => {
        clientTabs.push({
          nom : element.societe,
          id: element.id,
        })
        this.clientTabs= clientTabs;
      })
    })
  }

  
 
  RecupFrais(event){
    this.auth.getToken().subscribe((data) => {
      this.idCom = data.getPayload().id;
    }), 
    console.log(event);
    this.tabAjouter = {
      trajet: Number(event["toElement"].form[0].value),
      repas: Number(event["toElement"].form[1].value),
      nuit: Number(event["toElement"].form[2].value),
      etat: event["toElement"].form[3].checked,
      justificatifs: event["toElement"].form[5].value,
      client: "/apip/clients/"+event["toElement"].form[4].value,
      commercial: "/apip/commercials/"+this.idCom,
    }

      console.log(this.tabAjouter);
      this.frais.postFrais(this.tabAjouter).subscribe((Response)=>{
        console.log(Response);
      });
  }
  refresh(){
    window.location.reload();
  }
}
