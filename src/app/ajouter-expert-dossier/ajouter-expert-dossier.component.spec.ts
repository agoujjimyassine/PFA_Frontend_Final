import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterExpertDossierComponent } from './ajouter-expert-dossier.component';

describe('AjouterExpertDossierComponent', () => {
  let component: AjouterExpertDossierComponent;
  let fixture: ComponentFixture<AjouterExpertDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterExpertDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterExpertDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
