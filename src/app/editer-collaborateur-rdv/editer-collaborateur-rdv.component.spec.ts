import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerCollaborateurRdvComponent } from './editer-collaborateur-rdv.component';

describe('EditerCollaborateurRdvComponent', () => {
  let component: EditerCollaborateurRdvComponent;
  let fixture: ComponentFixture<EditerCollaborateurRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerCollaborateurRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerCollaborateurRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
