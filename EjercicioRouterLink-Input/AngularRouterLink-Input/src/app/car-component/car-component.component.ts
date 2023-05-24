import { Component, Input } from '@angular/core';
import { CarInterface } from '../car-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent {
  @Input() car!: CarInterface;

  inputValue: string = "";

  saveInputModel() {
    this.car.model = this.inputValue;
  }
}
