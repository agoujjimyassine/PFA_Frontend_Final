import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContactAgenceAssuranceComponent } from './ajouter-contact-agence-assurance.component';

describe('AjouterContactAgenceAssuranceComponent', () => {
  let component: AjouterContactAgenceAssuranceComponent;
  let fixture: ComponentFixture<AjouterContactAgenceAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContactAgenceAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterContactAgenceAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
