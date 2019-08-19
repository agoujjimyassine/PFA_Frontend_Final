import {Component, Input, OnInit} from '@angular/core';
import {ModelVehicule} from '../../model/model.vehicule';
import {Router} from '@angular/router';
import {ServiceVehicule} from '../../service/service.vehicule';
import {ServicePuissanceFiscale} from '../../service/service.puissanceFiscale';
import {ServiceTypeCarburant} from '../../service/service.typeCarburant';
import {ServiceMarqueVehicule} from '../../service/service.marqueVehicule';
import {ModelTypeCarburant} from '../../model/model.typeCarburant';
import {ModelPuissanceFiscale} from '../../model/model.puissanceFiscale';
import {ModelMarqueVehicule} from '../../model/model.marqueVehicule';
import {ModelModeleVehicule} from '../../model/model.modeleVehicule';
import {ServiceModeleVehicule} from '../../service/service.modeleVehicule';

@Component({
  selector: 'app-editer-vehicule',
  templateUrl: './editer-vehicule.component.html',
  styleUrls: ['./editer-vehicule.component.css']
})
export class EditerVehiculeComponent implements OnInit {

  vehicule: ModelVehicule;
  typeCarburant: ModelTypeCarburant;
  typeCarburant1: ModelTypeCarburant;
  puissanceFiscale: ModelPuissanceFiscale;
  puissanceFiscale1: ModelPuissanceFiscale;
  marqueVehicule: ModelMarqueVehicule;
  marqueVehicule1: ModelMarqueVehicule;
  modeleVehicule: ModelModeleVehicule;
  modeleVehicule1: ModelModeleVehicule;
  @Input() id: number;
  pagePuissancesFiscales;
  pageTypesCarburants;
  pageMarquesVehicules;
  pageModelesVehicules;

  constructor(private vehiculeService: ServiceVehicule,
              private puissanceFiscaleService: ServicePuissanceFiscale,
              private typeCarburantService: ServiceTypeCarburant,
              private marqueVehiculeService: ServiceMarqueVehicule,
              private modeleVehiculeService: ServiceModeleVehicule,
              private router: Router) {}

  ngOnInit() {
    this.puissanceFiscaleService.getPuissancesFiscales()
      .subscribe(data => {
        this.pagePuissancesFiscales = data;
      }, error => {
        console.log(error);
      });
    this.typeCarburantService.getTypesCarburants()
      .subscribe(data => {
        this.pageTypesCarburants = data;
      }, error => {
        console.log(error);
      });
    this.modeleVehiculeService.getModelesVehicules()
      .subscribe(data => {
        this.pageModelesVehicules = data;
      }, error => {
        console.log(error);
      });
    this.marqueVehiculeService.getMarquesVehicules()
      .subscribe(data => {
        this.pageMarquesVehicules = data;
      }, error => {
        console.log(error);
      });
    this.vehiculeService.getVehicule(this.id)
      .subscribe(data => {
        this.vehicule = data as ModelVehicule;
        this.puissanceFiscale1 = this.vehicule.puissanceFiscale;
        this.typeCarburant1 = this.vehicule.typeCarburant;
        this.modeleVehicule1 = this.vehicule.modeleVehicule;
        this.marqueVehicule1 = this.vehicule.marqueVehicule;
      }, error => {
        console.log(error);
      });
  }

  updateVehicule() {
    this.puissanceFiscaleService.getPuissanceFiscale(this.puissanceFiscale1.id)
      .subscribe(data => {
        this.puissanceFiscale1 = this.vehicule.puissanceFiscale;
        this.vehicule.puissanceFiscale = this.puissanceFiscale1;
      }, error => {
        console.log(error);
      });
    this.typeCarburantService.getTypeCarburant(this.typeCarburant1.id)
      .subscribe(data => {
        this.typeCarburant1 = this.vehicule.typeCarburant;
        this.vehicule.typeCarburant = this.typeCarburant1;
      }, error => {
        console.log(error);
      });
    this.modeleVehiculeService.getModeleVehicule(this.modeleVehicule1.id)
      .subscribe(data => {
        this.modeleVehicule1 = this.vehicule.modeleVehicule;
        this.vehicule.modeleVehicule = this.modeleVehicule1;
      }, error => {
        console.log(error);
      });
    this.marqueVehiculeService.getMarqueVehicule(this.marqueVehicule1.id)
          .subscribe(data1 => {
            this.marqueVehicule1 = this.vehicule.marqueVehicule;
            this.vehicule.modeleVehicule = this.marqueVehicule1;
          }, error => {
            console.log(error);
          });

    this.vehiculeService.updateVehicule(this.vehicule)
      .subscribe(data => {
        console.log(data);
        alert('Mise à jour effectuée');
        this.router.navigate(['dossiers']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }

}
