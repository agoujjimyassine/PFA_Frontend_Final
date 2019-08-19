import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelPhase} from '../model/model.phase';


@Injectable()
export class ServicePhase {

  constructor(private http: HttpClient) {}

  getPhases() {
    return this.http.get('http://localhost:8080/phases')
      .map(resp => resp);
  }

  getPhase(id: number) {
    return this.http.get('http://localhost:8080/phases/' + id)
      .map(resp => resp);
  }

  savePhase(phase: ModelPhase) {
    return this.http.post('http://localhost:8080/phases', phase)
      .map(resp => resp);
  }

  updatePhase(phase: ModelPhase) {
    return this.http.put('http://localhost:8080/phases', phase)
      .map(resp => resp);
  }

  deletePhase(id: number) {
    return this.http.delete('http://localhost:8080/phases/' + id)
      .map(resp => resp);
  }

}
