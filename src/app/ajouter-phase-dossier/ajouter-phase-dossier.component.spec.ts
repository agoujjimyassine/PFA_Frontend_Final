import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPhaseDossierComponent } from './ajouter-phase-dossier.component';

describe('AjouterPhaseDossierComponent', () => {
  let component: AjouterPhaseDossierComponent;
  let fixture: ComponentFixture<AjouterPhaseDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPhaseDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPhaseDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
