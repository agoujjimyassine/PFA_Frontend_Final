import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelPuissanceFiscale} from '../model/model.puissanceFiscale';


@Injectable()
export class ServicePuissanceFiscale {

  constructor(private http: HttpClient) {}

  getPuissancesFiscales() {
    return this.http.get('http://localhost:8080/puissanceFiscales')
      .map(resp => resp);
  }

  getPuissanceFiscale(id: number) {
    return this.http.get('http://localhost:8080/puissanceFiscales/' + id)
      .map(resp => resp);
  }

  savePuissanceFiscale(puissanceFiscale: ModelPuissanceFiscale) {
    return this.http.post('http://localhost:8080/puissanceFiscales', puissanceFiscale)
      .map(resp => resp);
  }

  updatePuissanceFiscale(puissanceFiscale: ModelPuissanceFiscale) {
    return this.http.put('http://localhost:8080/puissanceFiscales', puissanceFiscale)
      .map(resp => resp);
  }

  deletePuissanceFiscale(id: number) {
    return this.http.delete('http://localhost:8080/puissanceFiscales/' + id)
      .map(resp => resp);
  }

}
