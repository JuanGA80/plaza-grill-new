import { Component, Input, OnInit } from '@angular/core';

interface Alitas {
  id: number;
  title: string;
  imagenAlita: string;
  imgModal: String;
}

@Component({
  selector: 'app-slider-alitas',
  templateUrl: './slider-alitas.component.html',
  styleUrl: './slider-alitas.component.css',
})
export class SliderAlitasComponent implements OnInit {
  modalAlita = false;
  indexAlita = 0;

  @Input() Alita: Alitas[] = [];
  currentModalAlita: Alitas = this.Alita[0];
  ngOnInit(): void {}

  openModalAlita(index: number) {
    if(index == 2 ){
      return
    }
    this.modalAlita = true;
    this.indexAlita = index;
    this.currentModalAlita = this.Alita[index];
  }
  closeModalAlita() {
    this.modalAlita = false;
  }
}
