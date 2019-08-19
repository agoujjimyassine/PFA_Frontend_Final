import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersExpertComponent } from './dossiers-expert.component';

describe('DossiersExpertComponent', () => {
  let component: DossiersExpertComponent;
  let fixture: ComponentFixture<DossiersExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
