import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerTypeContactComponent } from './editer-type-contact.component';

describe('EditerTypeContactComponent', () => {
  let component: EditerTypeContactComponent;
  let fixture: ComponentFixture<EditerTypeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerTypeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerTypeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
