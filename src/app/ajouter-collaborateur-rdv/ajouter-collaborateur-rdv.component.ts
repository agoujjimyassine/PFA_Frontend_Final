import {Component, OnInit, Output} from '@angular/core';
import {ModelCollaborateurRdv} from '../../model/model.collaborateurRdv';
import {ModelCollaborateur} from '../../model/model.collaborateur';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceCollaborateurRdv} from '../../service/service.collaborateurRdv';
import {ServiceCollaborateur} from '../../service/service.collaborateur';
import {ModelRendezVous} from '../../model/model.rendezVous';
import {ServiceRendezVous} from '../../service/service.rendezVous';

@Component({
  selector: 'app-ajouter-collaborateur-rdv',
  templateUrl: './ajouter-collaborateur-rdv.component.html',
  styleUrls: ['./ajouter-collaborateur-rdv.component.css']
})
export class AjouterCollaborateurRdvComponent implements OnInit {

  collaborateurRdv: ModelCollaborateurRdv = new ModelCollaborateurRdv();
  collaborateur: ModelCollaborateur = new ModelCollaborateur();
  rendezVous: ModelRendezVous;
  @Output() id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private collaborateurRdvService: ServiceCollaborateurRdv,
              private collaborateurService: ServiceCollaborateur,
              private rendezVousService: ServiceRendezVous,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.rendezVousService.getRendezVous(this.id)
      .subscribe(data => {
        this.rendezVous = data as ModelRendezVous;
      }, error => {
        console.log(error);
      });
  }

  saveCollaboratteurRdv() {
    this.collaborateurService.saveCollaborateur(this.collaborateur)
      .subscribe(data => {
        this.collaborateur = data as ModelCollaborateur;

        this.collaborateurRdvService.saveCollaborateurRdv(this.collaborateurRdv)
          .subscribe(data1 => {
            this.collaborateurRdv = data1 as ModelCollaborateurRdv;
            this.collaborateurRdv.rendezVous = this.rendezVous;
            this.collaborateurRdv.collaborateur = this.collaborateur;
            this.collaborateurRdvService.updateCollaborateurRdv(this.collaborateurRdv)
              .subscribe(data2 => {
                alert('Collaborateur ajouté avec succès');
                this.router.navigate(['dossiers']);
              }, error => {
                console.log(error);
                alert('Probléme');
              });
          }, error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
      });
  }
}
