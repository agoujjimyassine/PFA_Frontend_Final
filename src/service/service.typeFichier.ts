import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelTypeFichier} from '../model/model.typeFichier';


@Injectable()
export class ServiceTypeFichier {

  constructor(private http: HttpClient) {}

  getTypesFichiers() {
    return this.http.get('http://localhost:8080/typeFichiers')
      .map(resp => resp);
  }

  getTypeFichier(id: number) {
    return this.http.get('http://localhost:8080/typeFichiers/' + id)
      .map(resp => resp);
  }

  saveTypeFichier(typeFichier: ModelTypeFichier) {
    return this.http.post('http://localhost:8080/typeFichiers', typeFichier)
      .map(resp => resp);
  }

  updateTypeFichier(typeFichier: ModelTypeFichier) {
    return this.http.put('http://localhost:8080/typeFichiers', typeFichier)
      .map(resp => resp);
  }

  deleteTypeFichier(id: number) {
    return this.http.delete('http://localhost:8080/typeFichiers/' + id)
      .map(resp => resp);
  }

}
