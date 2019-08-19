import {ModelCollaborateur} from './model.collaborateur';
import {ModelRole} from './model.role';

export class ModelUtilisateur {

  id: number;
  nom = '';
  prenom = '';
  email = '';
  username = '';
  password = '';
  collaborateur: ModelCollaborateur;
  role: ModelRole;

}
