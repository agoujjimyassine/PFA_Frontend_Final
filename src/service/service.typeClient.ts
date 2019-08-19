import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelTypeClient} from '../model/model.typeClient';


@Injectable()
export class ServiceTypeClient {

  constructor(private http: HttpClient) {}

  getTypesClients() {
    return this.http.get('http://localhost:8080/typeClients')
      .map(resp => resp);
  }

  getTypeClient(id: number) {
    return this.http.get('http://localhost:8080/typeClients/' + id)
      .map(resp => resp);
  }

  saveTypeClient(typeClient: ModelTypeClient) {
    return this.http.post('http://localhost:8080/typeClients', typeClient)
      .map(resp => resp);
  }

  updateTypeClient(typeClient: ModelTypeClient) {
    return this.http.put('http://localhost:8080/typeClients', typeClient)
      .map(resp => resp);
  }

  deleteTypeClient(id: number) {
    return this.http.delete('http://localhost:8080/typeClients/' + id)
      .map(resp => resp);
  }

}
