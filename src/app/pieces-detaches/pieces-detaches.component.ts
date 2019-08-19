import {Component, Input, OnInit} from '@angular/core';
import {ModelPieceDetache} from '../../model/model.pieceDetache';
import {Router} from '@angular/router';
import {ServicePieceDetache} from '../../service/service.pieceDetache';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-pieces-detaches',
  templateUrl: './pieces-detaches.component.html',
  styleUrls: ['./pieces-detaches.component.css']
})
export class PiecesDetachesComponent implements OnInit {

  info: any;
  private roles: string[];
  private authority: string;
  pieceDetache: ModelPieceDetache = new ModelPieceDetache();
  listPiecesDetaches;
  confirm: boolean;
  @Input() id: number;

  constructor(private pieceDetacheService: ServicePieceDetache,
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

    this.pieceDetacheService.getPieceDetachesByIdDossier(this.id)
      .subscribe(data => {
        this.listPiecesDetaches = data;
      }, error => {
        console.log(error);
      });
  }

  onEditPieceDetache(id: number) {
    this.router.navigate(['editer-piece-detache', id]);
  }

  onDeletePieceDetache(pieceDetache: ModelPieceDetache) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cette piéce ?');
    if (this.confirm) {
      this.pieceDetacheService.deletePieceDetache(pieceDetache.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listPiecesDetaches.splice(
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addPieceDetache(id: number) {
    this.router.navigate(['ajouter-piece-detache', id]);
  }
}
