import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeClientComponent } from './ajouter-type-client.component';

describe('AjouterTypeClientComponent', () => {
  let component: AjouterTypeClientComponent;
  let fixture: ComponentFixture<AjouterTypeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTypeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
