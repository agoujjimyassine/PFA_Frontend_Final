import {Component, Input, OnInit} from '@angular/core';
import {ModelExpertDossier} from '../../model/model.expertDossier';
import {Router} from '@angular/router';
import {ServiceExpertDossier} from '../../service/service.expertDossier';

@Component({
  selector: 'app-experts-dossiers',
  templateUrl: './experts-dossiers.component.html',
  styleUrls: ['./experts-dossiers.component.css']
})
export class ExpertsDossiersComponent implements OnInit {

  expertDossier: ModelExpertDossier = new ModelExpertDossier();
  listExpertsDossiers;
  confirm: boolean;
  @Input() id: number;

  constructor(private expertDossierService: ServiceExpertDossier, private router: Router) { }

  ngOnInit() {
    this.expertDossierService.getExpertsDossiersByIdDossier(this.id)
      .subscribe(data => {
        this.listExpertsDossiers = data;
      }, error => {
        console.log(error);
      });
  }

  onEditExpertDossier(id: number) {
    this.router.navigate(['editer-expert-dossier', id]);
  }

  onDeleteExpertDossier(expertDossier: ModelExpertDossier) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cet expert ?');
    if (this.confirm) {
      this.expertDossierService.deleteExpertDossier(expertDossier.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listExpertsDossiers.splice(
            this.listExpertsDossiers.indexOf(expertDossier), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addExpertDossier(id: number) {
    this.router.navigate(['ajouter-expert-dossier', id]);
  }
}
