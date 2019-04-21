import { Component, OnInit } from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ActivatedRoute, Router} from '@angular/router';
import {DossiersService} from '../../services/dossiers.service';

@Component({
  selector: 'app-editer-dossier',
  templateUrl: './editer-dossier.component.html',
  styleUrls: ['./editer-dossier.component.css']
})
export class EditerDossierComponent implements OnInit {

  dossier: ModelDossier;
  mode = 1;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private dossiersService: DossiersService, private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.dossiersService.getDossier(this.id)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
      }, error => {
        console.log(error);
      });
  }

  updateDossier() {
    this.dossiersService.updateDossier(this.dossier)
      .subscribe(data => {
        console.log(data);
        alert('Mise à jour effectuée');
        this.router.navigate(['dossiers']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }

}
