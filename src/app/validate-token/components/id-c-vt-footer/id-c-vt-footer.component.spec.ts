import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCVtFooterComponent } from './id-c-vt-footer.component';

describe('IdCVtFooterComponent', () => {
  let component: IdCVtFooterComponent;
  let fixture: ComponentFixture<IdCVtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCVtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCVtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
