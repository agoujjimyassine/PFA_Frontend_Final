import {ModelDossier} from './model.dossier';
import {ModelCommande} from './model.commande';
import {ModelEtatPiece} from './model.etatPiece';

export class ModelPieceDetache {

  id: number;
  reference = '';
  nom = '';
  prix: number;
  quantite: number;
  dossier: ModelDossier;
  commande: ModelCommande;
  etatPiece: ModelEtatPiece;

}
