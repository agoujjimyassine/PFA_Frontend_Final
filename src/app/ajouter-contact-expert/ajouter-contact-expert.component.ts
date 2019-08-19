import {Component, OnInit, Output} from '@angular/core';
import {ModelContact} from '../../model/model.contact';
import {ModelTypeContact} from '../../model/model.typeContact';
import {ModelExpert} from '../../model/model.expert';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceContact} from '../../service/service.contact';
import {ServiceTypeContact} from '../../service/service.typeContact';
import {ServiceExpert} from '../../service/service.expert';

@Component({
  selector: 'app-ajouter-contact-expert',
  templateUrl: './ajouter-contact-expert.component.html',
  styleUrls: ['./ajouter-contact-expert.component.css']
})
export class AjouterContactExpertComponent implements OnInit {

  contactExpert: ModelContact = new ModelContact();
  expert: ModelExpert;
  typeContact: ModelTypeContact;
  typeContact1: ModelTypeContact;
  @Output() id: number;
  pageTypesContacts;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private contactExpertService: ServiceContact,
              private typeContactService: ServiceTypeContact,
              private expertService: ServiceExpert,
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
    this.expertService.getExpert(this.id)
      .subscribe(data => {
        this.expert = data as ModelExpert;
      }, error => {
        console.log(error);
      });
  }

  saveContactExpert(id1: number) {
    this.contactExpertService.saveContact(this.contactExpert)
      .subscribe(data => {
        this.contactExpert = data as ModelContact;

        this.typeContactService.getTypeContact(id1)
          .subscribe(data1 => {
            this.typeContact1 = data1 as ModelTypeContact;
            this.contactExpert.typeContact = this.typeContact1;
            this.contactExpert.expert = this.expert;

            this.contactExpertService.updateContact(this.contactExpert)
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
