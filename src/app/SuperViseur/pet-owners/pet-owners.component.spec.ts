import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetOwnersComponent } from './pet-owners.component';

describe('PetOwnersComponent', () => {
  let component: PetOwnersComponent;
  let fixture: ComponentFixture<PetOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
