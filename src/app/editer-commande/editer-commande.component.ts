import { Component, OnInit } from '@angular/core';
import {ModelCommande} from '../../model/model.commande';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceCommande} from '../../service/service.commande';

@Component({
  selector: 'app-editer-commande',
  templateUrl: './editer-commande.component.html',
  styleUrls: ['./editer-commande.component.css']
})
export class EditerCommandeComponent implements OnInit {

  commande: ModelCommande;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private commandeService: ServiceCommande,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.commandeService.getCommande(this.id)
      .subscribe(data => {
        this.commande = data as ModelCommande;
      }, error => {
        console.log(error);
      });
  }

  updateCommande() {
    this.commandeService.updateCommande(this.commande)
      .subscribe(data => {
        console.log(data);
        alert('Mise à jour effectuée');
        this.router.navigate(['fournisseurs']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
