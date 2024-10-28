import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAlitasComponent } from './slider-alitas.component';

describe('SliderAlitasComponent', () => {
  let component: SliderAlitasComponent;
  let fixture: ComponentFixture<SliderAlitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderAlitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderAlitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
