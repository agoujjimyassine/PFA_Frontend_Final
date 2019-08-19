import {ModelClient} from './model.client';
import {ModelVehicule} from './model.vehicule';
import {ModelAgenceAssurance} from './model.agenceAssurance';
import {ModelDemandeReparation} from './model.demandeReparation';

export class ModelDossier {

  id: number;
  numero = '';
  dateCreation: Date = null;
  statut = '';
  observation = '';
  client: ModelClient;
  vehicule: ModelVehicule;
  agenceAssurance: ModelAgenceAssurance;
  demandeReparation: ModelDemandeReparation;

}
