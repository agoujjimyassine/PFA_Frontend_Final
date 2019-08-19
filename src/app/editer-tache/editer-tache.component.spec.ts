import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerTacheComponent } from './editer-tache.component';

describe('EditerTacheComponent', () => {
  let component: EditerTacheComponent;
  let fixture: ComponentFixture<EditerTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
