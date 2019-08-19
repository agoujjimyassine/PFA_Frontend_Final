import { Component, OnInit } from '@angular/core';
import {ModelCollaborateur} from '../../model/model.collaborateur';
import {Router} from '@angular/router';
import {ServiceCollaborateur} from '../../service/service.collaborateur';

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css']
})
export class CollaborateursComponent implements OnInit {

  collaborateur: ModelCollaborateur = new ModelCollaborateur();
  pageCollaborateurs;
  confirm: boolean;

  constructor(private collaborateurService: ServiceCollaborateur, private router: Router) { }

  ngOnInit() {
    this.collaborateurService.getCollaborateurs()
      .subscribe(data => {
        this.pageCollaborateurs = data;
      }, error => {
        console.log(error);
      });
  }

  onEditCollaboratuer(id: number) {
    this.router.navigate(['editer-collaborateur', id]);
  }

  onDeleteColaborateur(collaborateur: ModelCollaborateur) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce collaborateur ?');
    if (this.confirm) {
      this.collaborateurService.deleteCollaborateur(collaborateur.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageCollaborateurs.content.splice(
            this.pageCollaborateurs.content.indexOf(collaborateur), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
