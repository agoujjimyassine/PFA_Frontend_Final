import {Component, OnInit, Output} from '@angular/core';
import {ModelContact} from '../../model/model.contact';
import {ModelTypeContact} from '../../model/model.typeContact';
import {ModelAgenceAssurance} from '../../model/model.agenceAssurance';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceContact} from '../../service/service.contact';
import {ServiceTypeContact} from '../../service/service.typeContact';
import {ServiceAgenceAssurance} from '../../service/service.agenceAssurance';

@Component({
  selector: 'app-ajouter-contact-agence-assurance',
  templateUrl: './ajouter-contact-agence-assurance.component.html',
  styleUrls: ['./ajouter-contact-agence-assurance.component.css']
})
export class AjouterContactAgenceAssuranceComponent implements OnInit {

  contactAgenceAssurance: ModelContact = new ModelContact();
  agenceAssurance: ModelAgenceAssurance;
  typeContact: ModelTypeContact;
  typeContact1: ModelTypeContact;
  @Output() id: number;
  pageTypesContacts;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private contactAgenceAssuranceService: ServiceContact,
              private typeContactService: ServiceTypeContact,
              private agenceAssuranceService: ServiceAgenceAssurance,
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
    this.agenceAssuranceService.getAgenceAssurance(this.id)
      .subscribe(data => {
        this.agenceAssurance = data as ModelAgenceAssurance;
      }, error => {
        console.log(error);
      });
  }

  saveContactAgenceAssurance(id1: number) {
    this.contactAgenceAssuranceService.saveContact(this.contactAgenceAssurance)
      .subscribe(data => {
        this.contactAgenceAssurance = data as ModelContact;

        this.typeContactService.getTypeContact(id1)
          .subscribe(data1 => {
            this.typeContact1 = data1 as ModelTypeContact;
            this.contactAgenceAssurance.typeContact = this.typeContact1;
            this.contactAgenceAssurance.agenceAssurance = this.agenceAssurance;

            this.contactAgenceAssuranceService.updateContact(this.contactAgenceAssurance)
              .subscribe(data2 => {

                alert('Contact ajouté avec succès');
                this.router.navigate(['dossiers']);

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
