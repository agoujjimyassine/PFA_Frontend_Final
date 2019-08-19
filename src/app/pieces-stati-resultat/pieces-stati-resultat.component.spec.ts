import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesStatiResultatComponent } from './pieces-stati-resultat.component';

describe('PiecesStatiResultatComponent', () => {
  let component: PiecesStatiResultatComponent;
  let fixture: ComponentFixture<PiecesStatiResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesStatiResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesStatiResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
