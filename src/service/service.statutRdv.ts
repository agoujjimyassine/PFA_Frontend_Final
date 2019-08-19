import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelStatutRdv} from '../model/model.statutRdv';

@Injectable()
export class ServiceStatutRdv {

  constructor(private http: HttpClient) {}

  getStatutsRdvs() {
    return this.http.get('http://localhost:8080/statutRdvs')
      .map(resp => resp);
  }

  getStatutRdv(id: number) {
    return this.http.get('http://localhost:8080/statutRdvs/' + id)
      .map(resp => resp);
  }

  saveStatutRdv(statutRdv: ModelStatutRdv) {
    return this.http.post('http://localhost:8080/statutRdvs', statutRdv)
      .map(resp => resp);
  }

  updateStatutRdv(statutRdv: ModelStatutRdv) {
    return this.http.put('http://localhost:8080/statutRdvs', statutRdv)
      .map(resp => resp);
  }

  deleteStatutRdv(id: number) {
    return this.http.delete('http://localhost:8080/statutRdvs/' + id)
      .map(resp => resp);
  }

}
