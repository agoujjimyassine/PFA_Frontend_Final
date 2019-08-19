import { Component, OnInit } from '@angular/core';
import {ModelExpert} from '../../model/model.expert';
import {Router} from '@angular/router';
import {ServiceExpert} from '../../service/service.expert';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  expert: ModelExpert = new ModelExpert();
  pageExperts;
  confirm: boolean;

  constructor(private expertService: ServiceExpert, private router: Router) { }

  ngOnInit() {
    this.expertService.getExperts()
      .subscribe(data => {
        this.pageExperts = data;
      }, error => {
        console.log(error);
      });
  }

  onEditExpert(id: number) {
    this.router.navigate(['editer-expert', id]);
  }

  onDeleteExpert(expert: ModelExpert) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer cet expert ?');
    if (this.confirm) {
      this.expertService.deleteExpert(expert.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageExperts.content.splice(
            this.pageExperts.content.indexOf(expert), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

}
