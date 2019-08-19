import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerRendezVousComponent } from './editer-rendez-vous.component';

describe('EditerRendezVousComponent', () => {
  let component: EditerRendezVousComponent;
  let fixture: ComponentFixture<EditerRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerRendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
