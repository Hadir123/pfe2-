import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPetOwnerComponent } from './profil-pet-owner.component';

describe('ProfilPetOwnerComponent', () => {
  let component: ProfilPetOwnerComponent;
  let fixture: ComponentFixture<ProfilPetOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPetOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
