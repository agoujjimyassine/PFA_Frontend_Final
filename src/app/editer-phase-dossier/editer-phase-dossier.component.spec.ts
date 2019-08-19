import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPhaseDossierComponent } from './editer-phase-dossier.component';

describe('EditerPhaseDossierComponent', () => {
  let component: EditerPhaseDossierComponent;
  let fixture: ComponentFixture<EditerPhaseDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerPhaseDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerPhaseDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
