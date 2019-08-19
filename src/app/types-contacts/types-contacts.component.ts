import { Component, OnInit } from '@angular/core';
import {ModelTypeContact} from '../../model/model.typeContact';
import {Router} from '@angular/router';
import {ServiceTypeContact} from '../../service/service.typeContact';

@Component({
  selector: 'app-types-contacts',
  templateUrl: './types-contacts.component.html',
  styleUrls: ['./types-contacts.component.css']
})
export class TypesContactsComponent implements OnInit {

  typeContact: ModelTypeContact = new ModelTypeContact();
  pageTypesContacts;
  confirm: boolean;

  constructor(private typeContactService: ServiceTypeContact, private router: Router) { }

  ngOnInit() {
    this.typeContactService.getTypesContacts()
      .subscribe(data => {
        this.pageTypesContacts = data;
      }, error => {
        console.log(error);
      });
  }

  onEditTypeContact(id: number) {
    this.router.navigate(['editer-type-contact', id]);
  }

  onDeleteTypeContact(typeContact: ModelTypeContact) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce type contact ?');
    if (this.confirm) {
      this.typeContactService.deleteTypeContact(typeContact.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageTypesContacts.content.splice(
            this.pageTypesContacts.content.indexOf(typeContact), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
