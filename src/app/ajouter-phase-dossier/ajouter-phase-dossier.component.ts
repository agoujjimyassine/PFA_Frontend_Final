import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelPhaseDossier} from '../../model/model.phaseDossier';
import {ModelPhase} from '../../model/model.phase';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServicePhaseDossier} from '../../service/service.phaseDossier';
import {ServicePhase} from '../../service/service.phase';

@Component({
  selector: 'app-ajouter-phase-dossier',
  templateUrl: './ajouter-phase-dossier.component.html',
  styleUrls: ['./ajouter-phase-dossier.component.css']
})
export class AjouterPhaseDossierComponent implements OnInit {

  phaseDossier: ModelPhaseDossier = new ModelPhaseDossier();
  phase: ModelPhase = new ModelPhase();
  dossier: ModelDossier;
  @Output() id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private phaseDossierService: ServicePhaseDossier,
              private phaseSerivce: ServicePhase,
              private dossierService: ServiceDossier,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.dossierService.getDossier(this.id)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
      }, error => {
        console.log(error);
      });
  }

  savePhaseDossier() {
    this.phaseSerivce.savePhase(this.phase)
      .subscribe(data => {
        this.phase = data as ModelPhase;

        this.phaseDossierService.savePhaseDossier(this.phaseDossier)
          .subscribe(data1 => {
            this.phaseDossier = data1 as ModelPhaseDossier;
            this.phaseDossier.dossier = this.dossier;
            this.phaseDossier.phase = this.phase;
            this.phaseDossierService.updatePhaseDossier(this.phaseDossier)
              .subscribe(data2 => {
                console.log(data2);
              }, error => {
                console.log(error);
                alert('Probléme');
              });
            alert('Phase ajoutée avec succès');
            this.router.navigate(['editer-dossier/' + this.id]);
          }, error => {
            console.log(error);
          });

      }, error => {
        console.log(error);
      });
  }
}
