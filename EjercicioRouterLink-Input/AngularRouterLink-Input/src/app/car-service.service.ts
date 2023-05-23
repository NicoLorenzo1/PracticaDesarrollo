import { Injectable } from '@angular/core';
import { CarInterface } from './car-interface';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  carListOfService : Array<CarInterface> = []
  constructor() { 
    this.carListOfService = 
       [{
        imgURL: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
        model: "Vision-s",
        description: "Electrico",
        type: "Auto"
      },
      {
        imgURL: "https://img.freepik.com/foto-gratis/mini-coupe-rojo-carretera-alta-velocidad_114579-4060.jpg",
        model: "focus",
        description: "nafta",
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
        imgURL: "https://img.freepik.com/foto-gratis/mini-coupe-rojo-carretera-alta-velocidad_114579-4060.jpg",
        model: "focus",
        description: "nafta",
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
        imgURL: "https://img.freepik.com/foto-gratis/mini-coupe-rojo-carretera-alta-velocidad_114579-4060.jpg",
        model: "focus",
        description: "nafta",
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

  async getCarsOfService() :Promise<CarInterface[]>{
    return this.carListOfService
  };

}
