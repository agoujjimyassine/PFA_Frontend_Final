import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelFichier} from '../../model/model.fichier';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServiceFichier} from '../../service/service.fichier';
import {ModelTypeFichier} from '../../model/model.typeFichier';
import {ServiceTypeFichier} from '../../service/service.typeFichier';

@Component({
  selector: 'app-ajouter-fichier',
  templateUrl: './ajouter-fichier.component.html',
  styleUrls: ['./ajouter-fichier.component.css']
})
export class AjouterFichierComponent implements OnInit {

  fichier: ModelFichier = new ModelFichier();
  dossier: ModelDossier;
  typeFichier: ModelTypeFichier;
  typeFichier1: ModelTypeFichier;
  @Output() id: number;
  pageTypesFichiers;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private fichierService: ServiceFichier,
              private dossierService: ServiceDossier,
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
    this.dossierService.getDossier(this.id)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
      }, error => {
        console.log(error);
      });
  }

  saveFichier(id1: number) {
    this.fichierService.saveFichier(this.fichier)
      .subscribe(data => {
        this.fichier = data as ModelFichier;

        this.typeFichierService.getTypeFichier(id1)
          .subscribe(data1 => {
            this.typeFichier1 = data1 as ModelTypeFichier;
            this.fichier.typeFichier = this.typeFichier1;
            this.fichier.dossier = this.dossier;

            this.fichierService.updateFichier(this.fichier)
              .subscribe(data2 => {

                alert('Fichier ajouté avec succès');
                this.router.navigate(['editer-dossier', this.id]);

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

  }

}
