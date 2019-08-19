import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelMarqueVehicule} from '../model/model.marqueVehicule';


@Injectable()
export class ServiceMarqueVehicule {

  constructor(private http: HttpClient) {}

  getMarquesVehicules() {
    return this.http.get('http://localhost:8080/marqueVehicules')
      .map(resp => resp);
  }

  getMarqueVehicule(id: number) {
    return this.http.get('http://localhost:8080/marqueVehicules/' + id)
      .map(resp => resp);
  }

  saveMarqueVehicule(marqueVehicule: ModelMarqueVehicule) {
    return this.http.post('http://localhost:8080/marqueVehicules', marqueVehicule)
      .map(resp => resp);
  }

  updateMarqueVehicule(marqueVehicule: ModelMarqueVehicule) {
    return this.http.put('http://localhost:8080/marqueVehicules', marqueVehicule)
      .map(resp => resp);
  }

  deleteMarqueVehicule(id: number) {
    return this.http.delete('http://localhost:8080/marqueVehicules/' + id)
      .map(resp => resp);
  }

}
