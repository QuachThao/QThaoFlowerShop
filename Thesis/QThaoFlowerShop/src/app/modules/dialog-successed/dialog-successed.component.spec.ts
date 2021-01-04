import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessedComponent } from './dialog-successed.component';

describe('DialogSuccessedComponent', () => {
  let component: DialogSuccessedComponent;
  let fixture: ComponentFixture<DialogSuccessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSuccessedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSuccessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
