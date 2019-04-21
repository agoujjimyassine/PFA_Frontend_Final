import { Component, OnInit } from '@angular/core';
import {ModelFournisseur} from '../../model/model.fournisseur';
import {Router} from '@angular/router';
import {FournisseursService} from '../../services/fournisseurs.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  fournisseur: ModelFournisseur = new ModelFournisseur();
  pageFournisseurs;
  confirm: boolean;

  constructor(private fournisseursService: FournisseursService, private router: Router) { }

  ngOnInit() {
    this.fournisseursService.getFournisseurs()
      .subscribe(data => {
        this.pageFournisseurs = data;
      }, error => {
        console.log(error);
      });
  }

  onEditFournisseur(id: number) {
    this.router.navigate(['editer-fournisseur', id]);
  }

  onDeleteFournisseur(fournisseur: ModelFournisseur) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce fournisseur ?');
    if (this.confirm) {
      this.fournisseursService.deleteFournisseur(fournisseur.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageFournisseurs.content.splice(
            this.pageFournisseurs.content.indexOf(fournisseur), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
