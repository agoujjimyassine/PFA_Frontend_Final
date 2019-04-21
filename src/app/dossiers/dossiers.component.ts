import {Component, OnInit} from '@angular/core';
import {DossiersService} from '../../services/dossiers.service';
import {ModelDossier} from '../../model/model.dossier';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.css']
})

export class DossiersComponent implements OnInit {

  dossier: ModelDossier = new ModelDossier();
  pageDossiers;
  confirm: boolean;

  constructor(private dossiersService: DossiersService, private router: Router) {}

  ngOnInit() {
    this.dossiersService.getDossiers()
      .subscribe(data => {
        this.pageDossiers = data;
      }, error => {
        console.log(error);
      });
  }

  onEditDossier(id: number) {
    this.router.navigate(['editer-dossier', id]);
  }

  onDeleteDossier(dossier: ModelDossier) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce dossier ?');
    if (this.confirm) {
      this.dossiersService.deleteDossier(dossier.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageDossiers.content.splice(
            this.pageDossiers.content.indexOf(dossier), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
