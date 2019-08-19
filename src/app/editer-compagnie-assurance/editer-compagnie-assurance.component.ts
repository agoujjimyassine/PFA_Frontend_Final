import {Component, Input, OnInit} from '@angular/core';
import {ModelCompagnieAssurance} from '../../model/model.compagnieAssurance';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceCompagnieAssurance} from '../../service/service.compagnieAssurance';

@Component({
  selector: 'app-editer-compagnie-assurance',
  templateUrl: './editer-compagnie-assurance.component.html',
  styleUrls: ['./editer-compagnie-assurance.component.css']
})
export class EditerCompagnieAssuranceComponent implements OnInit {

  compagnieAssurance: ModelCompagnieAssurance;
  @Input() id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private compagnieAssuranceService: ServiceCompagnieAssurance,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.compagnieAssuranceService.getCompagnieAssurance(this.id)
      .subscribe(data => {
        this.compagnieAssurance = data as ModelCompagnieAssurance;
      }, error => {
        console.log(error);
      });
  }

  updateCompagnieAssurance() {
    this.compagnieAssuranceService.updateCompagnieAssurance(this.compagnieAssurance)
      .subscribe(data1 => {
        console.log(data1);
        alert('Mise à jour effectuée');
        this.router.navigate(['compagnies-assurances']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
