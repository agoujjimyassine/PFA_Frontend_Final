import {ModelTypeCarburant} from './model.typeCarburant';
import {ModelPuissanceFiscale} from './model.puissanceFiscale';
import {ModelModeleVehicule} from './model.modeleVehicule';
import {ModelMarqueVehicule} from './model.marqueVehicule';

export class ModelVehicule {

  id: number;
  immatriculation = '';
  numeroSerie = '';
  dateCirculation = '';
  kilometrage = 0;
  referenceCouleur = '';
  proprietaire = '';
  couleur = '';
  description = '';
  typeCarburant: ModelTypeCarburant;
  puissanceFiscale: ModelPuissanceFiscale;
  modeleVehicule: ModelModeleVehicule;
  marqueVehicule: ModelMarqueVehicule;

}
