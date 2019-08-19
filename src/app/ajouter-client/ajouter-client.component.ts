import {Component, OnInit, Output} from '@angular/core';
import {ModelClient} from '../../model/model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ModelDossier} from '../../model/model.dossier';
import {ServiceClient} from '../../service/service.client';
import {ServiceDossier} from '../../service/service.dossier';
import {ModelTypeClient} from '../../model/model.typeClient';
import {ServiceTypeClient} from '../../service/service.typeClient';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {

  client: ModelClient = new ModelClient();
  dossier: ModelDossier;
  typeClient: ModelTypeClient;
  typeClient1: ModelTypeClient;
  @Output() id: number;
  pageTypesClients;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private clientService: ServiceClient,
              private dossierService: ServiceDossier,
              private typeClientService: ServiceTypeClient,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.typeClientService.getTypesClients()
      .subscribe(data => {
        this.pageTypesClients = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.dossierService.getDossier(this.id)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
      }, error => {
        console.log(error);
      });
  }

  saveClient(id1: number) {
    this.clientService.saveClient(this.client)
      .subscribe(data => {
        this.client = data as ModelClient;

        this.typeClientService.getTypeClient(id1)
          .subscribe(data1 => {
            this.typeClient1 = data1 as ModelTypeClient;
            this.client.typeClient = this.typeClient1;

            this.clientService.updateClient(this.client)
              .subscribe(data2 => {
                this.dossier.client = this.client;

                this.dossierService.updateDossier(this.dossier)
                  .subscribe(data3 => {
                    console.log(data3);
                  }, error => {
                    console.log(error);
                    alert('Probléme');
                  });

                alert('Client ajouté avec succès');
                this.router.navigate(['editer-dossier', this.id]);

              }, error => {
                console.log(error);
                alert('Probléme');
              });

          }, error => {
            console.log(error);
          });

        }, error => {
        console.log(error);
        alert('Probléme');
      });

  }

}
