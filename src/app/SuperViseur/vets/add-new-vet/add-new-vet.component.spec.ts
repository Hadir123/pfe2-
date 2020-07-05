import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVEtComponent } from './add-new-vet.component';

describe('AddNewVEtComponent', () => {
  let component: AddNewVEtComponent;
  let fixture: ComponentFixture<AddNewVEtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewVEtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVEtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
