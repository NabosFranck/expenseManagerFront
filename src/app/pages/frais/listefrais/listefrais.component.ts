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
  FraisTabs: object;
  constructor(private frais: FraisService, private auth: NbAuthService) {
      
  }

  ngOnInit(): void {
    this.auth.getToken().subscribe((data) => {
      this.idCom =data.getPayload().id;
      console.log(this.idCom)
    }), 

    this.frais.getFrais(this.idCom).subscribe((Response: object)=> {

      let FraisTabs = [];

      Response['Frais'].forEach(element => {

        if (element.etat == true){
          FraisTabs.push({
            etat : "validé",
            trajet : element.trajet,
            repas : element.repas,
            nuit : element.nuit,
            client : element.nomclient,
          })
        }else{
          FraisTabs.push({
            etat : "en attente",
            trajet : element.trajet,
            repas : element.repas,
            nuit : element.nuit,
            client : element.nomclient,
          })
        }
        this.FraisTabs = FraisTabs;
      });
    
    });      
  }
         
}
