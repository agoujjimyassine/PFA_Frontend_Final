import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelDossier} from '../model/model.dossier';

@Injectable()
export class ServiceDossier {

  constructor(private http: HttpClient) {}

  getDossiers() {
    return this.http.get('http://localhost:8080/dossiers')
      .map(resp => resp);
  }

  getDossiersByIdAgenceAssurance(id: number) {
    return this.http.get('http://localhost:8080/dossiersByIdAgenceAssurance/' + id)
      .map(resp => resp);
  }

  getDossier(id: number) {
    return this.http.get('http://localhost:8080/dossiers/' + id)
      .map(resp => resp);
  }

  saveDossier(dossier: ModelDossier) {
    return this.http.post('http://localhost:8080/dossiers', dossier)
      .map(resp => resp);
  }

  updateDossier(dossier: ModelDossier) {
    return this.http.put('http://localhost:8080/dossiers', dossier)
      .map(resp => resp);
  }

  deleteDossier(id: number) {
    return this.http.delete('http://localhost:8080/dossiers/' + id)
      .map(resp => resp);
  }

}
