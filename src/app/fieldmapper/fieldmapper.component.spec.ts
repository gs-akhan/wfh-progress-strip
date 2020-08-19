import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldmapperComponent } from './fieldmapper.component';

describe('FieldmapperComponent', () => {
  let component: FieldmapperComponent;
  let fixture: ComponentFixture<FieldmapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldmapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldmapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
