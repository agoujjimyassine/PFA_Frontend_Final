import { Component, OnInit } from '@angular/core';
import {ModelPieceDetache} from '../../model/model.pieceDetache';
import {ModelEtatPiece} from '../../model/model.etatPiece';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicePieceDetache} from '../../service/service.pieceDetache';
import {ServiceEtatPiece} from '../../service/service.etatPiece';
import {ServiceCommande} from '../../service/service.commande';

@Component({
  selector: 'app-editer-piece-detache-commande',
  templateUrl: './editer-piece-detache-commande.component.html',
  styleUrls: ['./editer-piece-detache-commande.component.css']
})
export class EditerPieceDetacheCommandeComponent implements OnInit {

  pieceDetache: ModelPieceDetache;
  etatPiece: ModelEtatPiece;
  etatPiece1: ModelEtatPiece;
  id: number;
  pageEtatPieces;

  constructor(private activatedRoute: ActivatedRoute,
              private pieceDetacheService: ServicePieceDetache,
              private etatPieceService: ServiceEtatPiece,
              private commandeService: ServiceCommande,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
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
        this.etatPiece1 = this.pieceDetache.etatPiece;
      }, error => {
        console.log(error);
      });
  }

  updatePieceDetache() {
        this.etatPieceService.getEtatPiece(this.etatPiece1.id)
          .subscribe(data1 => {
            this.etatPiece1 = this.pieceDetache.etatPiece;
            this.pieceDetache.etatPiece = this.etatPiece1;

            this.pieceDetacheService.updatePieceDetache(this.pieceDetache)
              .subscribe(data2 => {
                console.log(data1);

                this.pieceDetache.commande.montant = this.pieceDetache.commande.montant +
                  (this.pieceDetache.prix * this.pieceDetache.quantite);
                this.commandeService.updateCommande(this.pieceDetache.commande)
                  .subscribe(dat3 => {
                    console.log(dat3);
                  }, error => {
                    console.log(error);
                  });

                alert('Mise à jour effectuée');
                this.router.navigate(['fournisseurs']);
              }, error => {
                console.log(error);
                alert('Probléme');
              });
          }, error => {
            console.log(error);
          });
  }
}
