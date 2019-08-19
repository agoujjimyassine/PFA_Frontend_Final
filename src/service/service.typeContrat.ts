import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelTypeContact} from '../model/model.typeContact';

@Injectable()
export class ServiceTypeContrat {

  constructor(private http: HttpClient) {}

  getTypesContrats() {
    return this.http.get('http://localhost:8080/typeContrats')
      .map(resp => resp);
  }

  getTypeContrat(id: number) {
    return this.http.get('http://localhost:8080/typeContrats/' + id)
      .map(resp => resp);
  }

  saveTypeContrat(typeContact: ModelTypeContact) {
    return this.http.post('http://localhost:8080/typeContrats', typeContact)
      .map(resp => resp);
  }

  updateTypeContrat(typeContact: ModelTypeContact) {
    return this.http.put('http://localhost:8080/typeContrats', typeContact)
      .map(resp => resp);
  }

  deleteTypeContrat(id: number) {
    return this.http.delete('http://localhost:8080/typeContrats/' + id)
      .map(resp => resp);
  }

}
