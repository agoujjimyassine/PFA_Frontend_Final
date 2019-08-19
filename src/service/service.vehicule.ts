import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelVehicule} from '../model/model.vehicule';


@Injectable()
export class ServiceVehicule {

  constructor(private http: HttpClient) {}

  getVehicules() {
    return this.http.get('http://localhost:8080/vehicules')
      .map(resp => resp);
  }

  getVehicule(id: number) {
    return this.http.get('http://localhost:8080/vehicules/' + id)
      .map(resp => resp);
  }

  saveVehicule(vehicule: ModelVehicule) {
    return this.http.post('http://localhost:8080/vehicules', vehicule)
      .map(resp => resp);
  }

  updateVehicule(vehicule: ModelVehicule) {
    return this.http.put('http://localhost:8080/vehicules', vehicule)
      .map(resp => resp);
  }

  deleteVehicule(id: number) {
    return this.http.delete('http://localhost:8080/vehicules/' + id)
      .map(resp => resp);
  }

}
