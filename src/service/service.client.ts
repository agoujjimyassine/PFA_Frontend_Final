import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelClient} from '../model/model.client';


@Injectable()
export class ServiceClient {

  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get('http://localhost:8080/clients')
      .map(resp => resp);
  }

  getClient(id: number) {
    return this.http.get('http://localhost:8080/clients/' + id)
      .map(resp => resp);
  }

  saveClient(client: ModelClient) {
    return this.http.post('http://localhost:8080/clients', client)
      .map(resp => resp);
  }

  updateClient(client: ModelClient) {
    return this.http.put('http://localhost:8080/clients', client)
      .map(resp => resp);
  }

  deleteClient(id: number) {
    return this.http.delete('http://localhost:8080/clients/' + id)
      .map(resp => resp);
  }

}
