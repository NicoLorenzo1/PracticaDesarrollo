import { Injectable } from '@angular/core';
import { CardInterface } from './card-interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars : CardInterface[] = [];

  constructor(){
    this.cars = [ {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "Vision-s",
      description: "Electrico",
      type: "Auto"
    },
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "Vision-s",
      description: "Electrico",
      type: "Auto"
    },
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "Vision-s",
      description: "Electrico",
      type: "Auto"
    },
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "Vision-s",
      description: "Electrico",
      type: "Auto"
    },
    {
      imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
      model: "Vision-s",
      description: "Electrico",
      type: "Auto"
    }]
  }

  async getCars():Promise<CardInterface[]>{return this.cars};
 
}
