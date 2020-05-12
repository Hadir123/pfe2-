import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetOfPetwonerComponent } from './pet-of-petwoner.component';

describe('PetOfPetwonerComponent', () => {
  let component: PetOfPetwonerComponent;
  let fixture: ComponentFixture<PetOfPetwonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetOfPetwonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetOfPetwonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
