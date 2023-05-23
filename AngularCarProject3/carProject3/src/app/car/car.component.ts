import { Component, Input } from '@angular/core';
import { Car } from '../car';
import { CarTargetComponent } from '../car-target/car-target.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
@Input() car! : Car;
carTarget : CarTargetComponent;
constructor(){
  this.carTarget = new CarTargetComponent();
}
}
