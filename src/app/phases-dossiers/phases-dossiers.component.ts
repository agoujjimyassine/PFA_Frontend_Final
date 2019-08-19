import {Component, Input, OnInit} from '@angular/core';
import {ModelPhaseDossier} from '../../model/model.phaseDossier';
import {Router} from '@angular/router';
import {ServicePhaseDossier} from '../../service/service.phaseDossier';

@Component({
  selector: 'app-phases-dossiers',
  templateUrl: './phases-dossiers.component.html',
  styleUrls: ['./phases-dossiers.component.css']
})
export class PhasesDossiersComponent implements OnInit {

  phaseDossier: ModelPhaseDossier = new ModelPhaseDossier();
  listPhasesDossiers;
  confirm: boolean;
  @Input() id: number;

  constructor(private phaseDossierService: ServicePhaseDossier, private router: Router) { }

  ngOnInit() {
    this.phaseDossierService.getPhaseDossiersByIdDossier(this.id)
      .subscribe(data => {
        this.listPhasesDossiers = data;
      }, error => {
        console.log(error);
      });
  }

  onEditPhaseDossier(id: number) {
    this.router.navigate(['editer-phase-dossier', id]);
  }

  onDeletePhaseDossier(phaseDossier: ModelPhaseDossier) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cette phase ?');
    if (this.confirm) {
      this.phaseDossierService.deletePhaseDossier(phaseDossier.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listPhasesDossiers.splice(
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addPhaseDossier(id: number) {
    this.router.navigate(['ajouter-phase-dossier', id]);
  }
}
