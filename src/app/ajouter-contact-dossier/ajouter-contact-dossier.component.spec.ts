import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContactDossierComponent } from './ajouter-contact-dossier.component';

describe('AjouterContactDossierComponent', () => {
  let component: AjouterContactDossierComponent;
  let fixture: ComponentFixture<AjouterContactDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContactDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterContactDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
