import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Environment} from './environment';
import {Bike} from '../models/bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  getBikes() {
    return this.http.get(this.environment.urlBike);
  }

  postBike(bike: Bike) {
    return this.http.post(this.environment.urlBike, bike);
  }

  deleteBike(id: string) {
    return this.http.delete(this.environment.urlBike + `/${id}`);
  }
}
