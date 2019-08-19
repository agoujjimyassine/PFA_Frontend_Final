import { Component, OnInit } from '@angular/core';
import {ModelFournisseur} from '../../model/model.fournisseur';
import {ServiceFournisseur} from '../../service/service.fournisseur';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-fournisseur',
  templateUrl: './ajouter-fournisseur.component.html',
  styleUrls: ['./ajouter-fournisseur.component.css']
})
export class AjouterFournisseurComponent implements OnInit {

  fournisseur: ModelFournisseur = new ModelFournisseur();

  constructor(private fournisseurService: ServiceFournisseur, private router: Router) { }

  ngOnInit() {
  }

  saveFournisseur() {
    this.fournisseurService.saveFournisseur(this.fournisseur)
      .subscribe(data => {
        this.fournisseur = data as ModelFournisseur;
        alert('Fournisseurs ajouté avec succès');
        this.router.navigate(['fournisseurs']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
