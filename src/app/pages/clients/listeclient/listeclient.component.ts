import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-listeclient',
  templateUrl: './listeclient.component.html',
  styleUrls: ['./listeclient.component.scss']
})
export class ListeclientComponent implements OnInit {
  idClient : any;
  ClientsTabs: any;
  constructor(private client: ClientsService, private auth: NbAuthService) { }

  ngOnInit(): void {
    this.idClient = this.client.getClient(1).subscribe((Response: any)=>{
    console.log(Response.societe);
    });
  }

}
