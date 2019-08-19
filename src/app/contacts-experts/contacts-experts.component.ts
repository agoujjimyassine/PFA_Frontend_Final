import {Component, Input, OnInit} from '@angular/core';
import {ModelContact} from '../../model/model.contact';
import {ServiceContact} from '../../service/service.contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts-experts',
  templateUrl: './contacts-experts.component.html',
  styleUrls: ['./contacts-experts.component.css']
})
export class ContactsExpertsComponent implements OnInit {

  contactExpert: ModelContact = new ModelContact();
  listContactsExperts;
  confirm: boolean;
  @Input() id: number;


  constructor(private contactExpertService: ServiceContact, private router: Router) { }

  ngOnInit() {
    this.contactExpertService.getContactsByIdExpert(this.id)
      .subscribe(data => {
        this.listContactsExperts = data;
      }, error => {
        console.log(error);
      });
  }

  onEditContactexpert(id: number) {
    this.router.navigate(['editer-contact', id]);
  }

  onDeleteContactExpert(contactExpert: ModelContact) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce contact ?');
    if (this.confirm) {
      this.contactExpertService.deleteContact(contactExpert.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listContactsExperts.splice(
            this.listContactsExperts.indexOf(contactExpert), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addContactExpert(id: number) {
    this.router.navigate(['ajouter-contact-expert', id]);
  }
}
