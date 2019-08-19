import {Component, OnInit, Output} from '@angular/core';
import {ModelAgenceAssurance} from '../../model/model.agenceAssurance';
import {ServiceAgenceAssurance} from '../../service/service.agenceAssurance';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dossier-agence-assurance',
  templateUrl: './dossier-agence-assurance.component.html',
  styleUrls: ['./dossier-agence-assurance.component.css']
})
export class DossierAgenceAssuranceComponent implements OnInit {

  agenceAssurance: ModelAgenceAssurance;
  @Output() id: number;

  constructor(private agenceAssuranceService: ServiceAgenceAssurance, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.agenceAssuranceService.getAgenceAssurance(this.id)
      .subscribe(data => {
        this.agenceAssurance = data as ModelAgenceAssurance;
        console.log(this.agenceAssurance.raisonSociale);
      }, error => {
        console.log(error);
      });
  }

}
