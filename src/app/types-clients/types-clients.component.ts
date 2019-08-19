import { Component, OnInit } from '@angular/core';
import {ModelTypeClient} from '../../model/model.typeClient';
import {Router} from '@angular/router';
import {ServiceTypeClient} from '../../service/service.typeClient';

@Component({
  selector: 'app-types-clients',
  templateUrl: './types-clients.component.html',
  styleUrls: ['./types-clients.component.css']
})
export class TypesClientsComponent implements OnInit {

  typeClient: ModelTypeClient = new ModelTypeClient();
  pageTypesClients;
  confirm: boolean;

  constructor(private typeClientService: ServiceTypeClient, private router: Router) { }

  ngOnInit() {
    this.typeClientService.getTypesClients()
      .subscribe(data => {
        this.pageTypesClients = data;
      }, error => {
        console.log(error);
      });
  }

  onEditTypeClient(id: number) {
    this.router.navigate(['editer-type-client', id]);
  }

  onDeleteTypeClient(typeClient: ModelTypeClient) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce type client ?');
    if (this.confirm) {
      this.typeClientService.deleteTypeClient(typeClient.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageTypesClients.content.splice(
            this.pageTypesClients.content.indexOf(typeClient), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
