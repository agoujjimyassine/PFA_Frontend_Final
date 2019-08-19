import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAgenceAssuranceComponent } from './ajouter-agence-assurance.component';

describe('AjouterAgenceAssuranceComponent', () => {
  let component: AjouterAgenceAssuranceComponent;
  let fixture: ComponentFixture<AjouterAgenceAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAgenceAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAgenceAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
