import {ModelCompagnieAssurance} from './model.compagnieAssurance';

export class ModelAgenceAssurance {

  id: number;
  raisonSociale = '';
  telephone = '';
  email = '';
  adresse = '';
  ville = '';
  fax = '';
  description = '';
  compagnieAssurance: ModelCompagnieAssurance;

}
