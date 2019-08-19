import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerExpertComponent } from './editer-expert.component';

describe('EditerExpertComponent', () => {
  let component: EditerExpertComponent;
  let fixture: ComponentFixture<EditerExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
