import { Component, OnInit } from '@angular/core';
import {ModelPieceDetache} from '../../model/model.pieceDetache';
import {ActivatedRoute} from '@angular/router';
import {ServicePieceDetache} from '../../service/service.pieceDetache';

@Component({
  selector: 'app-pieces-stati-resultat',
  templateUrl: './pieces-stati-resultat.component.html',
  styleUrls: ['./pieces-stati-resultat.component.css']
})
export class PiecesStatiResultatComponent implements OnInit {

  pieceDetachee: ModelPieceDetache;
  id: number;
  count: number;

  constructor(private activatedRoute: ActivatedRoute, private pieceDetacheeService: ServicePieceDetache) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.pieceDetacheeService.getPieceDetache(this.id)
      .subscribe(data => {
        this.pieceDetachee = data as ModelPieceDetache;

        this.pieceDetacheeService.countPieceDetacheByNom(this.pieceDetachee.nom)
          .subscribe(data1 => {
            this.count = data1 as number;
          }, error => {
            console.log(error);
          });

        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}
