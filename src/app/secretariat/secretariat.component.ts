import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-secretariat',
  templateUrl: './secretariat.component.html',
  styleUrls: ['./secretariat.component.css']
})
export class SecretariatComponent implements OnInit {
  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getSecretariatBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
