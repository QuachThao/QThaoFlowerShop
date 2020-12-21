import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPayOffComponent } from './dialog-pay-off.component';

describe('DialogPayOffComponent', () => {
  let component: DialogPayOffComponent;
  let fixture: ComponentFixture<DialogPayOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPayOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPayOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
