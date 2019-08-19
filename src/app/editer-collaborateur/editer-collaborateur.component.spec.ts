import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerCollaborateurComponent } from './editer-collaborateur.component';

describe('EditerCollaborateurComponent', () => {
  let component: EditerCollaborateurComponent;
  let fixture: ComponentFixture<EditerCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
