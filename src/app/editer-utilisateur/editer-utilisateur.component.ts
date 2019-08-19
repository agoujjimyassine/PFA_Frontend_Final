import { Component, OnInit } from '@angular/core';
import {ModelUtilisateur} from '../../model/model.utilisateur';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceUtilisateur} from '../../service/service.utilisateur';
import {ModelRole} from '../../model/model.role';
import {ServiceRole} from '../../service/service.role';
import {ModelCollaborateur} from '../../model/model.collaborateur';
import {ServiceCollaborateur} from '../../service/service.collaborateur';

@Component({
  selector: 'app-editer-utilisateur',
  templateUrl: './editer-utilisateur.component.html',
  styleUrls: ['./editer-utilisateur.component.css']
})
export class EditerUtilisateurComponent implements OnInit {

  utilisateur: ModelUtilisateur;
  role: ModelRole;
  role1: ModelRole;
  collaborateur: ModelCollaborateur;
  collaborateur1: ModelCollaborateur;
  pageRoles;
  pageCollaborateurs;
  id: number;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private utilisateurService: ServiceUtilisateur,
              private roleService: ServiceRole,
              private collaborateurService: ServiceCollaborateur,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.roleService.getRoles()
      .subscribe(data => {
        this.pageRoles = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.collaborateurService.getCollaborateurs()
      .subscribe(data => {
        this.pageCollaborateurs = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.utilisateurService.getUtilisateur(this.id)
      .subscribe(data => {
        this.utilisateur = data as ModelUtilisateur;
        this.collaborateur1 = this.utilisateur.collaborateur;
      }, error => {
        console.log(error);
      });
  }

  updateUtilisateur() {
    this.collaborateurService.getCollaborateur(this.collaborateur1.id)
      .subscribe(data => {
        this.collaborateur1 = this.utilisateur.collaborateur;
        this.utilisateur.collaborateur = this.collaborateur1;
      }, error => {
        console.log(error);
      });
    this.utilisateurService.updateUtilisateur(this.utilisateur)
      .subscribe(data => {
        console.log(data);
        alert('Mise à jour effectuée');
        this.router.navigate(['utilisateurs']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
