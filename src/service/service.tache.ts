import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelTache} from '../model/model.tache';


@Injectable()
export class ServiceTache {

  constructor(private http: HttpClient) {}

  getTaches() {
    return this.http.get('http://localhost:8080/taches')
      .map(resp => resp);
  }

  getTache(id: number) {
    return this.http.get('http://localhost:8080/taches/' + id)
      .map(resp => resp);
  }

  getTachesByIdDemandeReparation(id: number) {
    return this.http.get('http://localhost:8080/tachesByIdDemandeReparation/' + id)
      .map(resp => resp);
  }

  saveTache(tache: ModelTache) {
    return this.http.post('http://localhost:8080/taches', tache)
      .map(resp => resp);
  }

  updateTache(tache: ModelTache) {
    return this.http.put('http://localhost:8080/taches', tache)
      .map(resp => resp);
  }

  deleteTache(id: number) {
    return this.http.delete('http://localhost:8080/taches/' + id)
      .map(resp => resp);
  }

}
