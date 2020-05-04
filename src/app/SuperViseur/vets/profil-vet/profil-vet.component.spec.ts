import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilVetComponent } from './profil-vet.component';

describe('ProfilVetComponent', () => {
  let component: ProfilVetComponent;
  let fixture: ComponentFixture<ProfilVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
