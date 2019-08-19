import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesDossiersComponent } from './phases-dossiers.component';

describe('PhasesDossiersComponent', () => {
  let component: PhasesDossiersComponent;
  let fixture: ComponentFixture<PhasesDossiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhasesDossiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasesDossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
