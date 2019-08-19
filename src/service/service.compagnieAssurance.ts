import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelCompagnieAssurance} from '../model/model.compagnieAssurance';


@Injectable()
export class ServiceCompagnieAssurance {

  constructor(private http: HttpClient) {}

  getCompagniesAssurences() {
    return this.http.get('http://localhost:8080/compagnieAssurances')
      .map(resp => resp);
  }

  getCompagnieAssurance(id: number) {
    return this.http.get('http://localhost:8080/compagnieAssurances/' + id)
      .map(resp => resp);
  }

  saveCompagnieAssurance(compagnieAssurance: ModelCompagnieAssurance) {
    return this.http.post('http://localhost:8080/compagnieAssurances', compagnieAssurance)
      .map(resp => resp);
  }

  updateCompagnieAssurance(compagnieAssurance: ModelCompagnieAssurance) {
    return this.http.put('http://localhost:8080/compagnieAssurances', compagnieAssurance)
      .map(resp => resp);
  }

  deleteCompagnieAssurance(id: number) {
    return this.http.delete('http://localhost:8080/compagnieAssurances/' + id)
      .map(resp => resp);
  }

}
