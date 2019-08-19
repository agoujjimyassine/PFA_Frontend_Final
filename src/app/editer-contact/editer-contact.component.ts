import {Component, Input, OnInit} from '@angular/core';
import {ModelTypeContact} from '../../model/model.typeContact';
import {ModelContact} from '../../model/model.contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceContact} from '../../service/service.contact';
import {ServiceTypeContact} from '../../service/service.typeContact';

@Component({
  selector: 'app-editer-contact',
  templateUrl: './editer-contact.component.html',
  styleUrls: ['./editer-contact.component.css']
})
export class EditerContactComponent implements OnInit {

  contact: ModelContact;
  typeContact: ModelTypeContact;
  typeContact1: ModelTypeContact;
  @Input() id: number;
  pageTypesContacts;

  constructor(private activatedRoute: ActivatedRoute,
              private contactService: ServiceContact,
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
    this.contactService.getContact(this.id)
      .subscribe(data => {
        this.contact = data as ModelContact;
        this.typeContact1 = this.contact.typeContact;
      }, error => {
        console.log(error);
      });
  }

  updateContact() {
    this.typeContactService.getTypeContact(this.typeContact1.id)
      .subscribe(data => {
        this.typeContact1 = this.contact.typeContact;
        this.contact.typeContact = this.typeContact1;
      }, error => {
        console.log(error);
      });
    this.contactService.updateContact(this.contact)
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
