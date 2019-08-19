import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceAgenceAssurance} from '../../service/service.agenceAssurance';
import {ModelAgenceAssurance} from '../../model/model.agenceAssurance';

@Component({
  selector: 'app-agences-assurances-compagnie-assurance',
  templateUrl: './agences-assurances-compagnie-assurance.component.html',
  styleUrls: ['./agences-assurances-compagnie-assurance.component.css']
})
export class AgencesAssurancesCompagnieAssuranceComponent implements OnInit {

  agenceAssurance: ModelAgenceAssurance = new ModelAgenceAssurance();
  listAgencesAssurances;
  @Input() id: number;

  constructor(private agenceAssuranceService: ServiceAgenceAssurance, private router: Router) { }

  ngOnInit() {
    this.agenceAssuranceService.getAgencesAsuurancesByIdCompagnieAssurance(this.id)
      .subscribe(data => {
        this.listAgencesAssurances = data;
      }, error => {
        console.log(error);
      });
  }


  voirDossiers(id: number) {
    this.router.navigate(['dossier-agence-assurance', id]);
  }
}
