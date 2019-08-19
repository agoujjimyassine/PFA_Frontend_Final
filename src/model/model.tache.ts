import {ModelDemandeReparation} from './model.demandeReparation';

export class ModelTache {

  id: number;
  nom = '';
  description = '';
  importance = 0;
  demandeReparation: ModelDemandeReparation;

}
