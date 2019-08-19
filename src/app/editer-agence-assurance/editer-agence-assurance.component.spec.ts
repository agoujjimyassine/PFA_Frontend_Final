import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerAgenceAssuranceComponent } from './editer-agence-assurance.component';

describe('EditerAgenceAssuranceComponent', () => {
  let component: EditerAgenceAssuranceComponent;
  let fixture: ComponentFixture<EditerAgenceAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerAgenceAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerAgenceAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
