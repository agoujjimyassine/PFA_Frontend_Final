import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencesAssurancesComponent } from './agences-assurances.component';

describe('AgencesAssurancesComponent', () => {
  let component: AgencesAssurancesComponent;
  let fixture: ComponentFixture<AgencesAssurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencesAssurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencesAssurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
