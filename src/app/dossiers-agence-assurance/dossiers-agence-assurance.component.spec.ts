import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersAgenceAssuranceComponent } from './dossiers-agence-assurance.component';

describe('DossiersAgenceAssuranceComponent', () => {
  let component: DossiersAgenceAssuranceComponent;
  let fixture: ComponentFixture<DossiersAgenceAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersAgenceAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersAgenceAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
