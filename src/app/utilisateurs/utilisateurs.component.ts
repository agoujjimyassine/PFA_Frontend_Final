import { Component, OnInit } from '@angular/core';
import {ModelUtilisateur} from '../../model/model.utilisateur';
import {Router} from '@angular/router';
import {TokenStorageService} from '../auth/token-storage.service';
import {ServiceUtilisateur} from '../../service/service.utilisateur';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  info: any;
  private roles: string[];
  private authority: string;
  utilisateur: ModelUtilisateur = new ModelUtilisateur();
  pageUtilisateurss;
  confirm: boolean;

  constructor(private utilisateurService: ServiceUtilisateur, private router: Router,
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

      this.utilisateurService.getUtilisateurs()
        .subscribe(data => {
          this.pageUtilisateurss = data;
        }, error => {
          console.log(error);
        });
  }

  onEditUtilisateur(id: number) {
    this.router.navigate(['editer-utilisateur', id]);
  }

  onDeleteUtilisateur(utlisateur: ModelUtilisateur) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cet utilisateur ?');
    if (this.confirm) {
      this.utilisateurService.deleteUtilisateur(utlisateur.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageUtilisateurss.content.splice(
            this.pageUtilisateurss.content.indexOf(utlisateur), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }
}
