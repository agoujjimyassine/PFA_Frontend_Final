import {Component, Input, OnInit} from '@angular/core';
import {ModelAgenceAssurance} from '../../model/model.agenceAssurance';
import {Router} from '@angular/router';
import {ServiceAgenceAssurance} from '../../service/service.agenceAssurance';
import {ModelCompagnieAssurance} from '../../model/model.compagnieAssurance';
import {ServiceCompagnieAssurance} from '../../service/service.compagnieAssurance';

@Component({
  selector: 'app-editer-agence-assurance',
  templateUrl: './editer-agence-assurance.component.html',
  styleUrls: ['./editer-agence-assurance.component.css']
})
export class EditerAgenceAssuranceComponent implements OnInit {

  agenceAssurance: ModelAgenceAssurance;
  compagnieAssurance: ModelCompagnieAssurance;
  compagnieAssurance1: ModelCompagnieAssurance;
  mode = 1;
  @Input() id: number;
  pageCompagniesAssurances;

  constructor(private agenceAssuranceService: ServiceAgenceAssurance,
              private compagnieAssuranceService: ServiceCompagnieAssurance,
              private router: Router) {}

  ngOnInit() {
    this.compagnieAssuranceService.getCompagniesAssurences()
      .subscribe(data => {
        this.pageCompagniesAssurances = data;
        console.log(this.pageCompagniesAssurances);
      }, error => {
        console.log(error);
      });
    this.agenceAssuranceService.getAgenceAssurance(this.id)
      .subscribe(data => {
        this.agenceAssurance = data as ModelAgenceAssurance;
        this.compagnieAssurance1 = this.agenceAssurance.compagnieAssurance;
      }, error => {
        console.log(error);
      });
  }

  updateAgenceAssurance() {
    this.compagnieAssuranceService.getCompagnieAssurance(this.compagnieAssurance1.id)
      .subscribe(data => {
        this.compagnieAssurance1 = this.agenceAssurance.compagnieAssurance;
        this.agenceAssurance.compagnieAssurance = this.compagnieAssurance1;
      }, error => {
        console.log(error);
      });
    this.agenceAssuranceService.updateAgenceAssurance(this.agenceAssurance)
      .subscribe(data1 => {
        console.log(data1);
        alert('Mise à jour effectuée');
        this.router.navigate(['dossiers']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
