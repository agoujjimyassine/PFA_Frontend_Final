import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelDemandeReparation} from '../model/model.demandeReparation';


@Injectable()
export class ServiceDemandeReparation {

  constructor(private http: HttpClient) {}

  getDemandesReparations() {
    return this.http.get('http://localhost:8080/demandeReparations')
      .map(resp => resp);
  }

  getDemandeReparation(id: number) {
    return this.http.get('http://localhost:8080/demandeReparations/' + id)
      .map(resp => resp);
  }

  saveDemandeReparation(demandeReparation: ModelDemandeReparation) {
    return this.http.post('http://localhost:8080/demandeReparations', demandeReparation)
      .map(resp => resp);
  }

  updateDemandeReparation(demandeReparation: ModelDemandeReparation) {
    return this.http.put('http://localhost:8080/demandeReparations', demandeReparation)
      .map(resp => resp);
  }

  deleteDemandeReparation(id: number) {
    return this.http.delete('http://localhost:8080/demandeReparations/' + id)
      .map(resp => resp);
  }

}
