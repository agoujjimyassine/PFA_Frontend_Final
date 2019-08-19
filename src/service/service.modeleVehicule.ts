import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelModeleVehicule} from '../model/model.modeleVehicule';


@Injectable()
export class ServiceModeleVehicule {

  constructor(private http: HttpClient) {}

  getModelesVehicules() {
    return this.http.get('http://localhost:8080/modeleVehicules')
      .map(resp => resp);
  }

  getModeleVehicule(id: number) {
    return this.http.get('http://localhost:8080/modeleVehicules/' + id)
      .map(resp => resp);
  }

  saveModeleVehicule(modeleVehicule: ModelModeleVehicule) {
    return this.http.post('http://localhost:8080/modeleVehicules', modeleVehicule)
      .map(resp => resp);
  }

  updateModeleVehicule(modeleVehicule: ModelModeleVehicule) {
    return this.http.put('http://localhost:8080/modeleVehicules', modeleVehicule)
      .map(resp => resp);
  }

  deleteModeleVehicule(id: number) {
    return this.http.delete('http://localhost:8080/modeleVehicules/' + id)
      .map(resp => resp);
  }

}
