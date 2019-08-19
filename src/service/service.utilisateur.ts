import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelUtilisateur} from '../model/model.utilisateur';

@Injectable()
export class ServiceUtilisateur {

  constructor(private http: HttpClient) {}

  getUtilisateurs() {
    return this.http.get('http://localhost:8080/utilisateurs')
      .map(resp => resp);
  }

  getUtilisateur(id: number) {
    return this.http.get('http://localhost:8080/utilisateurs/' + id)
      .map(resp => resp);
  }

  saveUtilisateur(utilisateur: ModelUtilisateur) {
    return this.http.post('http://localhost:8080/utilisateurs', utilisateur)
      .map(resp => resp);
  }

  updateUtilisateur(utilisateur: ModelUtilisateur) {
    return this.http.put('http://localhost:8080/utilisateurs', utilisateur)
      .map(resp => resp);
  }

  deleteUtilisateur(id: number) {
    return this.http.delete('http://localhost:8080/utilisateurs/' + id)
      .map(resp => resp);
  }

}
