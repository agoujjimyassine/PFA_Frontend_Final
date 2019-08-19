import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierAgenceAssuranceComponent } from './dossier-agence-assurance.component';

describe('DossierAgenceAssuranceComponent', () => {
  let component: DossierAgenceAssuranceComponent;
  let fixture: ComponentFixture<DossierAgenceAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossierAgenceAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierAgenceAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
