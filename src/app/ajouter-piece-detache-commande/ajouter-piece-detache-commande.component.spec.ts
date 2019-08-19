import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPieceDetacheCommandeComponent } from './ajouter-piece-detache-commande.component';

describe('AjouterPieceDetacheCommandeComponent', () => {
  let component: AjouterPieceDetacheCommandeComponent;
  let fixture: ComponentFixture<AjouterPieceDetacheCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPieceDetacheCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPieceDetacheCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
