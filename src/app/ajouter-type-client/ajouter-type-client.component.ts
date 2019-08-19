import {Component, OnInit} from '@angular/core';
import {ModelTypeClient} from '../../model/model.typeClient';
import {ServiceTypeClient} from '../../service/service.typeClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-type-client',
  templateUrl: './ajouter-type-client.component.html',
  styleUrls: ['./ajouter-type-client.component.css']
})
export class AjouterTypeClientComponent implements OnInit {

  typeClient: ModelTypeClient = new ModelTypeClient();

  constructor(private router: Router, private typeClientService: ServiceTypeClient) {
  }

  ngOnInit() {
  }

  saveTypeClient() {
    this.typeClientService.saveTypeClient(this.typeClient)
      .subscribe(data => {
        this.typeClient = data as ModelTypeClient;
        alert('Type Client ajouté avec succès');
        this.router.navigate(['types-clients']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
