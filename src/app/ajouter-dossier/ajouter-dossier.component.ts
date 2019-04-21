import { Component, OnInit } from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {DossiersService} from '../../services/dossiers.service';

@Component({
  selector: 'app-ajouter-dossier',
  templateUrl: './ajouter-dossier.component.html',
  styleUrls: ['./ajouter-dossier.component.css']
})
export class AjouterDossierComponent implements OnInit {

  dossier: ModelDossier = new ModelDossier();
  mode = 1;

  constructor(private dossiersService: DossiersService) { }

  ngOnInit() {
  }

  saveDossier() {
    this.dossiersService.saveDossier(this.dossier)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
        this.mode = 2;
      }, error => {
        console.log(error);
      });
  }
}
