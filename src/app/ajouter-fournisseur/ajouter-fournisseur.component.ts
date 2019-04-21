import { Component, OnInit } from '@angular/core';
import {ModelFournisseur} from '../../model/model.fournisseur';
import {FournisseursService} from '../../services/fournisseurs.service';

@Component({
  selector: 'app-ajouter-fournisseur',
  templateUrl: './ajouter-fournisseur.component.html',
  styleUrls: ['./ajouter-fournisseur.component.css']
})
export class AjouterFournisseurComponent implements OnInit {

  fournisseur: ModelFournisseur = new ModelFournisseur();
  mode = 1;

  constructor(private fournisseursService: FournisseursService) { }

  ngOnInit() {
  }

  saveFournisseur() {
    this.fournisseursService.saveFournisseur(this.fournisseur)
      .subscribe(data => {
        this.fournisseur = data as ModelFournisseur;
        this.mode = 2;
      }, error => {
        console.log(error);
      });
  }
}
