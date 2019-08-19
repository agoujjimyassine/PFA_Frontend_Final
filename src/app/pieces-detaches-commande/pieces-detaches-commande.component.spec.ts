import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesDetachesCommandeComponent } from './pieces-detaches-commande.component';

describe('PiecesDetachesCommandeComponent', () => {
  let component: PiecesDetachesCommandeComponent;
  let fixture: ComponentFixture<PiecesDetachesCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesDetachesCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesDetachesCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
