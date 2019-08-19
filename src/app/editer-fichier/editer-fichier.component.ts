import { Component, OnInit } from '@angular/core';
import {ModelFichier} from '../../model/model.fichier';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceFichier} from '../../service/service.fichier';
import {ModelTypeFichier} from '../../model/model.typeFichier';
import {ServiceTypeFichier} from '../../service/service.typeFichier';

@Component({
  selector: 'app-editer-fichier',
  templateUrl: './editer-fichier.component.html',
  styleUrls: ['./editer-fichier.component.css']
})
export class EditerFichierComponent implements OnInit {

  fichier: ModelFichier;
  typeFichier: ModelTypeFichier;
  typeFichier1: ModelTypeFichier;
  id: number;
  pageTypesFichiers;

  constructor(private activatedRoute: ActivatedRoute,
              private fichierService: ServiceFichier,
              private typeFichierService: ServiceTypeFichier,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.typeFichierService.getTypesFichiers()
      .subscribe(data => {
        this.pageTypesFichiers = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.fichierService.getFichier(this.id)
      .subscribe(data => {
        this.fichier = data as ModelFichier;
        this.typeFichier1 = this.fichier.typeFichier;
      }, error => {
        console.log(error);
      });
  }

  updateFichier() {
    this.typeFichierService.getTypeFichier(this.typeFichier1.id)
      .subscribe(data => {
        this.typeFichier1 = this.fichier.typeFichier;
        this.fichier.typeFichier = this.typeFichier1;
      }, error => {
        console.log(error);
      });
    this.fichierService.updateFichier(this.fichier)
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
