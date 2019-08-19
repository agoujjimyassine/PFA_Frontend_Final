import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelTypeCarburant} from '../model/model.typeCarburant';


@Injectable()
export class ServiceTypeCarburant {

  constructor(private http: HttpClient) {}

  getTypesCarburants() {
    return this.http.get('http://localhost:8080/typeCarburants')
      .map(resp => resp);
  }

  getTypeCarburant(id: number) {
    return this.http.get('http://localhost:8080/typeCarburants/' + id)
      .map(resp => resp);
  }

  saveTypeCarburant(typeCarburants: ModelTypeCarburant) {
    return this.http.post('http://localhost:8080/typeCarburants', typeCarburants)
      .map(resp => resp);
  }

  updateTypeCarburant(typeCarburants: ModelTypeCarburant) {
    return this.http.put('http://localhost:8080/typeCarburants', typeCarburants)
      .map(resp => resp);
  }

  deleteTypeCarburant(id: number) {
    return this.http.delete('http://localhost:8080/typeCarburants/' + id)
      .map(resp => resp);
  }

}
