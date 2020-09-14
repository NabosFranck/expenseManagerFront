import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-listeclient',
  templateUrl: './listeclient.component.html',
  styleUrls: ['./listeclient.component.scss']
})
export class ListeclientComponent implements OnInit {
  clientTabs: any;
  
  
  constructor(private client: ClientsService, private auth: NbAuthService) { }

  ngOnInit(): void {
    this.client.getClient().subscribe((Response:any) =>{
      let clientTabs = [];
      Response['Client'].forEach(element => {
        clientTabs.push({
          nom : element.societe,
        })
        this.clientTabs= clientTabs;
        console.log(this.clientTabs)
      })
    })
  }
}
