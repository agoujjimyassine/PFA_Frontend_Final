import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerDossierComponent } from './editer-dossier.component';

describe('EditerDossierComponent', () => {
  let component: EditerDossierComponent;
  let fixture: ComponentFixture<EditerDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
