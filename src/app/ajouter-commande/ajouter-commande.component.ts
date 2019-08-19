import {Component, OnInit, Output} from '@angular/core';
import {ModelCommande} from '../../model/model.commande';
import {ModelFournisseur} from '../../model/model.fournisseur';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceCommande} from '../../service/service.commande';
import {ServiceFournisseur} from '../../service/service.fournisseur';

@Component({
  selector: 'app-ajouter-commande',
  templateUrl: './ajouter-commande.component.html',
  styleUrls: ['./ajouter-commande.component.css']
})
export class AjouterCommandeComponent implements OnInit {

  commande: ModelCommande = new ModelCommande();
  fournisseur: ModelFournisseur;
  @Output() id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private commandeService: ServiceCommande,
              private fournisseurService: ServiceFournisseur,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.fournisseurService.getFournisseur(this.id)
      .subscribe(data => {
        this.fournisseur = data as ModelFournisseur;
      }, error => {
        console.log(error);
      });
  }

  saveCommande() {
    this.commandeService.saveCommande(this.commande)
      .subscribe(data => {
        this.commande = data as ModelCommande;

        this.commande.fournisseur = this.fournisseur;

        this.commandeService.updateCommande(this.commande)
              .subscribe(data1 => {

                alert('Commande ajoutée avec succès');
                this.router.navigate(['editer-fournisseur', this.id]);

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
