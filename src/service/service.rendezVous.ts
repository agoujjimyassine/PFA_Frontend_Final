import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelRendezVous} from '../model/model.rendezVous';


@Injectable()
export class ServiceRendezVous {

  constructor(private http: HttpClient) {}

  getRendezVouss() {
    return this.http.get('http://localhost:8080/rendezVouss')
      .map(resp => resp);
  }

  getRendezVous(id: number) {
    return this.http.get('http://localhost:8080/rendezVouss/' + id)
      .map(resp => resp);
  }

  getRendezVoussByIdDossier(id: number) {
    return this.http.get('http://localhost:8080/rendezVoussByIdDossier/' + id)
      .map(resp => resp);
  }

  saveRendezVous(rendezVous: ModelRendezVous) {
    return this.http.post('http://localhost:8080/rendezVouss', rendezVous)
      .map(resp => resp);
  }

  updateRendezVous(rendezVous: ModelRendezVous) {
    return this.http.put('http://localhost:8080/rendezVouss', rendezVous)
      .map(resp => resp);
  }

  deleteRendezVous(id: number) {
    return this.http.delete('http://localhost:8080/rendezVouss/' + id)
      .map(resp => resp);
  }

}
