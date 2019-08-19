import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContactClientComponent } from './ajouter-contact-client.component';

describe('AjouterContactClientComponent', () => {
  let component: AjouterContactClientComponent;
  let fixture: ComponentFixture<AjouterContactClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterContactClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterContactClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
