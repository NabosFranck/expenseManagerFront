import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefraisComponent } from './listefrais.component';

describe('ListefraisComponent', () => {
  let component: ListefraisComponent;
  let fixture: ComponentFixture<ListefraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
