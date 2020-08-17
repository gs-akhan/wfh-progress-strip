import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexgridComponent } from './complexgrid.component';

describe('ComplexgridComponent', () => {
  let component: ComplexgridComponent;
  let fixture: ComponentFixture<ComplexgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
