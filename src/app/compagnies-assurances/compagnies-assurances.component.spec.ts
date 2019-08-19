import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagniesAssurancesComponent } from './compagnies-assurances.component';

describe('CompagniesAssurancesComponent', () => {
  let component: CompagniesAssurancesComponent;
  let fixture: ComponentFixture<CompagniesAssurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompagniesAssurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagniesAssurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
