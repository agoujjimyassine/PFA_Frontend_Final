import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerContactDossierComponent } from './editer-contact-dossier.component';

describe('EditerContactDossierComponent', () => {
  let component: EditerContactDossierComponent;
  let fixture: ComponentFixture<EditerContactDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerContactDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerContactDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
