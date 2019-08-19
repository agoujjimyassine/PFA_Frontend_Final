import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelMotif} from '../model/model.motif';

@Injectable()
export class ServiceMotif {

  constructor(private http: HttpClient) {}

  getMotifs() {
    return this.http.get('http://localhost:8080/motifs')
      .map(resp => resp);
  }

  getMotif(id: number) {
    return this.http.get('http://localhost:8080/motifs/' + id)
      .map(resp => resp);
  }

  updateMotif(motif: ModelMotif) {
    return this.http.put('http://localhost:8080/motifs', motif)
      .map(resp => resp);
  }

  deleteMotif(id: number) {
    return this.http.delete('http://localhost:8080/motifs/' + id)
      .map(resp => resp);
  }

}
