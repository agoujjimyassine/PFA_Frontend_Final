import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerDemandeReparationComponent } from './editer-demande-reparation.component';

describe('EditerDemandeReparationComponent', () => {
  let component: EditerDemandeReparationComponent;
  let fixture: ComponentFixture<EditerDemandeReparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerDemandeReparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerDemandeReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
