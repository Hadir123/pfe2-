import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRXComponent } from './new-rx.component';

describe('NewRXComponent', () => {
  let component: NewRXComponent;
  let fixture: ComponentFixture<NewRXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
