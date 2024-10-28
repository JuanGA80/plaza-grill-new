import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCervezasComponent } from './slider-cervezas.component';

describe('SliderCervezasComponent', () => {
  let component: SliderCervezasComponent;
  let fixture: ComponentFixture<SliderCervezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderCervezasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderCervezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
