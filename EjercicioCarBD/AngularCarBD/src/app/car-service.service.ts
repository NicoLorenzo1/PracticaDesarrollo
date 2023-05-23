import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarInterface } from './car-interface';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  private jsonUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getList(): Observable<CarInterface[]> {
    return this.http.get<CarInterface[]>(this.jsonUrl);
}
}
