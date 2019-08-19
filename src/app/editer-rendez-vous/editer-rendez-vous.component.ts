import {Component, OnInit} from '@angular/core';
import {ModelRendezVous} from '../../model/model.rendezVous';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceRendezVous} from '../../service/service.rendezVous';
import {ModelMotif} from '../../model/model.motif';
import {ModelStatutRdv} from '../../model/model.statutRdv';
import {ServiceMotif} from '../../service/service.motif';
import {ServiceStatutRdv} from '../../service/service.statutRdv';

@Component({
  selector: 'app-editer-rendez-vous',
  templateUrl: './editer-rendez-vous.component.html',
  styleUrls: ['./editer-rendez-vous.component.css']
})
export class EditerRendezVousComponent implements OnInit {

  rendezVous: ModelRendezVous;
  motif: ModelMotif;
  motif1: ModelMotif;
  statutRdv: ModelStatutRdv;
  statutRdv1: ModelStatutRdv;
  id: number;
  pageMotifs;
  pageStatutsRdvs;

  constructor(private activatedRoute: ActivatedRoute,
              private rendezVousService: ServiceRendezVous,
              private motifService: ServiceMotif,
              private statutRdvService: ServiceStatutRdv,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.statutRdvService.getStatutsRdvs()
      .subscribe(data => {
        this.pageStatutsRdvs = data;
        console.log(data + 'statut');
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.motifService.getMotifs()
      .subscribe(data => {
        this.pageMotifs = data;
        console.log(data + 'motif');
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.rendezVousService.getRendezVous(this.id)
      .subscribe(data => {
        this.rendezVous = data as ModelRendezVous;
        this.statutRdv1 = this.rendezVous.statutRdv;
        this.motif1 = this.rendezVous.motif;
      }, error => {
        console.log(error);
      });
  }

  updateRendezVous() {
    this.statutRdvService.getStatutRdv(this.statutRdv1.id)
      .subscribe(data => {
        this.statutRdv1 = this.rendezVous.statutRdv;
        this.rendezVous.statutRdv = this.statutRdv1;
      }, error => {
        console.log(error);
      });
    this.motifService.getMotif(this.motif1.id)
      .subscribe(data => {
        this.motif1 = this.rendezVous.motif;
        this.rendezVous.motif = this.motif1;
      }, error => {
        console.log(error);
      });
    this.rendezVousService.updateRendezVous(this.rendezVous)
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
