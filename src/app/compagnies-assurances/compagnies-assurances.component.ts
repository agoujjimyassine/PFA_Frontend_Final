import { Component, OnInit } from '@angular/core';
import {ModelCompagnieAssurance} from '../../model/model.compagnieAssurance';
import {Router} from '@angular/router';
import {ServiceCompagnieAssurance} from '../../service/service.compagnieAssurance';

@Component({
  selector: 'app-compagnies-assurances',
  templateUrl: './compagnies-assurances.component.html',
  styleUrls: ['./compagnies-assurances.component.css']
})
export class CompagniesAssurancesComponent implements OnInit {

  compagnieAssurance: ModelCompagnieAssurance = new ModelCompagnieAssurance();
  pageCompagniesAssurances;
  confirm: boolean;

  constructor(private compagnieAssuranceService: ServiceCompagnieAssurance, private router: Router) { }

  ngOnInit() {
    this.compagnieAssuranceService.getCompagniesAssurences()
      .subscribe(data => {
        this.pageCompagniesAssurances = data;
      }, error => {
        console.log(error);
      });
  }

  onEditCompagnieAssurance(id: number) {
    this.router.navigate(['editer-compagnie-assurance', id]);
  }

  onDeleteCompagnieAssurance(compagnieAssurance: ModelCompagnieAssurance) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cette compagnie assurance ?');
    if (this.confirm) {
      this.compagnieAssuranceService.deleteCompagnieAssurance(compagnieAssurance.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageCompagniesAssurances.content.splice(
            this.pageCompagniesAssurances.content.indexOf(compagnieAssurance), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
