import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPieceDetacheCommandeComponent } from './editer-piece-detache-commande.component';

describe('EditerPieceDetacheCommandeComponent', () => {
  let component: EditerPieceDetacheCommandeComponent;
  let fixture: ComponentFixture<EditerPieceDetacheCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerPieceDetacheCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerPieceDetacheCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
