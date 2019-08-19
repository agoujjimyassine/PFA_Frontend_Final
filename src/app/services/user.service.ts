import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private accueilUrl = 'http://localhost:8080/api/test/accueil';
  private secretariatUrl = 'http://localhost:8080/api/test/secretariat';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private mecanicienUrl = 'http://localhost:8080/api/test/mecanicien';
  private magasinierUrl = 'http://localhost:8080/api/test/magasinier';

  constructor(private http: HttpClient) { }

  getAccueilBoard(): Observable<string> {
    return this.http.get(this.accueilUrl, { responseType: 'text' });
  }

  getSecretariatBoard(): Observable<string> {
    return this.http.get(this.secretariatUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  getMecanicienBoard(): Observable<string> {
    return this.http.get(this.mecanicienUrl, { responseType: 'text' });
  }

  getMagasinierBoard(): Observable<string> {
    return this.http.get(this.magasinierUrl, { responseType: 'text' });
  }
}
