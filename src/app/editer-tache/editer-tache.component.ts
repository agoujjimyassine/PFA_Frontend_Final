import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceTache} from '../../service/service.tache';
import {ModelTache} from '../../model/model.tache';

@Component({
  selector: 'app-editer-tache',
  templateUrl: './editer-tache.component.html',
  styleUrls: ['./editer-tache.component.css']
})
export class EditerTacheComponent implements OnInit {

  tache: ModelTache;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private tacheService: ServiceTache,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.tacheService.getTache(this.id)
      .subscribe(data => {
        this.tache = data as ModelTache;
      }, error => {
        console.log(error);
      });
  }

  updateTache() {
    this.tacheService.updateTache(this.tache)
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
