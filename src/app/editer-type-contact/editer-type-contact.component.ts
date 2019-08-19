import { Component, OnInit } from '@angular/core';
import {ModelTypeContact} from '../../model/model.typeContact';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceTypeContact} from '../../service/service.typeContact';

@Component({
  selector: 'app-editer-type-contact',
  templateUrl: './editer-type-contact.component.html',
  styleUrls: ['./editer-type-contact.component.css']
})
export class EditerTypeContactComponent implements OnInit {

  typeContact: ModelTypeContact;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private typeContactService: ServiceTypeContact,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.typeContactService.getTypeContact(this.id)
      .subscribe(data => {
        this.typeContact = data as ModelTypeContact;
      }, error => {
        console.log(error);
      });
  }

  updateTypeContact() {
    this.typeContactService.updateTypeContact(this.typeContact)
      .subscribe(data1 => {
        console.log(data1);
        alert('Mise à jour effectuée');
        this.router.navigate(['types-contacts']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
