import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutclientComponent } from './ajoutclient.component';

describe('AjoutclientComponent', () => {
  let component: AjoutclientComponent;
  let fixture: ComponentFixture<AjoutclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
