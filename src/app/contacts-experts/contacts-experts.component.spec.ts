import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsExpertsComponent } from './contacts-experts.component';

describe('ContactsExpertsComponent', () => {
  let component: ContactsExpertsComponent;
  let fixture: ComponentFixture<ContactsExpertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsExpertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
