import {Component, OnInit, Output} from '@angular/core';
import {ModelDossier} from '../../model/model.dossier';
import {ModelVehicule} from '../../model/model.vehicule';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDossier} from '../../service/service.dossier';
import {ServiceVehicule} from '../../service/service.vehicule';
import {ModelPuissanceFiscale} from '../../model/model.puissanceFiscale';
import {ModelModeleVehicule} from '../../model/model.modeleVehicule';
import {ServicePuissanceFiscale} from '../../service/service.puissanceFiscale';
import {ServiceTypeCarburant} from '../../service/service.typeCarburant';
import {ServiceModeleVehicule} from '../../service/service.modeleVehicule';
import {ServiceMarqueVehicule} from '../../service/service.marqueVehicule';
import {ModelTypeCarburant} from '../../model/model.typeCarburant';
import {ModelMarqueVehicule} from '../../model/model.marqueVehicule';


@Component({
  selector: 'app-ajouter-vehicule',
  templateUrl: './ajouter-vehicule.component.html',
  styleUrls: ['./ajouter-vehicule.component.css']
})
export class AjouterVehiculeComponent implements OnInit {

  vehicule: ModelVehicule = new ModelVehicule();
  dossier: ModelDossier;
  puissanceFiscale: ModelPuissanceFiscale;
  puissanceFiscale1: ModelPuissanceFiscale;
  typeCarburant: ModelTypeCarburant;
  typeCarburant1: ModelTypeCarburant;
  modeleVehicule: ModelModeleVehicule;
  modeleVehicule1: ModelModeleVehicule;
  marqueVehicule: ModelMarqueVehicule;
  marqueVehicule1: ModelMarqueVehicule;
  @Output() id: number;
  pagePuissancesFiscales;
  pagesTypesCarburants;
  pageMarquesVehicules;
  pageModelesVehicules;
  idtc: number;
  idpf: number;
  idmov: number;
  idmav: number;

  constructor(private activatedRoute: ActivatedRoute,
              private vehiculeService: ServiceVehicule,
              private dossierService: ServiceDossier,
              private puissanceFiscaleService: ServicePuissanceFiscale,
              private typeCarburantService: ServiceTypeCarburant,
              private modelVehiculeService: ServiceModeleVehicule,
              private marqueVehiculeService: ServiceMarqueVehicule,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.puissanceFiscaleService.getPuissancesFiscales()
      .subscribe(data => {
        this.pagePuissancesFiscales = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.typeCarburantService.getTypesCarburants()
      .subscribe(data => {
        this.pagesTypesCarburants = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.modelVehiculeService.getModelesVehicules()
      .subscribe(data => {
        this.pageModelesVehicules = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.marqueVehiculeService.getMarquesVehicules()
      .subscribe(data => {
        this.pageMarquesVehicules = data;
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

  saveVehicule(idpf: number, idtc: number, idmov: number, idmav: number) {
    this.vehiculeService.saveVehicule(this.vehicule)
      .subscribe(data => {
        this.vehicule = data as ModelVehicule;

        this.typeCarburantService.getTypeCarburant(idtc)
          .subscribe(data1 => {
            this.typeCarburant1 = data1 as ModelTypeCarburant;
            this.vehicule.typeCarburant = this.typeCarburant1;

            this.vehiculeService.updateVehicule(this.vehicule)
              .subscribe(data2 => {
                this.dossier.vehicule = this.vehicule;

                this.dossierService.updateDossier(this.dossier)
                      .subscribe(data3 => {
                        console.log(data3);
                  }, error => {
                    console.log(error);
                    alert('Probléme');
                  });

              }, error => {
                console.log(error);
                alert('Probléme');
              });

          }, error => {
            console.log(error);
          });

        this.puissanceFiscaleService.getPuissanceFiscale(idpf)
          .subscribe(data1 => {
            this.puissanceFiscale1 = data1 as ModelPuissanceFiscale;
            this.vehicule.puissanceFiscale = this.puissanceFiscale1;

            this.vehiculeService.updateVehicule(this.vehicule)
              .subscribe(data2 => {
                this.dossier.vehicule = this.vehicule;

                this.dossierService.updateDossier(this.dossier)
                  .subscribe(data3 => {
                    console.log(data3);
                  }, error => {
                    console.log(error);
                    alert('Probléme');
                  });

              }, error => {
                console.log(error);
                alert('Probléme');
              });

          }, error => {
            console.log(error);
          });

        this.modelVehiculeService.getModeleVehicule(idmov)
          .subscribe(data1 => {
            this.modeleVehicule1 = data1 as ModelModeleVehicule;
            this.vehicule.modeleVehicule = this.modeleVehicule1;

            this.vehiculeService.updateVehicule(this.vehicule)
              .subscribe(data2 => {
                this.dossier.vehicule = this.vehicule;

                this.dossierService.updateDossier(this.dossier)
                  .subscribe(data3 => {
                    console.log(data3);
                  }, error => {
                    console.log(error);
                    alert('Probléme');
                  });

              }, error => {
                console.log(error);
                alert('Probléme');
              });

          }, error => {
            console.log(error);
          });

        this.marqueVehiculeService.getMarqueVehicule(idmav)
          .subscribe(data1 => {
            this.marqueVehicule1 = data1 as ModelMarqueVehicule;
            this.vehicule.marqueVehicule = this.marqueVehicule1;

            this.vehiculeService.updateVehicule(this.vehicule)
              .subscribe(data2 => {
                this.dossier.vehicule = this.vehicule;

                this.dossierService.updateDossier(this.dossier)
                  .subscribe(data3 => {
                    console.log(data3);
                    alert('Véhicule ajoutée avec succès');
                    this.router.navigate(['editer-dossier', this.id]);
                  }, error => {
                    console.log(error);
                    alert('Probléme');
                  });

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
