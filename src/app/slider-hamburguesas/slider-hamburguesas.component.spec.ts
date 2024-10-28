import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHamburguesasComponent } from './slider-hamburguesas.component';

describe('SliderHamburguesasComponent', () => {
  let component: SliderHamburguesasComponent;
  let fixture: ComponentFixture<SliderHamburguesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderHamburguesasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderHamburguesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
