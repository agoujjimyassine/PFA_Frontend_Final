import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPieceDetacheComponent } from './ajouter-piece-detache.component';

describe('AjouterPieceDetacheComponent', () => {
  let component: AjouterPieceDetacheComponent;
  let fixture: ComponentFixture<AjouterPieceDetacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPieceDetacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPieceDetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
