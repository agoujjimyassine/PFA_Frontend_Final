import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelPhaseDossier} from '../model/model.phaseDossier';


@Injectable()
export class ServicePhaseDossier {

  constructor(private http: HttpClient) {}

  getPhasesDossiers() {
    return this.http.get('http://localhost:8080/phaseDossiers')
      .map(resp => resp);
  }

  getPhaseDossier(id: number) {
    return this.http.get('http://localhost:8080/phaseDossiers/' + id)
      .map(resp => resp);
  }

  getPhaseDossiersByIdDossier(id: number) {
    return this.http.get('http://localhost:8080/phaseDossiersByIdDossier/' + id)
      .map(resp => resp);
  }

  savePhaseDossier(phaseDossier: ModelPhaseDossier) {
    return this.http.post('http://localhost:8080/phaseDossiers', phaseDossier)
      .map(resp => resp);
  }

  updatePhaseDossier(phaseDossier: ModelPhaseDossier) {
    return this.http.put('http://localhost:8080/phaseDossiers', phaseDossier)
      .map(resp => resp);
  }

  deletePhaseDossier(id: number) {
    return this.http.delete('http://localhost:8080/phaseDossiers/' + id)
      .map(resp => resp);
  }

}
