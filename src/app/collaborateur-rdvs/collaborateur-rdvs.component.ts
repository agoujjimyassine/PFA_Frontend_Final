import {Component, Input, OnInit} from '@angular/core';
import {ModelCollaborateurRdv} from '../../model/model.collaborateurRdv';
import {Router} from '@angular/router';
import {ServiceCollaborateurRdv} from '../../service/service.collaborateurRdv';

@Component({
  selector: 'app-collaborateur-rdvs',
  templateUrl: './collaborateur-rdvs.component.html',
  styleUrls: ['./collaborateur-rdvs.component.css']
})
export class CollaborateurRdvsComponent implements OnInit {

  collaborateurRdv: ModelCollaborateurRdv = new ModelCollaborateurRdv();
  listCollaborateurRdv;
  confirm: boolean;
  @Input() id: number;

  constructor(private collaborateurRdvService: ServiceCollaborateurRdv, private router: Router) { }

  ngOnInit() {
    this.collaborateurRdvService.getCollaborateurRdvsByIdRendezVous(this.id)
      .subscribe(data => {
        this.listCollaborateurRdv = data;
      }, error => {
        console.log(error);
      });
  }

  onEditCollaborateurRdv(id: number) {
    this.router.navigate(['editer-collaborateur-rdv', id]);
  }

  onDeleteCollaborateurRdv(collaborateurRdv: ModelCollaborateurRdv) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce collaborateur ?');
    if (this.confirm) {
      this.collaborateurRdvService.deleteCollaborateurRdv(collaborateurRdv.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.listCollaborateurRdv.splice(
            this.listCollaborateurRdv.indexOf(collaborateurRdv), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }

  addCollaborateurRdv(id: number) {
    this.router.navigate(['ajouter-collaborateur-rdv', id]);
  }
}
