import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContactExpertComponent } from './ajouter-contact-expert.component';

describe('AjouterContactExpertComponent', () => {
  let component: AjouterContactExpertComponent;
  let fixture: ComponentFixture<AjouterContactExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContactExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterContactExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
