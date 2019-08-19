import { Component, OnInit } from '@angular/core';
import {ModelCollaborateur} from '../../model/model.collaborateur';
import {Router} from '@angular/router';
import {ServiceCollaborateur} from '../../service/service.collaborateur';

@Component({
  selector: 'app-ajouter-collaborateur',
  templateUrl: './ajouter-collaborateur.component.html',
  styleUrls: ['./ajouter-collaborateur.component.css']
})
export class AjouterCollaborateurComponent implements OnInit {

  collaborateur: ModelCollaborateur = new ModelCollaborateur();

  constructor(private collaborateurService: ServiceCollaborateur, private router: Router) { }

  ngOnInit() {
  }

  saveCollaborateur() {
    this.collaborateurService.saveCollaborateur(this.collaborateur)
      .subscribe(data => {
        this.collaborateur = data as ModelCollaborateur;
        alert('Employé ajouté avec succès');
        this.router.navigate(['collaborateurs']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
