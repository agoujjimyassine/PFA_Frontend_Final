import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelFichier} from '../model/model.fichier';

@Injectable()
export class ServiceFichier {

  constructor(private http: HttpClient) {}

  getFichiers() {
    return this.http.get('http://localhost:8080/fichiers')
      .map(resp => resp);
  }

  getFichier(id: number) {
    return this.http.get('http://localhost:8080/fichiers/' + id)
      .map(resp => resp);
  }

  getFichiersByIdDossier(id: number) {
    return this.http.get('http://localhost:8080/fichiersByIdDossier/' + id)
      .map(resp => resp);
  }

  saveFichier(fichier: ModelFichier) {
    return this.http.post('http://localhost:8080/fichiers', fichier)
      .map(resp => resp);
  }

  updateFichier(fichier: ModelFichier) {
    return this.http.put('http://localhost:8080/fichiers', fichier)
      .map(resp => resp);
  }

  deleteFichier(id: number) {
    return this.http.delete('http://localhost:8080/fichiers/' + id)
      .map(resp => resp);
  }

}
