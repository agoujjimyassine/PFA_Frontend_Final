import { Component, OnInit } from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ServiceDossier} from '../../service/service.dossier';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-dossier',
  templateUrl: './ajouter-dossier.component.html',
  styleUrls: ['./ajouter-dossier.component.css']
})
export class AjouterDossierComponent implements OnInit {

  dossier: ModelDossier = new ModelDossier();

  constructor(private dossierService: ServiceDossier, private router: Router) { }

  ngOnInit() {
  }

  saveDossier() {
    this.dossierService.saveDossier(this.dossier)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
        alert('Dossier ajouté avec succès');
        this.router.navigate(['dossiers']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
