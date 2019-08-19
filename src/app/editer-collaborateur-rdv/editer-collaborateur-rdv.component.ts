import { Component, OnInit } from '@angular/core';
import {ModelCollaborateurRdv} from '../../model/model.collaborateurRdv';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceCollaborateurRdv} from '../../service/service.collaborateurRdv';
import {ServiceCollaborateur} from '../../service/service.collaborateur';

@Component({
  selector: 'app-editer-collaborateur-rdv',
  templateUrl: './editer-collaborateur-rdv.component.html',
  styleUrls: ['./editer-collaborateur-rdv.component.css']
})
export class EditerCollaborateurRdvComponent implements OnInit {

  collaborateurRdv: ModelCollaborateurRdv;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private collaborateurRdvService: ServiceCollaborateurRdv,
              private collaborateurService: ServiceCollaborateur,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.collaborateurRdvService.getCollaborateurRdv(this.id)
      .subscribe(data => {
        this.collaborateurRdv = data as ModelCollaborateurRdv;
      }, error => {
        console.log(error);
      });
  }

  updateCollaborateurRdv() {
    this.collaborateurService.updateCollaborateur(this.collaborateurRdv.collaborateur)
      .subscribe(data1 => {
        console.log(data1);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
    this.collaborateurRdvService.updateCollaborateurRdv(this.collaborateurRdv)
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
