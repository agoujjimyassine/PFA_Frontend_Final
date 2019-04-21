import { Component, OnInit } from '@angular/core';
import {ModelFournisseur} from '../../model/model.fournisseur';
import {ActivatedRoute, Router} from '@angular/router';
import {FournisseursService} from '../../services/fournisseurs.service';

@Component({
  selector: 'app-editer-fournisseur',
  templateUrl: './editer-fournisseur.component.html',
  styleUrls: ['./editer-fournisseur.component.css']
})
export class EditerFournisseurComponent implements OnInit {

  fournisseur: ModelFournisseur;
  mode = 1;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private fournisseurService: FournisseursService, private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.fournisseurService.getFournisseur(this.id)
      .subscribe(data => {
        this.fournisseur = data as ModelFournisseur;
      }, error => {
        console.log(error);
      });
  }

  updateFournisseur() {
    this.fournisseurService.updateFournisseur(this.fournisseur)
      .subscribe(data => {
        console.log(data);
        alert('Mise à jour effectuée');
        this.router.navigate(['dossiers']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }

}
