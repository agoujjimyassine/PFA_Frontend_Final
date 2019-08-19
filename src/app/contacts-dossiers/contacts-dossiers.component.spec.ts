import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDossiersComponent } from './contacts-dossiers.component';

describe('ContactsDossiersComponent', () => {
  let component: ContactsDossiersComponent;
  let fixture: ComponentFixture<ContactsDossiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDossiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
