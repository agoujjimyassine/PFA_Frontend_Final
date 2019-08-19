import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceClient} from '../../service/service.client';
import {ModelClient} from '../../model/model.client';
import {ServiceTypeClient} from '../../service/service.typeClient';
import {ModelTypeClient} from '../../model/model.typeClient';

@Component({
  selector: 'app-editer-client',
  templateUrl: './editer-client.component.html',
  styleUrls: ['./editer-client.component.css']
})
export class EditerClientComponent implements OnInit {

  client: ModelClient;
  typeClient: ModelTypeClient;
  typeClient1: ModelTypeClient;
  @Input() id: number;
  pageTypesClients;

  constructor(private clientService: ServiceClient,
              private typeClientService: ServiceTypeClient,
              private router: Router) {}

  ngOnInit() {
    this.typeClientService.getTypesClients()
      .subscribe(data => {
        this.pageTypesClients = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.clientService.getClient(this.id)
      .subscribe(data => {
        this.client = data as ModelClient;
        this.typeClient1 = this.client.typeClient;
      }, error => {
        console.log(error);
      });
  }

  updateClient() {
    this.typeClientService.getTypeClient(this.typeClient1.id)
      .subscribe(data => {
        this.typeClient1 = this.client.typeClient;
        this.client.typeClient = this.typeClient1;
      }, error => {
        console.log(error);
      });
    this.clientService.updateClient(this.client)
          .subscribe(data1 => {
            console.log(data1);
            alert('Mise à jour effectuée');
            this.router.navigate(['dossiers']);
          }, error => {
            console.log(error);
            alert('Probléme');
          });
  }
}
