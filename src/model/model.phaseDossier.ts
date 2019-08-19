import {ModelPhase} from './model.phase';
import {ModelDossier} from './model.dossier';

export class ModelPhaseDossier {

  id: number;
  dateDebut: Date;
  dateFin: Date;
  dossier: ModelDossier;
  phase: ModelPhase;

}
