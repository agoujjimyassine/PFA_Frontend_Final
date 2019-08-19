import {ModelCollaborateur} from './model.collaborateur';
import {ModelRendezVous} from './model.rendezVous';

export class ModelCollaborateurRdv {

  id: number;
  description = '';
  collaborateur: ModelCollaborateur;
  rendezVous: ModelRendezVous;

}
