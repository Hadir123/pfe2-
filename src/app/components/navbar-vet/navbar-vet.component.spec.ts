import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVetComponent } from './navbar-vet.component';

describe('NavbarVetComponent', () => {
  let component: NavbarVetComponent;
  let fixture: ComponentFixture<NavbarVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
