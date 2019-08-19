import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelExpert} from '../model/model.expert';

@Injectable()
export class ServiceExpert {

  constructor(private http: HttpClient) {}

  getExperts() {
    return this.http.get('http://localhost:8080/experts')
      .map(resp => resp);
  }

  getExpert(id: number) {
    return this.http.get('http://localhost:8080/experts/' + id)
      .map(resp => resp);
  }

  getExpertsByIdDossier(id: number) {
    return this.http.get('http://localhost:8080/expertsByIdDossier/' + id)
      .map(resp => resp);
  }

  saveExpert(expert: ModelExpert) {
    return this.http.post('http://localhost:8080/experts', expert)
      .map(resp => resp);
  }

  updateExpert(expert: ModelExpert) {
    return this.http.put('http://localhost:8080/experts', expert)
      .map(resp => resp);
  }

  deleteExpert(id: number) {
    return this.http.delete('http://localhost:8080/experts/' + id)
      .map(resp => resp);
  }

}
