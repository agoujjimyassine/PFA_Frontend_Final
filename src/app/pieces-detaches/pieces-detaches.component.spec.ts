import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesDetachesComponent } from './pieces-detaches.component';

describe('PiecesDetachesComponent', () => {
  let component: PiecesDetachesComponent;
  let fixture: ComponentFixture<PiecesDetachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesDetachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesDetachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
