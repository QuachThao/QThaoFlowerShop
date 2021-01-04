import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateManagementComponent } from './cate-management.component';

describe('CateManagementComponent', () => {
  let component: CateManagementComponent;
  let fixture: ComponentFixture<CateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
