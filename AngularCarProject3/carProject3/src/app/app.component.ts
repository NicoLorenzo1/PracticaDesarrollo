import { Component } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carsArray : Array<Car> = [];

  constructor(private carService : CarService){
    carService.getCars().then(carsOfService => {this.carsArray = carsOfService}) //creamos una instancia de cars service y llamamos el metodo getCars para obtener los 
                                                                                  //el array con los datos de los car
  }

}
