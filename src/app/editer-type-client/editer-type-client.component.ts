import { Component, OnInit } from '@angular/core';
import {ModelTypeClient} from '../../model/model.typeClient';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceTypeClient} from '../../service/service.typeClient';

@Component({
  selector: 'app-editer-type-client',
  templateUrl: './editer-type-client.component.html',
  styleUrls: ['./editer-type-client.component.css']
})
export class EditerTypeClientComponent implements OnInit {

  typeClient: ModelTypeClient;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private typeClientService: ServiceTypeClient,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.typeClientService.getTypeClient(this.id)
      .subscribe(data => {
        this.typeClient = data as ModelTypeClient;
      }, error => {
        console.log(error);
      });
  }

  updateTypeClient() {
    this.typeClientService.updateTypeClient(this.typeClient)
      .subscribe(data1 => {
        console.log(data1);
        alert('Mise à jour effectuée');
        this.router.navigate(['types-clients']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
