import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelAgenceAssurance} from '../model/model.agenceAssurance';


@Injectable()
export class ServiceAgenceAssurance {

  constructor(private http: HttpClient) {}

  getAgencesAssurences() {
    return this.http.get('http://localhost:8080/agenceAssurances')
      .map(resp => resp);
  }

  getAgencesAsuurancesByIdCompagnieAssurance(id: number) {
    return this.http.get('http://localhost:8080/agencesAssurancesByIdCompagnieAssurance/' + id)
      .map(resp => resp);
  }

  getAgenceAssurance(id: number) {
    return this.http.get('http://localhost:8080/agenceAssurances/' + id)
      .map(resp => resp);
  }

  saveAgenceAssurance(agenceAssurance: ModelAgenceAssurance) {
    return this.http.post('http://localhost:8080/agenceAssurances', agenceAssurance)
      .map(resp => resp);
  }

  updateAgenceAssurance(agenceAssurance: ModelAgenceAssurance) {
    return this.http.put('http://localhost:8080/agenceAssurances', agenceAssurance)
      .map(resp => resp);
  }

  deleteAgenceAssurance(id: number) {
    return this.http.delete('http://localhost:8080/agenceAssurances/' + id)
      .map(resp => resp);
  }

}
