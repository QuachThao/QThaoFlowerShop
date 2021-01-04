import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFailAllComponent } from './dialog-fail-all.component';

describe('DialogFailAllComponent', () => {
  let component: DialogFailAllComponent;
  let fixture: ComponentFixture<DialogFailAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFailAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFailAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
