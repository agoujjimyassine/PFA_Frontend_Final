import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelContratAssurance} from '../model/model.contratAssurance';


@Injectable()
export class ServiceContratAssurance {

  constructor(private http: HttpClient) {}

  getContratsAssurances() {
    return this.http.get('http://localhost:8080/contratAssurances')
      .map(resp => resp);
  }

  getContratAssurance(id: number) {
    return this.http.get('http://localhost:8080/contratAssurances/' + id)
      .map(resp => resp);
  }

  getContratAssuranceByIdDossier(id: number) {
    return this.http.get('http://localhost:8080/contratAssurancesByIdDossier/' + id)
      .map(resp => resp);
  }

  saveContratAssurance(contratAssurance: ModelContratAssurance) {
    return this.http.post('http://localhost:8080/contratAssurances', contratAssurance)
      .map(resp => resp);
  }

  updateContratAssurance(contratAssurance: ModelContratAssurance) {
    return this.http.put('http://localhost:8080/contratAssurances', contratAssurance)
      .map(resp => resp);
  }

  deleteContratAssurance(id: number) {
    return this.http.delete('http://localhost:8080/contratAssurances/' + id)
      .map(resp => resp);
  }

}
