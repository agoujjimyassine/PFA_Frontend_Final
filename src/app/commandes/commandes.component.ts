import {Component, Input, OnInit} from '@angular/core';
import {ModelCommande} from '../../model/model.commande';
import {Router} from '@angular/router';
import {ServiceCommande} from '../../service/service.commande';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  info: any;
  private roles: string[];
  private authority: string;
  commande: ModelCommande = new ModelCommande();
  listCommandes;
  confirm: boolean;
  @Input() id: number;

  constructor(private commandeService: ServiceCommande, private router: Router,
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

    this.commandeService.getCommandesByIdFichier(this.id)
      .subscribe(data => {
        this.listCommandes = data;
      }, error => {
        console.log(error);
      });
  }

  onEditCommande(id: number) {
    this.router.navigate(['editer-commande', id]);
  }

  onDeleteCommande(commande: ModelCommande) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cette commande ?');
    if (this.confirm) {
      this.commandeService.deleteCommande(commande.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listCommandes.splice(
            this.listCommandes.indexOf(commande), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addCommande(id: number) {
    this.router.navigate(['ajouter-commande', id]);
  }
}
