import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesStatiComponent } from './pieces-stati.component';

describe('PiecesStatiComponent', () => {
  let component: PiecesStatiComponent;
  let fixture: ComponentFixture<PiecesStatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesStatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesStatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
