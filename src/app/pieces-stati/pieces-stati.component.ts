import { Component, OnInit } from '@angular/core';
import {ServicePieceDetache} from '../../service/service.pieceDetache';
import {ModelPieceDetache} from '../../model/model.pieceDetache';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pieces-stati',
  templateUrl: './pieces-stati.component.html',
  styleUrls: ['./pieces-stati.component.css']
})
export class PiecesStatiComponent implements OnInit {

  pagePiecesDetachees;
  pieceDetachee: ModelPieceDetache;
  pieceDetachee1: ModelPieceDetache;
  id1: number;

  constructor(private pieceDetacheeService: ServicePieceDetache, private router: Router) { }

  ngOnInit() {
    this.pieceDetacheeService.getPiecesDetaches()
      .subscribe(data => {
        this.pagePiecesDetachees = data;
        console.log(data + 'HELLO');
      }, error => {
        console.log(error);
      });
  }

  send(id: number) {
    this.router.navigate(['pieces-stati-resultat', id]);
  }
  }
