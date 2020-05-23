import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharamcistComponent } from './add-pharamcist.component';

describe('AddPharamcistComponent', () => {
  let component: AddPharamcistComponent;
  let fixture: ComponentFixture<AddPharamcistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharamcistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharamcistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
