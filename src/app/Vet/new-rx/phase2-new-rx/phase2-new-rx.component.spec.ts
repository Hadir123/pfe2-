import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Phase2NewRxComponent } from './phase2-new-rx.component';

describe('Phase2NewRxComponent', () => {
  let component: Phase2NewRxComponent;
  let fixture: ComponentFixture<Phase2NewRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Phase2NewRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Phase2NewRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
