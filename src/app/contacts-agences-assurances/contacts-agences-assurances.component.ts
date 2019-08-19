import {Component, Input, OnInit} from '@angular/core';
import {ModelContact} from '../../model/model.contact';
import {ServiceContact} from '../../service/service.contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts-agences-assurances',
  templateUrl: './contacts-agences-assurances.component.html',
  styleUrls: ['./contacts-agences-assurances.component.css']
})
export class ContactsAgencesAssurancesComponent implements OnInit {

  contactAgenceAssurance: ModelContact = new ModelContact();
  listContactsAgencesAssurances;
  confirm: boolean;
  @Input() id: number;

  constructor(private contactAgenceAssuranceService: ServiceContact, private router: Router) { }

  ngOnInit() {
    this.contactAgenceAssuranceService.getContactsByIdAgenceAssurance(this.id)
      .subscribe(data => {
        this.listContactsAgencesAssurances = data;
      }, error => {
        console.log(error);
      });
  }

  onEditContactAgenceAssurance(id: number) {
    this.router.navigate(['editer-contact', id]);
  }

  onDeleteContactAgenceAssurance(contactAgenceAssurance: ModelContact) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce contact ?');
    if (this.confirm) {
      this.contactAgenceAssuranceService.deleteContact(contactAgenceAssurance.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listContactsAgencesAssurances.splice(
            this.listContactsAgencesAssurances.indexOf(contactAgenceAssurance), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addContactAgenceAssurance(id: number) {
    this.router.navigate(['ajouter-contact-agence-assurance', id]);
  }
}
