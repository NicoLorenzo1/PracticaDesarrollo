import { Component, Input } from '@angular/core';
import { CarInterface } from '../car-interface';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent {
  @Input() car! : CarInterface;

}
