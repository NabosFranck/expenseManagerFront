import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NbAuthService } from '@nebular/auth';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-ajoutfrais',
  templateUrl: './ajoutfrais.component.html',
  styleUrls: ['./ajoutfrais.component.scss']
})
export class AjoutfraisComponent implements OnInit {

  clientTabs: any;
  idCom: any;
  TabAjouter: { trajet: any; repas: any; nuit: any; etat: any; societe: any; commercial: any; };
  
  
  constructor(private client: ClientsService, private auth: NbAuthService) { }

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

    this.TabAjouter = {
      trajet: event["toElement"].form[0].value,
      repas: event["toElement"].form[1].value,
      nuit: event["toElement"].form[2].value,
      etat: event["toElement"].form[3].checked,
      societe: event["toElement"].form[4].value,
      commercial: this.idCom,
    }
      console.log(this.TabAjouter);
  }
}
