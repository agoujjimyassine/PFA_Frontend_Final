import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModelRole} from '../../model/model.role';
import {ServiceRole} from '../../service/service.role';

@Component({
  selector: 'app-editer-role',
  templateUrl: './editer-role.component.html',
  styleUrls: ['./editer-role.component.css']
})
export class EditerRoleComponent implements OnInit {

  role: ModelRole;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private roleService: ServiceRole,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.roleService.getRole(this.id)
      .subscribe(data => {
        this.role = data as ModelRole;
      }, error => {
        console.log(error);
      });
  }

  updateRole() {
    this.roleService.updateRole(this.role)
      .subscribe(data1 => {
        console.log(data1);
        alert('Mise à jour effectuée');
        this.router.navigate(['roles']);
      }, error => {
        console.log(error);
        alert('Probléme');
      });
  }
}
