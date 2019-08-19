import {Component, Input, OnInit} from '@angular/core';
import {ModelRendezVous} from '../../model/model.rendezVous';
import {Router} from '@angular/router';
import {ServiceRendezVous} from '../../service/service.rendezVous';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  rendezVous: ModelRendezVous = new ModelRendezVous();
  listRendezVous;
  confirm: boolean;
  @Input() id: number;

  constructor(private rendezVousService: ServiceRendezVous, private router: Router) {
  }

  ngOnInit() {
    this.rendezVousService.getRendezVoussByIdDossier(this.id)
      .subscribe(data => {
        this.listRendezVous = data;
      }, error => {
        console.log(error);
      });
  }

  onEditRendezVous(id: number) {
    this.router.navigate(['editer-rendez-vous', id]);
  }

  onDeleteRendezVous(rendezVous: ModelRendezVous) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce rendez vous ?');
    if (this.confirm) {
      this.rendezVousService.deleteRendezVous(rendezVous.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listRendezVous.splice(
            this.listRendezVous.indexOf(rendezVous), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addRendezVous(id: number) {
    this.router.navigate(['ajouter-rendez-vous', id]);
  }
}
