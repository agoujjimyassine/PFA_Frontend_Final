import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelCollaborateurRdv} from '../model/model.collaborateurRdv';

@Injectable()
export class ServiceCollaborateurRdv {

  constructor(private http: HttpClient) {}

  getCollaborateurRdvs() {
    return this.http.get('http://localhost:8080/collaborateurRdvs')
      .map(resp => resp);
  }

  getCollaborateurRdv(id: number) {
    return this.http.get('http://localhost:8080/collaborateurRdvs/' + id)
      .map(resp => resp);
  }

  getCollaborateurRdvsByIdRendezVous(id: number) {
    return this.http.get('http://localhost:8080/collaborateurRdvsByIdRendezVous/' + id)
      .map(resp => resp);
  }

  saveCollaborateurRdv(collaborateurRdv: ModelCollaborateurRdv) {
    return this.http.post('http://localhost:8080/collaborateurRdvs', collaborateurRdv)
      .map(resp => resp);
  }

  updateCollaborateurRdv(collaborateurRdv: ModelCollaborateurRdv) {
    return this.http.put('http://localhost:8080/collaborateurRdvs', collaborateurRdv)
      .map(resp => resp);
  }

  deleteCollaborateurRdv(id: number) {
    return this.http.delete('http://localhost:8080/collaborateurRdvs/' + id)
      .map(resp => resp);
  }

}
