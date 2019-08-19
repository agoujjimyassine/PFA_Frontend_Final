import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ModelClient} from '../../model/model.client';
import {ServiceClient} from '../../service/service.client';
import {TokenStorageService} from '../auth/token-storage.service';
import {ModelTache} from '../../model/model.tache';
import {ServiceTache} from '../../service/service.tache';

@Component({
  selector: 'app-editer-dossier',
  templateUrl: './editer-dossier.component.html',
  styleUrls: ['./editer-dossier.component.css']
})
export class EditerDossierComponent implements OnInit {

  info: any;
  private roles: string[];
  private authority: string;
  dossier: ModelDossier;
  client: ModelClient;
  route: string;
  @Output() idd: number;
  enCours = 'En cours';
  ferme = 'Fermé';
  suspendu = 'Suspendu';
  listTaches;
  tache: ModelTache;

  constructor(private activatedRoute: ActivatedRoute,
              private dossierService: ServiceDossier,
              private clientService: ServiceClient,
              private tacheService: ServiceTache,
              private router: Router,
              private tokenStorage: TokenStorageService,
              private token: TokenStorageService) {
    this.idd = this.activatedRoute.snapshot.params.id;
  }

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

    this.dossierService.getDossier(this.idd)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
        this.listTaches = this.tacheService.getTachesByIdDemandeReparation(this.dossier.demandeReparation.id);
        console.log(this.listTaches);
      }, error => {
        console.log(error);
      });
  }

  updateDossier() {
    this.dossierService.updateDossier(this.dossier)
      .subscribe(data => {
        if (this.dossier.statut === 'Fermé') {
          for (this.tache of this.listTaches)  {
            if (this.tache.importance !== 100) {
              alert('Impossible de fermer ce dossier certaines taches sont incompléte');
            }
          }
          alert('Mise à jour effectuée');
          this.router.navigate(['dossiers']);
        } else {
          alert('Mise à jour effectuée');
          this.router.navigate(['dossiers']);
        }
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }

  addClient(id: number) {
    this.router.navigate(['ajouter-client', id]);
  }

  addVehicule(id: number) {
    this.router.navigate(['ajouter-vehicule', id]);
  }

  addDemandeReparation(id: number) {
    this.router.navigate(['ajouter-demande-reparation', id]);
  }

  addAgenceAssurance(id: number) {
    this.router.navigate(['ajouter-agence-assurance', id]);
  }
}
