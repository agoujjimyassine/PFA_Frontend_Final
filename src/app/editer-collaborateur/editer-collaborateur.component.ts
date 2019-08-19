import { Component, OnInit } from '@angular/core';
import {ModelCollaborateur} from '../../model/model.collaborateur';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceCollaborateur} from '../../service/service.collaborateur';

@Component({
  selector: 'app-editer-collaborateur',
  templateUrl: './editer-collaborateur.component.html',
  styleUrls: ['./editer-collaborateur.component.css']
})
export class EditerCollaborateurComponent implements OnInit {

  collaborateur: ModelCollaborateur;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private collaborateurService: ServiceCollaborateur,
              private router: Router) { }

  ngOnInit() {
    this.collaborateurService.getCollaborateur(this.id)
      .subscribe(data => {
        this.collaborateur = data as ModelCollaborateur;
      }, error => {
        console.log(error);
      });
  }

  updateCollaborateur() {
    this.collaborateurService.updateCollaborateur(this.collaborateur)
      .subscribe(data1 => {
        console.log(data1);
        alert('Mise à jour effectuée');
        this.router.navigate(['collaborateurs']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
