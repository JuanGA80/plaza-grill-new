import { Component, OnInit, Input } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

interface Hamburguesas {
  id: number;
  title: string;
  imgTitle: string;
  foto: string;
  tabla: String;
  ingredientes: string[];
}

@Component({
  selector: 'app-slider-hamburguesas',
  templateUrl: './slider-hamburguesas.component.html',
  styleUrl: './slider-hamburguesas.component.css',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation3', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class SliderHamburguesasComponent implements OnInit {
  modalSwitch = false;
  indexPosition = 0;

  @Input() Hamburguesa: Hamburguesas[] = [];
  currentModalHamburguesa: Hamburguesas = this.Hamburguesa[0];

  constructor() {}

  ngOnInit(): void {}

  openModal(index: number): void {
    this.modalSwitch = true;
    this.indexPosition = index;
    this.currentModalHamburguesa = this.Hamburguesa[index];
    console.log(this.indexPosition, this.currentModalHamburguesa.id);
  }
  cerrarModal() {
    this.modalSwitch = false;
  }
  onAnimationFinal(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.modalSwitch = false;
    }
  }
}
