import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCollaborateurRdvComponent } from './ajouter-collaborateur-rdv.component';

describe('AjouterCollaborateurRdvComponent', () => {
  let component: AjouterCollaborateurRdvComponent;
  let fixture: ComponentFixture<AjouterCollaborateurRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCollaborateurRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCollaborateurRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
