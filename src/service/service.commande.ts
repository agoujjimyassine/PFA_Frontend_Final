import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelCommande} from '../model/model.commande';


@Injectable()
export class ServiceCommande {

  constructor(private http: HttpClient) {}

  getCommandes() {
    return this.http.get('http://localhost:8080/commandes')
      .map(resp => resp);
  }

  getCommande(id: number) {
    return this.http.get('http://localhost:8080/commandes/' + id)
      .map(resp => resp);
  }

  saveCommande(commande: ModelCommande) {
    return this.http.post('http://localhost:8080/commandes', commande)
      .map(resp => resp);
  }

  getCommandesByIdFichier(id: number) {
    return this.http.get('http://localhost:8080/commandesByIdFournisseur/' + id)
      .map(resp => resp);
  }

  updateCommande(commande: ModelCommande) {
    return this.http.put('http://localhost:8080/commandes', commande)
      .map(resp => resp);
  }

  deleteCommande(id: number) {
    return this.http.delete('http://localhost:8080/commandes/' + id)
      .map(resp => resp);
  }

}
