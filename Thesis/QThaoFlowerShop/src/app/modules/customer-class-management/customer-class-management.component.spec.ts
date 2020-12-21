import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClassManagementComponent } from './customer-class-management.component';

describe('CustomerClassManagementComponent', () => {
  let component: CustomerClassManagementComponent;
  let fixture: ComponentFixture<CustomerClassManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerClassManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerClassManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
