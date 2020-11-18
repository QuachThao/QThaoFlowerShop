import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticComponent } from './romantic.component';

describe('RomanticComponent', () => {
  let component: RomanticComponent;
  let fixture: ComponentFixture<RomanticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
