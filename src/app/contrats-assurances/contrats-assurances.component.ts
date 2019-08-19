import {Component, Input, OnInit} from '@angular/core';
import {ModelContratAssurance} from '../../model/model.contratAssurance';
import {Router} from '@angular/router';
import {ServiceContratAssurance} from '../../service/service.contratAssurance';

@Component({
  selector: 'app-contrats-assurances',
  templateUrl: './contrats-assurances.component.html',
  styleUrls: ['./contrats-assurances.component.css']
})
export class ContratsAssurancesComponent implements OnInit {

  contratAssurance: ModelContratAssurance = new ModelContratAssurance();
  listContratsAssurances;
  confirm: boolean;
  @Input() id: number;

  constructor(private contratAssuranceService: ServiceContratAssurance, private router: Router) { }

  ngOnInit() {
    this.contratAssuranceService.getContratAssuranceByIdDossier(this.id)
      .subscribe(data => {
        console.log(data + 'hello');
        this.listContratsAssurances = data;
      }, error => {
        console.log(error);
      });
  }

  onEditContratAssurance(id: number) {
    this.router.navigate(['editer-contrat-assurance', id]);
  }

  onDeleteContratAssurance(contratAssurance: ModelContratAssurance) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cette contrat?');
    if (this.confirm) {
      this.contratAssuranceService.deleteContratAssurance(contratAssurance.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listContratsAssurances.splice(
            this.listContratsAssurances.indexOf(contratAssurance), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addContratAssurance(id: number) {
    this.router.navigate(['ajouter-contrat-assurance', id]);
  }
}
