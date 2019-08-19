import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratsAssurancesComponent } from './contrats-assurances.component';

describe('ContratsAssurancesComponent', () => {
  let component: ContratsAssurancesComponent;
  let fixture: ComponentFixture<ContratsAssurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratsAssurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratsAssurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
