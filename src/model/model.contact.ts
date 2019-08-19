import {ModelTypeContact} from './model.typeContact';
import {ModelClient} from './model.client';
import {ModelExpert} from './model.expert';
import {ModelAgenceAssurance} from './model.agenceAssurance';

export class ModelContact {

  id: number;
  email = '';
  nom = '';
  post = '';
  prenom = '';
  telephone = '';
  typeContact: ModelTypeContact;
  client: ModelClient;
  expert: ModelExpert;
  agenceAssurance: ModelAgenceAssurance;

}
