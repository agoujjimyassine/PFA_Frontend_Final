import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerCompagnieAssuranceComponent } from './editer-compagnie-assurance.component';

describe('EditerCompagnieAssuranceComponent', () => {
  let component: EditerCompagnieAssuranceComponent;
  let fixture: ComponentFixture<EditerCompagnieAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerCompagnieAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerCompagnieAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
