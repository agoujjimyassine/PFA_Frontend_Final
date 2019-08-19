import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mecanicien',
  templateUrl: './mecanicien.component.html',
  styleUrls: ['./mecanicien.component.css']
})
export class MecanicienComponent implements OnInit {
  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getMecanicienBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
