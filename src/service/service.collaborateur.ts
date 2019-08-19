import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelCollaborateur} from '../model/model.collaborateur';

@Injectable()
export class ServiceCollaborateur {

  constructor(private http: HttpClient) {}

  getCollaborateurs() {
    return this.http.get('http://localhost:8080/collaborateurs')
      .map(resp => resp);
  }

  getCollaborateur(id: number) {
    return this.http.get('http://localhost:8080/collaborateurs/' + id)
      .map(resp => resp);
  }

  saveCollaborateur(collaborateur: ModelCollaborateur) {
    return this.http.post('http://localhost:8080/collaborateurs', collaborateur)
      .map(resp => resp);
  }

  updateCollaborateur(collaborateur: ModelCollaborateur) {
    return this.http.put('http://localhost:8080/collaborateurs', collaborateur)
      .map(resp => resp);
  }

  deleteCollaborateur(id: number) {
    return this.http.delete('http://localhost:8080/collaborateurs/' + id)
      .map(resp => resp);
  }

}
