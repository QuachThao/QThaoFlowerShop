import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddSuccessfulComponent } from './dialog-add-successful.component';

describe('DialogAddSuccessfulComponent', () => {
  let component: DialogAddSuccessfulComponent;
  let fixture: ComponentFixture<DialogAddSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
