import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carsOfService : Array<Car> = []
  constructor() { 
    this.carsOfService = [ {
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
      }]
    }

    async getCars():Promise<Car[]>{return this.carsOfService}
  }
