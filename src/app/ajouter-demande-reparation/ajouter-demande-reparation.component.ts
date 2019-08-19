import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelDemandeReparation} from '../../model/model.demandeReparation';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServiceDemandeReparation} from '../../service/service.demandeReparation';

@Component({
  selector: 'app-ajouter-demande-reparation',
  templateUrl: './ajouter-demande-reparation.component.html',
  styleUrls: ['./ajouter-demande-reparation.component.css']
})
export class AjouterDemandeReparationComponent implements OnInit {

  demandeReparation: ModelDemandeReparation = new ModelDemandeReparation();
  dossier: ModelDossier;
  @Output() id: number;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private demandeReparationService: ServiceDemandeReparation,
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

  saveDemandeReparation() {
    this.demandeReparationService.saveDemandeReparation(this.demandeReparation)
      .subscribe(data => {
        this.demandeReparation = data as ModelDemandeReparation;

        this.dossier.demandeReparation = this.demandeReparation;

        this.dossierService.updateDossier(this.dossier)
                  .subscribe(data3 => {
                    console.log(data3);
                  }, error => {
                    console.log(error);
                    alert('Probléme');
                  });

        alert('Demande de Réparation ajoutée avec succès');
        this.router.navigate(['editer-dossier', this.id]);

      }, error => {
        console.log(error);
        alert('Probléme');
      });

  }

}
