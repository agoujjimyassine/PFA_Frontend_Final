import {ModelVehicule} from './model.vehicule';
import {ModelAgenceAssurance} from './model.agenceAssurance';
import {ModelTypeContrat} from './model.typeContrat';

export class ModelContratAssurance {

  id: number;
  numeroPolice = '';
  dateDebut: Date;
  dateFin: Date;
  typeContrat: ModelTypeContrat;
  vehicule: ModelVehicule;
  agenceAssurance: ModelAgenceAssurance;
}
