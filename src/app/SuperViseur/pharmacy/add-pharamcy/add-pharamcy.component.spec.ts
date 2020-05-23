import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharamcyComponent } from './add-pharamcy.component';

describe('AddPharamcyComponent', () => {
  let component: AddPharamcyComponent;
  let fixture: ComponentFixture<AddPharamcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharamcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharamcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
