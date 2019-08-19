import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelRendezVous} from '../../model/model.rendezVous';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServiceRendezVous} from '../../service/service.rendezVous';
import {ModelMotif} from '../../model/model.motif';
import {ModelStatutRdv} from '../../model/model.statutRdv';
import {ServiceMotif} from '../../service/service.motif';
import {ServiceStatutRdv} from '../../service/service.statutRdv';

@Component({
  selector: 'app-ajouter-rendez-vous',
  templateUrl: './ajouter-rendez-vous.component.html',
  styleUrls: ['./ajouter-rendez-vous.component.css']
})
export class AjouterRendezVousComponent implements OnInit {

  rendezVous: ModelRendezVous = new ModelRendezVous();
  dossier: ModelDossier;
  motif: ModelMotif;
  motif1: ModelMotif;
  statutRdv: ModelStatutRdv;
  statutRdv1: ModelStatutRdv;
  @Output() id: number;
  pageMotifs;
  pageStatutsRdvs;
  idm;
  ids;

  constructor(private activatedRoute: ActivatedRoute,
              private rendezVousService: ServiceRendezVous,
              private motifService: ServiceMotif,
              private statutRdvService: ServiceStatutRdv,
              private dossierService: ServiceDossier,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.motifService.getMotifs()
      .subscribe(data => {
        this.pageMotifs = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.statutRdvService.getStatutsRdvs()
      .subscribe(data => {
        this.pageStatutsRdvs = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.dossierService.getDossier(this.id)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
        this.rendezVous.dossier = this.dossier;
        this.dossierService.updateDossier(this.dossier)
          .subscribe(data3 => {
            console.log(data3);
          }, error => {
            console.log(error);
            alert('Probléme');
          });
      }, error => {
        console.log(error);
      });
  }

  saveRendezVous(idm: number, ids: number) {
    this.rendezVousService.saveRendezVous(this.rendezVous)
      .subscribe(data => {
        this.rendezVous = data as ModelRendezVous;

        this.motifService.getMotif(idm)
          .subscribe(data1 => {
            this.motif1 = data1 as ModelMotif;
            this.rendezVous.motif = this.motif1;

            this.rendezVousService.updateRendezVous(this.rendezVous)
              .subscribe(data2 => {

              }, error => {
                console.log(error);
                alert('Probléme');
              });

          }, error => {
            console.log(error);
          });

        this.statutRdvService.getStatutRdv(ids)
          .subscribe(data1 => {
            this.statutRdv1 = data1 as ModelStatutRdv;
            this.rendezVous.statutRdv = this.statutRdv1;

            this.statutRdvService.updateStatutRdv(this.statutRdv)
              .subscribe(data2 => {

                alert('Rendez Vous ajouté avec succès');
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
