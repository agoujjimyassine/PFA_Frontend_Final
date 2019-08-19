import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelTypeContact} from '../model/model.typeContact';

@Injectable()
export class ServiceTypeContact {

  constructor(private http: HttpClient) {}

  getTypesContacts() {
    return this.http.get('http://localhost:8080/typeContacts')
      .map(resp => resp);
  }

  getTypeContact(id: number) {
    return this.http.get('http://localhost:8080/typeContacts/' + id)
      .map(resp => resp);
  }

  saveTypeContact(typeContact: ModelTypeContact) {
    return this.http.post('http://localhost:8080/typeContacts', typeContact)
      .map(resp => resp);
  }

  updateTypeContact(typeContact: ModelTypeContact) {
    return this.http.put('http://localhost:8080/typeContacts', typeContact)
      .map(resp => resp);
  }

  deleteTypeContact(id: number) {
    return this.http.delete('http://localhost:8080/typeContacts/' + id)
      .map(resp => resp);
  }

}
