import {Component, OnInit, Output} from '@angular/core';
import {ModelPieceDetache} from '../../model/model.pieceDetache';
import {ModelCommande} from '../../model/model.commande';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicePieceDetache} from '../../service/service.pieceDetache';
import {ServiceCommande} from '../../service/service.commande';
import {ModelEtatPiece} from '../../model/model.etatPiece';
import {ServiceEtatPiece} from '../../service/service.etatPiece';

@Component({
  selector: 'app-ajouter-piece-detache-commande',
  templateUrl: './ajouter-piece-detache-commande.component.html',
  styleUrls: ['./ajouter-piece-detache-commande.component.css']
})
export class AjouterPieceDetacheCommandeComponent implements OnInit {

  pieceDetache: ModelPieceDetache = new ModelPieceDetache();
  commande: ModelCommande;
  etatPiece: ModelEtatPiece;
  etatPiece1: ModelEtatPiece;
  pageEtatPieces;
  @Output() id: number;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private pieceDetacheService: ServicePieceDetache,
              private commandeService: ServiceCommande,
              private etatPieceService: ServiceEtatPiece,
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
    this.commandeService.getCommande(this.id)
      .subscribe(data => {
        this.commande = data as ModelCommande;
      }, error => {
        console.log(error);
      });
  }

  savePieceDetache(id1: number) {

    this.etatPieceService.getEtatPiece(id1)
      .subscribe(data => {
        this.etatPiece1 = data as ModelEtatPiece;

        this.pieceDetacheService.savePieceDetache(this.pieceDetache)
      .subscribe(data1 => {
        this.pieceDetache = data1 as ModelPieceDetache;
        this.pieceDetache.commande = this.commande;
        this.pieceDetache.etatPiece = this.etatPiece1;

        this.pieceDetacheService.updatePieceDetache(this.pieceDetache)
                  .subscribe(data2 => {
                    console.log(data2);
                    this.commande.montant = this.commande.montant + (this.pieceDetache.prix * this.pieceDetache.quantite);

                    this.commandeService.updateCommande(this.commande)
                      .subscribe(dat3 => {
                        console.log(dat3);
                      }, error => {
                        console.log(error);
                      });

                  }, error => {
                    console.log(error);
                    alert('Probléme');
                  });

        alert('Piéce ajoutée avec succès');
        this.router.navigate(['editer-commande', this.id]);

      }, error => {
        console.log(error);
        alert('Probléme');
      });

      }, error => {
        console.log(error);
        alert('Probléme');
      });

  }

}
