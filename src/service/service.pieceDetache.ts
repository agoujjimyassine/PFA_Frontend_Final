import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelPieceDetache} from '../model/model.pieceDetache';


@Injectable()
export class ServicePieceDetache {

  constructor(private http: HttpClient) {}

  countPieceDetacheByNom(nom: string) {
    return this.http.get('http://localhost:8080/countPieceDetacheesByNom/' + nom)
      .map(resp => resp);
  }

  getPiecesDetaches() {
    return this.http.get('http://localhost:8080/pieceDetachees')
      .map(resp => resp);
  }

  getPieceDetache(id: number) {
    return this.http.get('http://localhost:8080/pieceDetachees/' + id)
      .map(resp => resp);
  }

  getPieceDetachesByIdDossier(id: number) {
    return this.http.get('http://localhost:8080/pieceDetacheesByIdDossier/' + id)
      .map(resp => resp);
  }

  getPieceDetachesByIdCommande(id: number) {
    return this.http.get('http://localhost:8080/pieceDetacheesByIdCommande/' + id)
      .map(resp => resp);
  }

  savePieceDetache(pieceDetache: ModelPieceDetache) {
    return this.http.post('http://localhost:8080/pieceDetachees', pieceDetache)
      .map(resp => resp);
  }

  updatePieceDetache(pieceDetache: ModelPieceDetache) {
    return this.http.put('http://localhost:8080/pieceDetachees', pieceDetache)
      .map(resp => resp);
  }

  deletePieceDetache(id: number) {
    return this.http.delete('http://localhost:8080/pieceDetachees/' + id)
      .map(resp => resp);
  }

}
