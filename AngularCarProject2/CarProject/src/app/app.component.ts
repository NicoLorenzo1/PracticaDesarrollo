import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardInterface } from './card-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarProject';

  cards: Array<CardInterface> = [
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "vision-s",
      description: "electrico",
      type: "Auto"
    },
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "vision-s",
      description: "electrico",
      type: "Auto"
    },
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "vision-s",
      description: "electrico",
      type: "Auto"
    },
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "vision-s",
      description: "electrico",
      type: "Auto"
    },
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "vision-s",
      description: "electrico",
      type: "Auto"
    }
  ];
  
}
