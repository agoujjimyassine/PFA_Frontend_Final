import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencesAssurancesCompagnieAssuranceComponent } from './agences-assurances-compagnie-assurance.component';

describe('AgencesAssurancesCompagnieAssuranceComponent', () => {
  let component: AgencesAssurancesCompagnieAssuranceComponent;
  let fixture: ComponentFixture<AgencesAssurancesCompagnieAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencesAssurancesCompagnieAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencesAssurancesCompagnieAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
