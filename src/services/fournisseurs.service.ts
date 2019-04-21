import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ModelFournisseur} from '../model/model.fournisseur';

@Injectable()
export class FournisseursService {

  constructor(private http: HttpClient) {}

  getFournisseurs() {
    return this.http.get('http://localhost:8080/fournisseurs')
      .map(resp => resp);
  }

  getFournisseur(id: number) {
    return this.http.get('http://localhost:8080/fournisseurs/' + id)
      .map(resp => resp);
  }

  saveFournisseur(fournisseur: ModelFournisseur) {
    return this.http.post('http://localhost:8080/fournisseurs', fournisseur)
      .map(resp => resp);
  }

  updateFournisseur(fournisseur: ModelFournisseur) {
    return this.http.put('http://localhost:8080/fournisseurs', fournisseur)
      .map(resp => resp);
  }

  deleteFournisseur(id: number) {
    return this.http.delete('http://localhost:8080/fournisseurs/' + id)
      .map(resp => resp);
  }

}
