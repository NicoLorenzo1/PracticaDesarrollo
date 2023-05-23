import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-zoom-car-component',
  templateUrl: './zoom-car-component.component.html',
  styleUrls: ['./zoom-car-component.component.css']

})
export class ZoomCarComponentComponent implements OnInit {

  imgURL: string | null = "";
  model: string | null = "";
  description: string | null = "";
  type: string | null = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.imgURL = this.route.snapshot.paramMap.get('imgURL');
    this.model = this.route.snapshot.paramMap.get('model');
    this.description = this.route.snapshot.paramMap.get('description');
    this.type = this.route.snapshot.paramMap.get('type');
}
}
