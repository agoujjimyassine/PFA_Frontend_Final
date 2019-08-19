import {ModelDossier} from './model.dossier';
import {ModelContact} from './model.contact';

export class ModelContactDossier {

  id: number;
  description = '';
  dossier: ModelDossier;
  contact: ModelContact;

}
