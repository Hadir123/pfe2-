import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPharmacistAdminComponent } from './edit-pharmacist-admin.component';

describe('EditPharmacistAdminComponent', () => {
  let component: EditPharmacistAdminComponent;
  let fixture: ComponentFixture<EditPharmacistAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPharmacistAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPharmacistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
