import {ModelDossier} from './model.dossier';
import {ModelStatutRdv} from './model.statutRdv';
import {ModelMotif} from './model.motif';
import {ModelContact} from './model.contact';

export class ModelRendezVous {

  id: number;
  date: Date = null;
  duree: number;
  rapport = '';
  note = '';
  dossier: ModelDossier;
  statutRdv: ModelStatutRdv;
  motif: ModelMotif;
  contact: ModelContact;

}
