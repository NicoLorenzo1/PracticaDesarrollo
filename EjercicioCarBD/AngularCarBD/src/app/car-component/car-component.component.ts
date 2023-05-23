import { Component } from '@angular/core';
import { CarInterface } from '../car-interface';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent {

  carList : Array<CarInterface> = []

  constructor(private carService : CarServiceService)
  {
    this.carService.getList().subscribe(    //devuelve un observale y lo convertimos a array
      (data: Array<CarInterface>) => {
        this.carList = data;
      }
    );
  }
}
