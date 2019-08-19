import { Component, OnInit } from '@angular/core';
import {ModelContactDossier} from '../../model/model.contactDossier';
import {ModelTypeContact} from '../../model/model.typeContact';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceTypeContact} from '../../service/service.typeContact';
import {ServiceContact} from '../../service/service.contact';
import {ServiceContactDossier} from '../../service/service.contactDossier';

@Component({
  selector: 'app-editer-contact-dossier',
  templateUrl: './editer-contact-dossier.component.html',
  styleUrls: ['./editer-contact-dossier.component.css']
})
export class EditerContactDossierComponent implements OnInit {

  contactDossier: ModelContactDossier;
  typeContact: ModelTypeContact;
  typeContact1: ModelTypeContact;
  id: number;
  pageTypesContacts;

  constructor(private activatedRoute: ActivatedRoute,
              private contactService: ServiceContact,
              private contactDossierService: ServiceContactDossier,
              private typeContactService: ServiceTypeContact,
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
    this.contactDossierService.getContactDossier(this.id)
      .subscribe(data => {
        this.contactDossier = data as ModelContactDossier;
        this.typeContact1 = this.contactDossier.contact.typeContact;
      }, error => {
        console.log(error);
      });
  }

  updateContactDossier() {
    this.typeContactService.getTypeContact(this.typeContact1.id)
      .subscribe(data => {
        this.typeContact1 = this.contactDossier.contact.typeContact;
        this.contactDossier.contact.typeContact = this.typeContact1;
      }, error => {
        console.log(error);
      });
    this.contactService.updateContact(this.contactDossier.contact)
      .subscribe(data1 => {
        console.log(data1);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
    this.contactDossierService.updateContactDossier(this.contactDossier)
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
