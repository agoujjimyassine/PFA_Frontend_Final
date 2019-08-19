import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModelExpert} from '../../model/model.expert';
import {ServiceExpert} from '../../service/service.expert';

@Component({
  selector: 'app-editer-expert',
  templateUrl: './editer-expert.component.html',
  styleUrls: ['./editer-expert.component.css']
})
export class EditerExpertComponent implements OnInit {

  expert: ModelExpert;
  @Input() id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private expertService: ServiceExpert,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.expertService.getExpert(this.id)
      .subscribe(data => {
        this.expert = data as ModelExpert;
      }, error => {
        console.log(error);
      });
  }

  updateExpert() {
    this.expertService.updateExpert(this.expert)
      .subscribe(data1 => {
        console.log(data1);
        alert('Mise à jour effectuée');
        this.router.navigate(['experts']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
