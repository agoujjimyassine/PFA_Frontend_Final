import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsAgencesAssurancesComponent } from './contacts-agences-assurances.component';

describe('ContactsAgencesAssurancesComponent', () => {
  let component: ContactsAgencesAssurancesComponent;
  let fixture: ComponentFixture<ContactsAgencesAssurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsAgencesAssurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsAgencesAssurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
