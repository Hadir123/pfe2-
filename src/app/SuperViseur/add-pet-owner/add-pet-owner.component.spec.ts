import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetOwnerComponent } from './add-pet-owner.component';

describe('AddPetOwnerComponent', () => {
  let component: AddPetOwnerComponent;
  let fixture: ComponentFixture<AddPetOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPetOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
