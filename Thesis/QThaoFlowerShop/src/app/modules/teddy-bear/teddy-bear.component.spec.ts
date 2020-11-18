import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeddyBearComponent } from './teddy-bear.component';

describe('TeddyBearComponent', () => {
  let component: TeddyBearComponent;
  let fixture: ComponentFixture<TeddyBearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeddyBearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeddyBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
