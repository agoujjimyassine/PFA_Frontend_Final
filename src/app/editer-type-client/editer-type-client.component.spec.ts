import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerTypeClientComponent } from './editer-type-client.component';

describe('EditerTypeClientComponent', () => {
  let component: EditerTypeClientComponent;
  let fixture: ComponentFixture<EditerTypeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerTypeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerTypeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
