import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesContactsComponent } from './types-contacts.component';

describe('TypesContactsComponent', () => {
  let component: TypesContactsComponent;
  let fixture: ComponentFixture<TypesContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
