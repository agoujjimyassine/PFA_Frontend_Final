import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelExpertDossier} from '../../model/model.expertDossier';
import {ModelExpert} from '../../model/model.expert';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServiceExpertDossier} from '../../service/service.expertDossier';
import {ServiceExpert} from '../../service/service.expert';

@Component({
  selector: 'app-ajouter-expert-dossier',
  templateUrl: './ajouter-expert-dossier.component.html',
  styleUrls: ['./ajouter-expert-dossier.component.css']
})
export class AjouterExpertDossierComponent implements OnInit {

  expertDossier: ModelExpertDossier = new ModelExpertDossier();
  expert: ModelExpert = new ModelExpert();
  dossier: ModelDossier;
  @Output() id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private expertDossierService: ServiceExpertDossier,
              private expertService: ServiceExpert,
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

  saveExpertDossier() {
    this.expertService.saveExpert(this.expert)
      .subscribe(data => {
        this.expert = data as ModelExpert;

        this.expertDossierService.saveExpertDossier(this.expertDossier)
                  .subscribe(data1 => {
                    this.expertDossier = data1 as ModelExpertDossier;
                    this.expertDossier.dossier = this.dossier;
                    this.expertDossier.expert = this.expert;
                    this.expertDossierService.updateExpertDossier(this.expertDossier)
                      .subscribe(data2 => {
                        alert('Expert ajouté avec succès');
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
      });
  }
}
