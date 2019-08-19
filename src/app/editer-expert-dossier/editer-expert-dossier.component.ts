import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceExpertDossier} from '../../service/service.expertDossier';
import {ModelExpertDossier} from '../../model/model.expertDossier';
import {ServiceExpert} from '../../service/service.expert';

@Component({
  selector: 'app-editer-expert-dossier',
  templateUrl: './editer-expert-dossier.component.html',
  styleUrls: ['./editer-expert-dossier.component.css']
})
export class EditerExpertDossierComponent implements OnInit {

  expertDossier: ModelExpertDossier;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private expertDossierService: ServiceExpertDossier,
              private expertService: ServiceExpert,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.expertDossierService.getExpertDossier(this.id)
      .subscribe(data => {
        this.expertDossier = data as ModelExpertDossier;
        console.log(this.expertDossier.expert.adresse + 'hello');
      }, error => {
        console.log(error);
      });
  }

  updateExpertDossier() {
    this.expertService.updateExpert(this.expertDossier.expert)
      .subscribe(data1 => {
        console.log(data1);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
    this.expertDossierService.updateExpertDossier(this.expertDossier)
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
