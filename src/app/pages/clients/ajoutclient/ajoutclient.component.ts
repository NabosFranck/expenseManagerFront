import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.scss']
})
export class AjoutclientComponent implements OnInit {

  clientTabs: any;
  tabAjouter:{ societe: string}
  
  constructor(private client: ClientsService, private auth: NbAuthService) { }

  ngOnInit(): void {
    
  }
  RecupClient(event){
      
    this.tabAjouter = {
      societe: event["toElement"].form[0].value,
    }
    this.client.postClient(this.tabAjouter).subscribe((Response)=>{
      console.log(Response);
    });  
  }  
  refresh(){
    window.location.reload();
  }
}
