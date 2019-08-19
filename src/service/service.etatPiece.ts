import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelClient} from '../model/model.client';


@Injectable()
export class ServiceEtatPiece {

  constructor(private http: HttpClient) {}

  getEtatPieces() {
    return this.http.get('http://localhost:8080/etatPieces')
      .map(resp => resp);
  }

  getEtatPiece(id: number) {
    return this.http.get('http://localhost:8080/etatPieces/' + id)
      .map(resp => resp);
  }

  saveEtatPiece(client: ModelClient) {
    return this.http.post('http://localhost:8080/etatPieces', client)
      .map(resp => resp);
  }

  updateEtatPiece(client: ModelClient) {
    return this.http.put('http://localhost:8080/etatPieces', client)
      .map(resp => resp);
  }

  deleteEtatPiece(id: number) {
    return this.http.delete('http://localhost:8080/etatPieces/' + id)
      .map(resp => resp);
  }

}
