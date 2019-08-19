import { Component, OnInit } from '@angular/core';
import {ModelRole} from '../../model/model.role';
import {Router} from '@angular/router';
import {ServiceRole} from '../../service/service.role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  role: ModelRole = new ModelRole();
  pageRoles;
  confirm: boolean;

  constructor(private roleService: ServiceRole, private router: Router) { }

  ngOnInit() {
    this.roleService.getRoles()
      .subscribe(data => {
        this.pageRoles = data;
      }, error => {
        console.log(error);
      });
  }

  onEditRole(id: number) {
    this.router.navigate(['editer-role', id]);
  }

  onDeleteRole(role: ModelRole) {
    this.confirm = window.confirm('Etes-vous sûr de vouloir supprimer ce role ?');
    if (this.confirm) {
      this.roleService.deleteRole(role.id)
        .subscribe(date => {
          alert('Suppression effectuée');
          this.pageRoles.content.splice(
            this.pageRoles.content.indexOf(role), 1
          );
        }, error => {
          console.log(error);
          alert('Probléme');
        });
    }
  }
}
