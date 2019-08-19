import { Component, OnInit } from '@angular/core';
import {ModelFournisseur} from '../../model/model.fournisseur';
import {Router} from '@angular/router';
import {ServiceFournisseur} from '../../service/service.fournisseur';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  info: any;
  private roles: string[];
  private authority: string;
  fournisseur: ModelFournisseur = new ModelFournisseur();
  pageFournisseurs;
  confirm: boolean;

  constructor(private fournisseurService: ServiceFournisseur, private router: Router,
              private tokenStorage: TokenStorageService, private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_ACCUEIL') {
          this.authority = 'accueil';
          return false;
        } else if (role === 'ROLE_SECRETARIAT') {
          this.authority = 'secretariat';
          return false;
        } else if (role === 'ROLE_MAGASINIER') {
          this.authority = 'magasinier';
          return false;
        }
        this.authority = 'mecanicien';
        return true;
      });
    }

    this.fournisseurService.getFournisseurs()
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
      this.fournisseurService.deleteFournisseur(fournisseur.id)
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
