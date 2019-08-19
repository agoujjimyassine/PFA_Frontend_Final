import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsClientsComponent } from './contacts-clients.component';

describe('ContactsClientsComponent', () => {
  let component: ContactsClientsComponent;
  let fixture: ComponentFixture<ContactsClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
