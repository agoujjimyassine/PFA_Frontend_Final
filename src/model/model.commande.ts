import {ModelFournisseur} from './model.fournisseur';

export class ModelCommande {

  id: number;
  reference = '';
  dateCreation: Date;
  montant = 0;
  fournisseur: ModelFournisseur;

}
