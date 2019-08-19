import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesClientsComponent } from './types-clients.component';

describe('TypesClientsComponent', () => {
  let component: TypesClientsComponent;
  let fixture: ComponentFixture<TypesClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
