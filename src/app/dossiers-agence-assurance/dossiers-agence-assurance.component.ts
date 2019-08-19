import {Component, Input, OnInit} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';

@Component({
  selector: 'app-dossiers-agence-assurance',
  templateUrl: './dossiers-agence-assurance.component.html',
  styleUrls: ['./dossiers-agence-assurance.component.css']
})
export class DossiersAgenceAssuranceComponent implements OnInit {

  dossier: ModelDossier = new ModelDossier();
  listDossiers;
  @Input() id: number;

  constructor(private dossierService: ServiceDossier, private router: Router) { }

  ngOnInit() {
    this.dossierService.getDossiersByIdAgenceAssurance(this.id)
      .subscribe(data => {
        this.listDossiers = data;
      }, error => {
        console.log(error);
      });
  }

}
