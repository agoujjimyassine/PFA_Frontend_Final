import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDemandeReparationComponent } from './ajouter-demande-reparation.component';

describe('AjouterDemandeReparationComponent', () => {
  let component: AjouterDemandeReparationComponent;
  let fixture: ComponentFixture<AjouterDemandeReparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDemandeReparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDemandeReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
