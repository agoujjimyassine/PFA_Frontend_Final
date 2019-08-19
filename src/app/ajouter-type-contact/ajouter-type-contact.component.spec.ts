import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeContactComponent } from './ajouter-type-contact.component';

describe('AjouterTypeContactComponent', () => {
  let component: AjouterTypeContactComponent;
  let fixture: ComponentFixture<AjouterTypeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTypeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
