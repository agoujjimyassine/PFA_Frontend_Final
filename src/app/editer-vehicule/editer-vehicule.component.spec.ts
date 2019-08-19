import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerVehiculeComponent } from './editer-vehicule.component';

describe('EditerVehiculeComponent', () => {
  let component: EditerVehiculeComponent;
  let fixture: ComponentFixture<EditerVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
