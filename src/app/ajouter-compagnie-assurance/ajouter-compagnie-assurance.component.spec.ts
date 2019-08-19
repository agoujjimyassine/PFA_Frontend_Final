import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCompagnieAssuranceComponent } from './ajouter-compagnie-assurance.component';

describe('AjouterCompagnieAssuranceComponent', () => {
  let component: AjouterCompagnieAssuranceComponent;
  let fixture: ComponentFixture<AjouterCompagnieAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCompagnieAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCompagnieAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
