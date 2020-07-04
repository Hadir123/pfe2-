import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPetOwnerComponent } from './password-pet-owner.component';

describe('PasswordPetOwnerComponent', () => {
  let component: PasswordPetOwnerComponent;
  let fixture: ComponentFixture<PasswordPetOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordPetOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
