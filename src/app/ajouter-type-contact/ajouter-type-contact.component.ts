import { Component, OnInit } from '@angular/core';
import {ModelTypeContact} from '../../model/model.typeContact';
import {Router} from '@angular/router';
import {ServiceTypeContact} from '../../service/service.typeContact';

@Component({
  selector: 'app-ajouter-type-contact',
  templateUrl: './ajouter-type-contact.component.html',
  styleUrls: ['./ajouter-type-contact.component.css']
})
export class AjouterTypeContactComponent implements OnInit {

  typeContact: ModelTypeContact = new ModelTypeContact();

  constructor(private typeContactService: ServiceTypeContact, private router: Router) { }

  ngOnInit() {
  }

  saveTypeContact() {
    this.typeContactService.saveTypeContact(this.typeContact)
      .subscribe(data => {
        this.typeContact = data as ModelTypeContact;
        alert('Type Contact ajouté avec succès');
        this.router.navigate(['types-contacts']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
