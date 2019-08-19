import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsDossiersComponent } from './experts-dossiers.component';

describe('ExpertsDossiersComponent', () => {
  let component: ExpertsDossiersComponent;
  let fixture: ComponentFixture<ExpertsDossiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsDossiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsDossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
