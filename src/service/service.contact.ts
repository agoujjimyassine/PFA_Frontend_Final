import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import {ModelContact} from '../model/model.contact';

@Injectable()
export class ServiceContact {

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get('http://localhost:8080/contacts')
      .map(resp => resp);
  }

  getContact(id: number) {
    return this.http.get('http://localhost:8080/contacts/' + id)
      .map(resp => resp);
  }

  getContactsByIdClient(id: number) {
    return this.http.get('http://localhost:8080/contactsByIdClient/' + id)
      .map(resp => resp);
  }

  getContactsByIdExpert(id: number) {
    return this.http.get('http://localhost:8080/contactsByIdExpert/' + id)
      .map(resp => resp);
  }

  getContactsByIdAgenceAssurance(id: number) {
    return this.http.get('http://localhost:8080/contactsByIdAgenceAssurance/' + id)
      .map(resp => resp);
  }

  saveContact(contact: ModelContact) {
    return this.http.post('http://localhost:8080/contacts', contact)
      .map(resp => resp);
  }

  updateContact(contact: ModelContact) {
    return this.http.put('http://localhost:8080/contacts', contact)
      .map(resp => resp);
  }

  deleteContact(id: number) {
    return this.http.delete('http://localhost:8080/contacts/' + id)
      .map(resp => resp);
  }

}
