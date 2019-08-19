import {Component, OnInit, Output} from '@angular/core';
import {ModelContact} from '../../model/model.contact';
import {ModelTypeContact} from '../../model/model.typeContact';
import {ModelClient} from '../../model/model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceContact} from '../../service/service.contact';
import {ServiceTypeContact} from '../../service/service.typeContact';
import {ServiceClient} from '../../service/service.client';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact-client.component.html',
  styleUrls: ['./ajouter-contact-client.component.css']
})
export class AjouterContactClientComponent implements OnInit {

  contactClient: ModelContact = new ModelContact();
  client: ModelClient;
  typeContact: ModelTypeContact;
  typeContact1: ModelTypeContact;
  @Output() id: number;
  pageTypesContacts;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private contactClientService: ServiceContact,
              private typeContactService: ServiceTypeContact,
              private clientService: ServiceClient,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.typeContactService.getTypesContacts()
      .subscribe(data => {
        this.pageTypesContacts = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.clientService.getClient(this.id)
      .subscribe(data => {
        this.client = data as ModelClient;
      }, error => {
        console.log(error);
      });
  }

  saveContactClient(id1: number) {
    this.contactClientService.saveContact(this.contactClient)
      .subscribe(data => {
        this.contactClient = data as ModelContact;

        this.typeContactService.getTypeContact(id1)
          .subscribe(data1 => {
            this.typeContact1 = data1 as ModelTypeContact;
            this.contactClient.typeContact = this.typeContact1;
            this.contactClient.client = this.client;

            this.contactClientService.updateContact(this.contactClient)
              .subscribe(data2 => {

                alert('Contact ajouté avec succès');
                this.router.navigate(['dossiers']);

              }, error => {
                console.log(error);
                alert('Probléme');
              });

          }, error => {
            console.log(error);
          });

      }, error => {
        console.log(error);
      });
  }
}
