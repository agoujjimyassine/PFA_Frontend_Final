import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelExpertDossier} from '../model/model.expertDossier';

@Injectable()
export class ServiceExpertDossier {

  constructor(private http: HttpClient) {}

  getExpertsDossiers() {
    return this.http.get('http://localhost:8080/expertDossiers')
      .map(resp => resp);
  }

  getExpertDossier(id: number) {
    return this.http.get('http://localhost:8080/expertDossiers/' + id)
      .map(resp => resp);
  }

  getExpertsDossiersByIdExpert(id: number) {
    return this.http.get('http://localhost:8080/expertDossiersByIdExpert/' + id)
      .map(resp => resp);
  }

  getExpertsDossiersByIdDossier(id: number) {
    return this.http.get('http://localhost:8080/expertDossiersByIdDossier/' + id)
      .map(resp => resp);
  }

  saveExpertDossier(expertDossier: ModelExpertDossier) {
    return this.http.post('http://localhost:8080/expertDossiers', expertDossier)
      .map(resp => resp);
  }

  updateExpertDossier(expertDossier: ModelExpertDossier) {
    return this.http.put('http://localhost:8080/expertDossiers', expertDossier)
      .map(resp => resp);
  }

  deleteExpertDossier(id: number) {
    return this.http.delete('http://localhost:8080/expertDossiers/' + id)
      .map(resp => resp);
  }

}
