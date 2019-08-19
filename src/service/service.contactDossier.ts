import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelContactDossier} from '../model/model.contactDossier';

@Injectable()
export class ServiceContactDossier {

  constructor(private http: HttpClient) {}

  getContactDossiers() {
    return this.http.get('http://localhost:8080/contactDossiers')
      .map(resp => resp);
  }

  getContactDossier(id: number) {
    return this.http.get('http://localhost:8080/contactDossiers/' + id)
      .map(resp => resp);
  }

  getContactDossiersByIdDossier(id: number) {
    return this.http.get('http://localhost:8080/contactDossiersByIdDossier/' + id)
      .map(resp => resp);
  }

  saveContactDossier(contactDossier: ModelContactDossier) {
    return this.http.post('http://localhost:8080/contactDossiers', contactDossier)
      .map(resp => resp);
  }

  updateContactDossier(contactDossier: ModelContactDossier) {
    return this.http.put('http://localhost:8080/contactDossiers', contactDossier)
      .map(resp => resp);
  }

  deleteContactDossier(id: number) {
    return this.http.delete('http://localhost:8080/contactDossiers/' + id)
      .map(resp => resp);
  }

}
