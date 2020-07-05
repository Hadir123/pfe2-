import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxHistoryComponent } from './rx-history.component';

describe('RxHistoryComponent', () => {
  let component: RxHistoryComponent;
  let fixture: ComponentFixture<RxHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
