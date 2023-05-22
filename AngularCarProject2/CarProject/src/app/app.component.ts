import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardInterface } from './card-interface';
import { CarsService } from './cars.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarProject';
  cars : Array<CardInterface> = [];
  constructor(private carsService : CarsService){
    carsService.getCars().then(cars => {this.cars = cars});
  }
}
