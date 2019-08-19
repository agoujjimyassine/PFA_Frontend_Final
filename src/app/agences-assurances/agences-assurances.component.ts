import { Component, OnInit } from '@angular/core';
import {ModelAgenceAssurance} from '../../model/model.agenceAssurance';
import {Router} from '@angular/router';
import {ServiceAgenceAssurance} from '../../service/service.agenceAssurance';

@Component({
  selector: 'app-agences-assurances',
  templateUrl: './agences-assurances.component.html',
  styleUrls: ['./agences-assurances.component.css']
})
export class AgencesAssurancesComponent implements OnInit {

  agenceAssurance: ModelAgenceAssurance = new ModelAgenceAssurance();
  pageAgencesAssurances;
  confirm: boolean;

  constructor(private agenceAssuranceService: ServiceAgenceAssurance, private router: Router) { }

  ngOnInit() {
    this.agenceAssuranceService.getAgencesAssurences()
      .subscribe(data => {
        this.pageAgencesAssurances = data;
      }, error => {
        console.log(error);
      });
  }

  voirDossiers(id: number) {
    this.router.navigate(['dossier-agence-assurance', id]);
  }

  onDeleteAgenceAssurance(agenceAssurance: ModelAgenceAssurance) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cette agence assurance ?');
    if (this.confirm) {
      this.agenceAssuranceService.deleteAgenceAssurance(agenceAssurance.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageAgencesAssurances.content.splice(
            this.pageAgencesAssurances.content.indexOf(agenceAssurance), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
