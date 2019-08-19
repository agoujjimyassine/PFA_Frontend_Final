import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelContactDossier} from '../../model/model.contactDossier';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServiceContactDossier} from '../../service/service.contactDossier';
import {ModelContact} from '../../model/model.contact';
import {ServiceContact} from '../../service/service.contact';
import {ModelTypeContact} from '../../model/model.typeContact';
import {ServiceTypeContact} from '../../service/service.typeContact';

@Component({
  selector: 'app-ajouter-contact-dossier',
  templateUrl: './ajouter-contact-dossier.component.html',
  styleUrls: ['./ajouter-contact-dossier.component.css']
})
export class AjouterContactDossierComponent implements OnInit {

  contactDossier: ModelContactDossier = new ModelContactDossier();
  contact: ModelContact = new ModelContact();
  dossier: ModelDossier;
  typeContact: ModelTypeContact;
  typeContact1: ModelTypeContact;
  @Output() id: number;
  pageTypesContacts;
  id1: number;


  constructor(private activatedRoute: ActivatedRoute,
              private contactDossierService: ServiceContactDossier,
              private contactService: ServiceContact,
              private typeContactService: ServiceTypeContact,
              private dossierService: ServiceDossier,
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
    this.dossierService.getDossier(this.id)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
      }, error => {
        console.log(error);
      });
  }

  saveContactDossier(id1: number) {
    this.contactService.saveContact(this.contact)
      .subscribe(data => {
        this.contact = data as ModelContact;

        this.typeContactService.getTypeContact(id1)
          .subscribe(data1 => {
            this.typeContact1 = data1 as ModelTypeContact;
            this.contact.typeContact = this.typeContact1;

            this.contactService.updateContact(this.contact)
              .subscribe(data2 => {

                this.contactDossierService.saveContactDossier(this.contactDossier)
                  .subscribe(data3 => {
                    this.contactDossier = data3 as ModelContactDossier;
                    this.contactDossier.dossier = this.dossier;
                    this.contactDossier.contact = this.contact;
                    this.contactDossierService.updateContactDossier(this.contactDossier)
                      .subscribe(data4 => {
                        console.log(data4);
                      }, error => {
                        console.log(error);
                        alert('Probléme');
                      });
                  }, error => {
                    console.log(error);
                  });

                alert('Contact Dossier ajouté avec succès');
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
      });
  }

}
