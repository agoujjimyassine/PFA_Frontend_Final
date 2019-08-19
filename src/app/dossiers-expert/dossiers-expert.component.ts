import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceExpertDossier} from '../../service/service.expertDossier';
import {ModelExpertDossier} from '../../model/model.expertDossier';

@Component({
  selector: 'app-dossiers-expert',
  templateUrl: './dossiers-expert.component.html',
  styleUrls: ['./dossiers-expert.component.css']
})
export class DossiersExpertComponent implements OnInit {

  expertDossier: ModelExpertDossier = new ModelExpertDossier();
  listExpertsDossiers;
  @Input() id: number;

  constructor(private expertDossierService: ServiceExpertDossier, private router: Router) { }

  ngOnInit() {
    this.expertDossierService.getExpertsDossiersByIdExpert(this.id)
      .subscribe(data => {
        this.listExpertsDossiers = data;
      }, error => {
        console.log(error);
      });
  }

}
