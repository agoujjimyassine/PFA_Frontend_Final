import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelRole} from '../model/model.role';

@Injectable()
export class ServiceRole {

  constructor(private http: HttpClient) {}

  getRoles() {
    return this.http.get('http://localhost:8080/roles')
      .map(resp => resp);
  }

  getRole(id: number) {
    return this.http.get('http://localhost:8080/roles/' + id)
      .map(resp => resp);
  }

  saveRole(role: ModelRole) {
    return this.http.post('http://localhost:8080/roles', role)
      .map(resp => resp);
  }

  updateRole(role: ModelRole) {
    return this.http.put('http://localhost:8080/roles', role)
      .map(resp => resp);
  }

  deleteRole(id: number) {
    return this.http.delete('http://localhost:8080/roles/' + id)
      .map(resp => resp);
  }

}
