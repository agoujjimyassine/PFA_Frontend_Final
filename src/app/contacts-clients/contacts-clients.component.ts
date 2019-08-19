import {Component, Input, OnInit} from '@angular/core';
import {ModelContact} from '../../model/model.contact';
import {Router} from '@angular/router';
import {ServiceContact} from '../../service/service.contact';

@Component({
  selector: 'app-contacts-clients',
  templateUrl: './contacts-clients.component.html',
  styleUrls: ['./contacts-clients.component.css']
})
export class ContactsClientsComponent implements OnInit {

  contactClient: ModelContact = new ModelContact();
  listContactsClients;
  confirm: boolean;
  @Input() id: number;

  constructor(private contactClientService: ServiceContact, private router: Router) { }

  ngOnInit() {
    this.contactClientService.getContactsByIdClient(this.id)
      .subscribe(data => {
        this.listContactsClients = data;
      }, error => {
        console.log(error);
      });
  }

  onEditContactClient(id: number) {
    this.router.navigate(['editer-contact', id]);
  }

  onDeleteContactClient(contactClient: ModelContact) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce contact ?');
    if (this.confirm) {
      this.contactClientService.deleteContact(contactClient.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listContactsClients.splice(
            this.listContactsClients.indexOf(contactClient), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addContactClient(id: number) {
    this.router.navigate(['ajouter-contact-client', id]);
  }
}
