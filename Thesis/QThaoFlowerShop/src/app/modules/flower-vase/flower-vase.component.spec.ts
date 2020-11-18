import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerVaseComponent } from './flower-vase.component';

describe('FlowerVaseComponent', () => {
  let component: FlowerVaseComponent;
  let fixture: ComponentFixture<FlowerVaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerVaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerVaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
