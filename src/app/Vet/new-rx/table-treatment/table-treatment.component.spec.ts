import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTreatmentComponent } from './table-treatment.component';

describe('TableTreatmentComponent', () => {
  let component: TableTreatmentComponent;
  let fixture: ComponentFixture<TableTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
