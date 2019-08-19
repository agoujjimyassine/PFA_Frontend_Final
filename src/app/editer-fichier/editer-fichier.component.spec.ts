import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerFichierComponent } from './editer-fichier.component';

describe('EditerFichierComponent', () => {
  let component: EditerFichierComponent;
  let fixture: ComponentFixture<EditerFichierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerFichierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
