import { Component, OnInit } from '@angular/core';
import {ModelPhaseDossier} from '../../model/model.phaseDossier';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicePhase} from '../../service/service.phase';
import {ServicePhaseDossier} from '../../service/service.phaseDossier';

@Component({
  selector: 'app-editer-phase-dossier',
  templateUrl: './editer-phase-dossier.component.html',
  styleUrls: ['./editer-phase-dossier.component.css']
})
export class EditerPhaseDossierComponent implements OnInit {

  phaseDossier: ModelPhaseDossier;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private phaseService: ServicePhase,
              private phaseDossierService: ServicePhaseDossier,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.phaseDossierService.getPhaseDossier(this.id)
      .subscribe(data => {
        this.phaseDossier = data as ModelPhaseDossier;
      }, error => {
        console.log(error);
      });
  }

  updatePhaseDossier() {
    this.phaseService.updatePhase(this.phaseDossier.phase)
      .subscribe(data1 => {
        console.log(data1);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
    this.phaseDossierService.updatePhaseDossier(this.phaseDossier)
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
