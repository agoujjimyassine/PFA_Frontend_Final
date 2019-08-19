import {Component, Input, OnInit} from '@angular/core';
import {ModelFichier} from '../../model/model.fichier';
import {Router} from '@angular/router';
import {ServiceFichier} from '../../service/service.fichier';

@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.css']
})
export class FichiersComponent implements OnInit {

  fichier: ModelFichier = new ModelFichier();
  listFichiers;
  confirm: boolean;
  @Input() id: number;

  constructor(private fichierService: ServiceFichier, private router: Router) { }

  ngOnInit() {
    this.fichierService.getFichiersByIdDossier(this.id)
      .subscribe(data => {
        this.listFichiers = data;
      }, error => {
        console.log(error);
      });
  }

  onEditFichier(id: number) {
    this.router.navigate(['editer-fichier', id]);
  }

  onDeleteFichier(fichier: ModelFichier) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce fichier ?');
    if (this.confirm) {
      this.fichierService.deleteFichier(fichier.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listFichiers.splice(
            this.listFichiers.indexOf(fichier), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addFichier(id: number) {
    this.router.navigate(['ajouter-fichier', id]);
  }
}
