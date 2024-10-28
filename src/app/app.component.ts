import { Component } from '@angular/core';
import { StringifyOptions } from 'node:querystring';

interface Imagenes {
  id: number;
  imageSrc: string;
}
interface Hamburguesas {
  id: number;
  title: string;
  imgTitle: string;
  foto: string;
  tabla: string;
  ingredientes: string[];
}
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
interface Alitas {
  id: number;
  title: string;
  imagenAlita: string;
  imgModal: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'plaza-grill';

  data: Imagenes[] = [
    {
      id: 1,
      imageSrc: 'galery-1.jpg',
    },
    {
      id: 2,
      imageSrc: 'galery-4.jpg',
    },
    {
      id: 3,
      imageSrc: 'galery-7.jpg',
    },
    {
      id: 4,
      imageSrc: 'galery-2.jpg',
    },
    {
      id: 5,
      imageSrc: 'galery-5.jpg',
    },
    {
      id: 6,
      imageSrc: 'galery-8.jpg',
    },
    {
      id: 7,
      imageSrc: 'galery-10.png',
    },
    {
      id: 8,
      imageSrc: 'galery-8.jpg',
    },
    {
      id: 9,
      imageSrc: 'galery-9.jpg',
    },
  ];

  info: Hamburguesas[] = [
    {
      id: 0,
      title: 'Pizza Burguer',
      imgTitle: 'assets/images/hamburguers/pizza-burguer.webp',
      foto: 'assets/images/hamburguers/pizza-burguer.webp',
      tabla:  'assets/tabla.webp',
      ingredientes: [
        '225 gramos de carne',
        'Pepperoni',
        'Queso Manchego',
        'Salsa de tomate',
        'Una de nuestras carnes de hamburguesa',
      ],
    },
    {
      id: 1,
      title: 'Chicken Especial',
      imgTitle: 'assets/images/hamburguers/h-3.png',
      foto: 'assets/images/hamburguers/h-3.png',
      tabla:  'assets/tabla.webp',

      ingredientes: [
        '250 gramos de tiritas de pechuga de pollo empanizadas ',
        'Quso cheddar',
        'Queso manchego',
        'Tocino',
      ],
    },
    {
      id: 2,
      title: 'Chilli Cheese Burguer',
      imgTitle: 'assets/images/hamburguers/chili-cheese-burguer.webp',
      foto: 'assets/images/hamburguers/chili-cheese-burguer.webp',
      tabla:  'assets/tabla.webp',

      ingredientes: [
        '300 gramos de carne',
        'Todo el estilo Texano del Chilli beans',
        'Queso cheddar',
      ],
    },
    {
      id: 3,
      title: 'H.D.T.P.M.',
      imgTitle: 'assets/images/hamburguers/hdptm.webp',
      foto: 'assets/images/hamburguers/hdptm.webp',
      tabla:  'assets/tabla.webp',

      ingredientes: [
        '400 gramos de carne, 2 palitos de queso mozarrella',
        'Tocino',
        'Pepperoni',
        'Piña asada',
        'Queso cheddar',
        'Queso manchego',
      ],
    },
    {
      id: 4,
      title: 'Jack Daniel´s BBQ',
      imgTitle: 'assets/images/hamburguers/jack-daniels.webp',
      foto: 'assets/images/hamburguers/jack-daniels.webp',
      tabla:  'assets/tabla.webp',
      ingredientes: [
        '200 gramos de carne',
        'Mermelada de tocino',
        'Queso cheddar',
        'Queso Manchego',
        'Cebolla caramelizada',
        'Sazonada con un rico BBQ preparado con Whiskey Jack Daniel´s',
      ],
    },
    {
      id: 5,
      title: 'Smash Burguer',
      imgTitle: 'assets/images/hamburguers/smash-burguer.webp',
      foto: 'assets/images/hamburguers/smash-burguer.webp',
      tabla:  'assets/tabla.webp',
      ingredientes: [
        '200 gramos de carne ',
        'Queso manchego ',
        'Mermelada de tocino',
        'Cebolla caramelizada',
        'Todo envuelto en una masa de nuestros bollos y horneada al momento',
        'Tiempo aproximado de cocción de 25 minutos',
      ],
    },
  ];

  texto: Cervezas[] = [
    {
      id: 0,
      title: 'Stowford Berries',
      imgTitle: '',
      picture: 'assets/chela1.png',
      nacionalidad: 'Inglaterra',
      bandera: 'assets/inglaterra.png',
      cantidad: '440ml',
      estilo: 'Sidra de mora y bayas',
      grados: '4',
    },
    {
      id: 1,
      title: 'Liefmans Fruitesse',
      imgTitle: '',
      picture: 'assets/chela2.png',
      nacionalidad: 'Bélgica',
      bandera: 'assets/belgica.webp',
      cantidad: '250ml',
      estilo: 'Estilo frutal',
      grados: '3.8',
    },
    {
      id: 2,
      title: 'Guinness',
      imgTitle: '',
      picture: 'assets/chela3.png',
      nacionalidad: 'Irlanda',
      bandera: 'assets/irlanda.png',
      cantidad: '440ml',
      estilo: 'Stout',
      grados: '5',
    },
    {
      id: 3,
      title: 'Lagrimas Negras',
      imgTitle: '',
      picture: 'assets/lagrimas-negras.png',
      nacionalidad: 'México',
      bandera: 'assets/mexico.png',
      cantidad: '355ml',
      estilo: 'Stout',
      grados: '10',
    },
    {
      id: 4,
      title: 'Quilmes',
      imgTitle: '',
      picture: 'assets/quilmes.png',
      nacionalidad: 'Argentina',
      bandera: 'assets/argentina.jpg',
      cantidad: '340ml',
      estilo: 'Premium',
      grados: '4.9',
    },
    {
      id: 5,
      title: 'Barista',
      imgTitle: '',
      picture: 'assets/barista.png',
      nacionalidad: 'Bélgica',
      bandera: 'assets/belgica.webp',
      cantidad: '330ml',
      estilo: 'Dark Ale',
      grados: '11',
    },
    {
      id: 6,
      title: 'Frankziskaner',
      imgTitle: '',
      picture: 'assets/franzciscaner.png',
      nacionalidad: 'Alemania',
      bandera: 'assets/alemania.png',
      cantidad: '500ml',
      estilo: 'Estilo Weissbier',
      grados: '5',
    },
    {
      id: 7,
      title: 'Gulden Draak',
      imgTitle: '',
      picture: 'assets/gulden.png',
      nacionalidad: 'Bélgica',
      bandera: 'assets/belgica.webp',
      cantidad: '330ml',
      estilo: 'Dark Ale',
      grados: '10.5',
    },
    {
      id: 8,
      title: 'Old Rasputin',
      imgTitle: '',
      picture: 'assets/old-rasputin.png',
      nacionalidad: 'U.S.A',
      bandera: 'assets/usa.png',
      cantidad: '330ml',
      estilo: 'Imperial Stout',
      grados: '9',
    },
    {
      id: 9,
      title: 'Double Chocolate',
      imgTitle: '',
      picture: 'assets/double-chocolate.png',
      nacionalidad: 'Inglaterra',
      bandera: 'assets/inglaterra.png',
      cantidad: '440ml',
      estilo: 'Estilo Stout',
      grados: '5.2',
    },
    {
      id: 10,
      title: 'Hob Goblin',
      imgTitle: '',
      picture: 'assets/hobgoblin.png',
      nacionalidad: 'Inglaterra',
      bandera: 'assets/inglaterra.png',
      cantidad: '500ml',
      estilo: 'Estilo Dark Ale',
      grados: '5.2',
    },
  ];

  date: Alitas[] = [
    {
      id: 0,
      title: 'Alitas',
      imagenAlita: 'assets/foto-alitas.png',
      imgModal: 'assets/menu.png',
    },
    {
      id: 1,
      title: 'Bonelees',
      imagenAlita: 'assets/boneles.png',
      imgModal: 'assets/menu.png',
    },
    {
      id: 2,
      title: 'Costillas',
      imagenAlita: 'assets/costillas.png',
      imgModal: 'assets/menu.png',
    },
  ];
}
