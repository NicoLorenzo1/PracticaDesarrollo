import { Component } from '@angular/core';
import { CarInterface } from '../car-interface';
import {
  CarServiceService

} from '../car-service.service';
@Component({
  selector: 'app-car-container',
  templateUrl: './car-container.component.html',
  styleUrls: ['./car-container.component.css']
})
export class CarContainerComponent {
  listOfCars: Array<CarInterface> = []

  constructor(carService: CarServiceService) { //Creo instancia de carService para poder usar los metodos
    carService.getCarsOfService().then(carListOfService => { this.listOfCars = carListOfService });
  }

}
