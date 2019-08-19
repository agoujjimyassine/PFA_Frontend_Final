import { Component, OnInit } from '@angular/core';
import {ModelExpert} from '../../model/model.expert';
import {Router} from '@angular/router';
import {ServiceExpert} from '../../service/service.expert';

@Component({
  selector: 'app-ajouter-expert',
  templateUrl: './ajouter-expert.component.html',
  styleUrls: ['./ajouter-expert.component.css']
})
export class AjouterExpertComponent implements OnInit {

  expert: ModelExpert = new ModelExpert();

  constructor(private expertService: ServiceExpert, private router: Router) { }

  ngOnInit() {
  }

  saveExpert() {
    this.expertService.saveExpert(this.expert)
      .subscribe(data => {
        this.expert = data as ModelExpert;
        alert('Expert ajouté avec succès');
        this.router.navigate(['experts']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
