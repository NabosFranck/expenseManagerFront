import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutfraisComponent } from './ajoutfrais.component';

describe('AjoutfraisComponent', () => {
  let component: AjoutfraisComponent;
  let fixture: ComponentFixture<AjoutfraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutfraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutfraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
