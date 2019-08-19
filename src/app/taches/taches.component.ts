import {Component, Input, OnInit} from '@angular/core';
import {ModelTache} from '../../model/model.tache';
import {Router} from '@angular/router';
import {ServiceTache} from '../../service/service.tache';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {

  info: any;
  private roles: string[];
  private authority: string;
  tache: ModelTache = new ModelTache();
  listTaches;
  confirm: boolean;
  @Input() id: number;

  constructor(private tacheService: ServiceTache,
              private router: Router,
              private tokenStorage: TokenStorageService,
              private token: TokenStorageService) { }

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

    this.tacheService.getTachesByIdDemandeReparation(this.id)
      .subscribe(data => {
        this.listTaches = data;
      }, error => {
        console.log(error);
      });
  }

  onEditTache(id: number) {
    this.router.navigate(['editer-tache', id]);
  }

  onDeleteTache(tache: ModelTache) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cette tache ?');
    if (this.confirm) {
      this.tacheService.deleteTache(tache.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listTaches.splice(
            this.listTaches.indexOf(tache), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addTache(id: number) {
    this.router.navigate(['ajouter-tache', id]);
  }
}
