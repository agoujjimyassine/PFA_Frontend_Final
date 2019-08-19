import {ModelExpert} from './model.expert';
import {ModelDossier} from './model.dossier';

export class ModelExpertDossier {

  id: number;
  date: Date;
  description = '';
  expert: ModelExpert;
  dossier: ModelDossier;

}
