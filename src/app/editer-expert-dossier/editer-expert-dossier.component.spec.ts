import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerExpertDossierComponent } from './editer-expert-dossier.component';

describe('EditerExpertDossierComponent', () => {
  let component: EditerExpertDossierComponent;
  let fixture: ComponentFixture<EditerExpertDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerExpertDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerExpertDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
