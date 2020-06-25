import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCVtStateComponent } from './id-c-vt-state.component';

describe('IdCVtStateComponent', () => {
  let component: IdCVtStateComponent;
  let fixture: ComponentFixture<IdCVtStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCVtStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCVtStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
