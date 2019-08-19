import {Component, OnInit, Output} from '@angular/core';
import {ModelDemandeReparation} from '../../model/model.demandeReparation';
import {ModelTache} from '../../model/model.tache';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDemandeReparation} from '../../service/service.demandeReparation';
import {ServiceTache} from '../../service/service.tache';

@Component({
  selector: 'app-ajouter-tache',
  templateUrl: './ajouter-tache.component.html',
  styleUrls: ['./ajouter-tache.component.css']
})
export class AjouterTacheComponent implements OnInit {

  tache: ModelTache = new ModelTache();
  demandeReparation: ModelDemandeReparation;
  @Output() id: number;
  id1: number;

  constructor(private activatedRoute: ActivatedRoute,
              private demandeReparationService: ServiceDemandeReparation,
              private tacheService: ServiceTache,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.demandeReparationService.getDemandeReparation(this.id)
      .subscribe(data => {
        this.demandeReparation = data as ModelDemandeReparation;
      }, error => {
        console.log(error);
      });
  }

  saveTache() {
    this.tacheService.saveTache(this.tache)
      .subscribe(data => {
        this.tache = data as ModelTache;

        this.tache.demandeReparation = this.demandeReparation;

        this.tacheService.updateTache(this.tache)
          .subscribe(data3 => {
            console.log(data3);
            alert('Tache ajoutée avec succès');
            this.router.navigate(['dossiers']);
          }, error => {
            console.log(error);
            alert('Probléme');
          });
      }, error => {
        console.log(error);
        alert('Probléme');
      });

  }

}
