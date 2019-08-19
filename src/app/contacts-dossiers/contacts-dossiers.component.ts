import {Component, Input, OnInit} from '@angular/core';
import {ModelContactDossier} from '../../model/model.contactDossier';
import {ServiceContactDossier} from '../../service/service.contactDossier';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts-dossiers',
  templateUrl: './contacts-dossiers.component.html',
  styleUrls: ['./contacts-dossiers.component.css']
})
export class ContactsDossiersComponent implements OnInit {

  contactDossier: ModelContactDossier = new ModelContactDossier();
  listContactsDossiers;
  confirm: boolean;
  @Input() id: number;

  constructor(private contactDossierService: ServiceContactDossier, private router: Router) { }

  ngOnInit() {
    this.contactDossierService.getContactDossiersByIdDossier(this.id)
      .subscribe(data => {
        this.listContactsDossiers = data;
      }, error => {
        console.log(error);
      });
  }

  onEditContactDossier(id: number) {
    this.router.navigate(['editer-contact-dossier', id]);
  }

  onDeleteContactDossier(contactDossier: ModelContactDossier) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce contact ?');
    if (this.confirm) {
      this.contactDossierService.deleteContactDossier(contactDossier.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listContactsDossiers.splice(
            this.listContactsDossiers.indexOf(contactDossier), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addContactDossier(id: number) {
    this.router.navigate(['ajouter-contact-client-dossier', id]);
  }
}
