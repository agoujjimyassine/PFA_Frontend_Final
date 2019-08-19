import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelAgenceAssurance} from '../../model/model.agenceAssurance';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServiceAgenceAssurance} from '../../service/service.agenceAssurance';
import {ModelCompagnieAssurance} from '../../model/model.compagnieAssurance';
import {ServiceCompagnieAssurance} from '../../service/service.compagnieAssurance';

@Component({
  selector: 'app-ajouter-agence-assurance',
  templateUrl: './ajouter-agence-assurance.component.html',
  styleUrls: ['./ajouter-agence-assurance.component.css']
})
export class AjouterAgenceAssuranceComponent implements OnInit {

  agenceAssurance: ModelAgenceAssurance = new ModelAgenceAssurance();
  dossier: ModelDossier;
  compagnieAssurance: ModelCompagnieAssurance;
  compagnieAssurance1: ModelCompagnieAssurance;
  @Output() id: number;
  pageCompagniesAssurances;
  id1;

  constructor(private activatedRoute: ActivatedRoute,
              private agenceAssuranceService: ServiceAgenceAssurance,
              private compagnieAssuranceService: ServiceCompagnieAssurance,
              private dossierService: ServiceDossier,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.compagnieAssuranceService.getCompagniesAssurences()
      .subscribe(data => {
        this.pageCompagniesAssurances = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.dossierService.getDossier(this.id)
      .subscribe(data => {
        this.dossier = data as ModelDossier;
      }, error => {
        console.log(error);
      });
  }

  saveAgenceAssurance(id1: number) {
    this.agenceAssuranceService.saveAgenceAssurance(this.agenceAssurance)
      .subscribe(data => {
        this.agenceAssurance = data as ModelAgenceAssurance;

        this.compagnieAssuranceService.getCompagnieAssurance(id1)
          .subscribe(data1 => {
            this.compagnieAssurance1 = data1 as ModelCompagnieAssurance;
            this.agenceAssurance.compagnieAssurance = this.compagnieAssurance1;

            this.agenceAssuranceService.updateAgenceAssurance(this.agenceAssurance)
              .subscribe(data2 => {
                this.dossier.agenceAssurance = this.agenceAssurance;

                this.dossierService.updateDossier(this.dossier)
                  .subscribe(data3 => {
                    console.log(data3);
                  }, error => {
                    console.log(error);
                    alert('Probléme');
                  });

                alert('Agence Assurance ajoutée avec succès');
                this.router.navigate(['editer-dossier', this.id]);

              }, error => {
                console.log(error);
                alert('Probléme');
              });

          }, error => {
            console.log(error);
          });

      }, error => {
        console.log(error);
        alert('Probléme');
      });

  }

}
