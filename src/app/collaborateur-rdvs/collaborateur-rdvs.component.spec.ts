import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurRdvsComponent } from './collaborateur-rdvs.component';

describe('CollaborateurRdvsComponent', () => {
  let component: CollaborateurRdvsComponent;
  let fixture: ComponentFixture<CollaborateurRdvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateurRdvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateurRdvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
