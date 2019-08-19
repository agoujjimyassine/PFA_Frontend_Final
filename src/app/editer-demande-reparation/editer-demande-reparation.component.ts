import {Component, Input, OnInit} from '@angular/core';
import {ModelDemandeReparation} from '../../model/model.demandeReparation';
import {Router} from '@angular/router';
import {ServiceDemandeReparation} from '../../service/service.demandeReparation';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-editer-demande-reparation',
  templateUrl: './editer-demande-reparation.component.html',
  styleUrls: ['./editer-demande-reparation.component.css']
})
export class EditerDemandeReparationComponent implements OnInit {

  info: any;
  private roles: string[];
  private authority: string;
  demandeReparation: ModelDemandeReparation;
  @Input() id: number;

  constructor(private demandeReparationService: ServiceDemandeReparation,
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

    this.demandeReparationService.getDemandeReparation(this.id)
      .subscribe(data => {
        this.demandeReparation = data as ModelDemandeReparation;
      }, error => {
        console.log(error);
      });
  }

  updateDemandeReparation() {
    this.demandeReparationService.updateDemandeReparation(this.demandeReparation)
      .subscribe(data1 => {
        console.log(data1);
        alert('Mise à jour effectuée');
        this.router.navigate(['dossiers']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
