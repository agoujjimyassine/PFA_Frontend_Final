import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerRoleComponent } from './editer-role.component';

describe('EditerRoleComponent', () => {
  let component: EditerRoleComponent;
  let fixture: ComponentFixture<EditerRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
