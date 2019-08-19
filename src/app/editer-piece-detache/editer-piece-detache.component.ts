import { Component, OnInit } from '@angular/core';
import {ModelPieceDetache} from '../../model/model.pieceDetache';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicePieceDetache} from '../../service/service.pieceDetache';
import {ModelCommande} from '../../model/model.commande';
import {ServiceCommande} from '../../service/service.commande';
import {ModelEtatPiece} from '../../model/model.etatPiece';
import {ServiceEtatPiece} from '../../service/service.etatPiece';

@Component({
  selector: 'app-editer-piece-detache',
  templateUrl: './editer-piece-detache.component.html',
  styleUrls: ['./editer-piece-detache.component.css']
})
export class EditerPieceDetacheComponent implements OnInit {

  pieceDetache: ModelPieceDetache;
  commande: ModelCommande;
  commande1: ModelCommande;
  etatPiece: ModelEtatPiece;
  etatPiece1: ModelEtatPiece;
  id: number;
  pageCommandes;
  pageEtatPieces;

  constructor(private activatedRoute: ActivatedRoute,
              private pieceDetacheService: ServicePieceDetache,
              private commandeService: ServiceCommande,
              private etatPieceService: ServiceEtatPiece,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.commandeService.getCommandes()
      .subscribe(data => {
        this.pageCommandes = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.etatPieceService.getEtatPieces()
      .subscribe(data => {
        this.pageEtatPieces = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.pieceDetacheService.getPieceDetache(this.id)
      .subscribe(data => {
        this.pieceDetache = data as ModelPieceDetache;
        this.commande1 = this.pieceDetache.commande;
        this.etatPiece1 = this.pieceDetache.etatPiece;
      }, error => {
        console.log(error);
      });
  }

  updatePieceDetache() {
    this.commandeService.getCommande(this.commande1.id)
      .subscribe(data => {
        this.commande1 = this.pieceDetache.commande;
        this.pieceDetache.commande = this.commande1;

        this.etatPieceService.getEtatPiece(this.etatPiece1.id)
          .subscribe(data1 => {
            this.etatPiece1 = this.pieceDetache.etatPiece;
            this.pieceDetache.etatPiece = this.etatPiece1;

            this.pieceDetacheService.updatePieceDetache(this.pieceDetache)
          .subscribe(data2 => {
            console.log(data1);
            alert('Mise à jour effectuée');
            this.router.navigate(['dossiers']);
          }, error => {
            console.log(error);
            alert('Probléme');
          });
          }, error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
      });
  }
}
