import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelPieceDetache} from '../../model/model.pieceDetache';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServicePieceDetache} from '../../service/service.pieceDetache';
import {ModelCommande} from '../../model/model.commande';
import {ServiceCommande} from '../../service/service.commande';
import {ServiceEtatPiece} from '../../service/service.etatPiece';
import {ModelEtatPiece} from '../../model/model.etatPiece';

@Component({
  selector: 'app-ajouter-piece-detache',
  templateUrl: './ajouter-piece-detache.component.html',
  styleUrls: ['./ajouter-piece-detache.component.css']
})
export class AjouterPieceDetacheComponent implements OnInit {

  pieceDetache: ModelPieceDetache = new ModelPieceDetache();
  dossier: ModelDossier;
  commande: ModelCommande;
  commande1: ModelCommande;
  etatPiece: ModelEtatPiece;
  etatPiece1: ModelEtatPiece;
  @Output() id: number;
  pageCommandes;
  pageEtatPieces;
  id1: number;
  id2: number;

  constructor(private activatedRoute: ActivatedRoute,
              private pieceDetacheService: ServicePieceDetache,
              private commandeService: ServiceCommande,
              private etatPieceService: ServiceEtatPiece,
              private dossierService: ServiceDossier,
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
    this.dossierService.getDossier(this.id)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
      }, error => {
        console.log(error);
      });
  }

  savePieceDeatche(id1: number, id2: number) {
        this.commandeService.getCommande(id1)
          .subscribe(data1 => {
            this.commande1 = data1 as ModelCommande;

            this.etatPieceService.getEtatPiece(id2)
              .subscribe(data2 => {
                this.etatPiece1 = data2 as ModelEtatPiece;

                this.pieceDetacheService.savePieceDetache(this.pieceDetache)
                  .subscribe(data3 => {
                    this.pieceDetache = data3 as ModelPieceDetache;
                    this.pieceDetache.dossier = this.dossier;
                    this.pieceDetache.commande = this.commande1;
                    this.pieceDetache.etatPiece = this.etatPiece1;
                    this.pieceDetacheService.updatePieceDetache(this.pieceDetache)
                      .subscribe(data4 => {
                        alert('Piéce ajoutée avec succès');
                        this.router.navigate(['editer-dossier/' + this.id]);
                      }, error => {
                        console.log(error);
                        alert('Probléme');
                      });
                  }, error => {
                    console.log(error);
                  });
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
