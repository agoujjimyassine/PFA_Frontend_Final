import {Component, OnInit} from '@angular/core';
import {ServiceDossier} from '../../service/service.dossier';
import {ModelDossier} from '../../model/model.dossier';
import {Router} from '@angular/router';
import {TokenStorageService} from '../auth/token-storage.service';


@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.css']
})

export class DossiersComponent implements OnInit {

  info: any;
  private roles: string[];
  private authority: string;
  dossier: ModelDossier = new ModelDossier();
  pageDossiers;
  confirm: boolean;

  constructor(private dossierService: ServiceDossier, private router: Router, private tokenStorage: TokenStorageService,
              private token: TokenStorageService) {}

  ngOnInit() {
    this.dossierService.getDossiers()
      .subscribe(data => {
        this.pageDossiers = data;
      }, error => {
        console.log(error);
      });

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
  }

  onEditDossier(id: number) {
    this.router.navigate(['editer-dossier', id]);
  }

  onDeleteDossier(dossier: ModelDossier) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce dossier ?');
    if (this.confirm) {
      this.dossierService.deleteDossier(dossier.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageDossiers.content.splice(
            this.pageDossiers.content.indexOf(dossier), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
