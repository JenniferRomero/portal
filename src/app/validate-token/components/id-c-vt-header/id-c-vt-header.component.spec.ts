import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCVtHeaderComponent } from './id-c-vt-header.component';

describe('IdCVtHeaderComponent', () => {
  let component: IdCVtHeaderComponent;
  let fixture: ComponentFixture<IdCVtHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCVtHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCVtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
