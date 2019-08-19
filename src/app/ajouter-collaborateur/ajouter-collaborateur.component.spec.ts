import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCollaborateurComponent } from './ajouter-collaborateur.component';

describe('AjouterCollaborateurComponent', () => {
  let component: AjouterCollaborateurComponent;
  let fixture: ComponentFixture<AjouterCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
