import { Component, OnInit, Input } from '@angular/core';
interface Cervezas {
  id: number;
  title: string;
  imgTitle: string;
  picture: string;
  nacionalidad: string;
  bandera: string;
  cantidad: string;
  estilo: string;
  grados: string;
}

@Component({
  selector: 'app-slider-cervezas',
  templateUrl: './slider-cervezas.component.html',
  styleUrl: './slider-cervezas.component.css',
})
export class SliderCervezasComponent implements OnInit {
  modalCerveza = false;
  indexCerveza = 0;

  @Input() Cerveza: Cervezas[] = [];
  currentModalCerveza: Cervezas = this.Cerveza[0];
  ngOnInit(): void {}
  openModalCervezas(index: number): void {
    this.modalCerveza = true;
    this.indexCerveza = index;
    this.currentModalCerveza = this.Cerveza[index];
    console.log(this.indexCerveza, this.currentModalCerveza.id);
  }
  cerrarModalCerveza() {
    this.modalCerveza = false;
  }
}
