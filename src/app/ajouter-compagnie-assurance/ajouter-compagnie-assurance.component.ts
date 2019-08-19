import { Component, OnInit } from '@angular/core';
import {ModelCompagnieAssurance} from '../../model/model.compagnieAssurance';
import {Router} from '@angular/router';
import {ServiceCompagnieAssurance} from '../../service/service.compagnieAssurance';

@Component({
  selector: 'app-ajouter-compagnie-assurance',
  templateUrl: './ajouter-compagnie-assurance.component.html',
  styleUrls: ['./ajouter-compagnie-assurance.component.css']
})
export class AjouterCompagnieAssuranceComponent implements OnInit {

  compagnieAssurance: ModelCompagnieAssurance = new ModelCompagnieAssurance();

  constructor(private compagnieAssuranceService: ServiceCompagnieAssurance, private router: Router) { }

  ngOnInit() {
  }

  saveCompagnieAssurance() {
    this.compagnieAssuranceService.saveCompagnieAssurance(this.compagnieAssurance)
      .subscribe(data => {
        this.compagnieAssurance = data as ModelCompagnieAssurance;
        alert('Compagnie Assurance ajoutée avec succès');
        this.router.navigate(['compagnies-assurances']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
