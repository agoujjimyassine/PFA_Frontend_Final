import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPieceDetacheComponent } from './editer-piece-detache.component';

describe('EditerPieceDetacheComponent', () => {
  let component: EditerPieceDetacheComponent;
  let fixture: ComponentFixture<EditerPieceDetacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerPieceDetacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerPieceDetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
