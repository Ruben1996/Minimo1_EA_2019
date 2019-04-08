import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StationService} from '../../services/station.service';
import {Station} from '../../models/station';
import {BikeService} from "../../services/bike.service";
import {Bike} from "../../models/bike";
@Component({
  selector: 'app-bikelist',
  templateUrl: './bikelist.component.html',
  styleUrls: ['./bikelist.component.css']
})
export class BikelistComponent implements OnInit {

  bikeStationDetail: Station;
  availableBikes: Bike[];
  body: object;

  constructor(private activatedRouter: ActivatedRoute, private stationService: StationService, private bikeService: BikeService) {
    this.bikeStationDetail = new Station();
    this.availableBikes = [];
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (typeof params.id !== 'undefined') {
        this.bikeStationDetail._id = params.id;
      } else {
        this.bikeStationDetail._id = '';
      }
    });
    this.getBikeDetail(this.bikeStationDetail._id);
    this.getAvailableBikes();
  }
  async getBikeDetail(id: string) {
    await this.stationService.getBikeStationDetail(id)
      .subscribe(res => {
        console.log(res);
        this.bikeStationDetail = res as Station;
      });
    console.log(this.bikeStationDetail);
  }

  async getAvailableBikes() {
    await this.bikeService.getavailableBikes()
      .subscribe(res => {
        console.log(res);
        this.availableBikes = res as Bike[];
      });
    console.log(this.availableBikes);
  }
  async addBiketotheStation(id: string, i: number) {
    this.body = {
      stationId: this.bikeStationDetail._id,
      bikeId: id
    };
    await this.stationService.postBiketotheStation(this.body)
      .subscribe(res => {
          console.log(res);
          this.availableBikes.splice(i, 1);
          this.getBikeDetail(this.bikeStationDetail._id);
        },
        err => {
          console.log(err);
        });
  }

async deleteBiketotheStation(id: string, i: number) {
  await this.stationService.deleteBiketotheStation(this.bikeStationDetail._id, id)
      .subscribe(res => {
          console.log(res);
          this.bikeStationDetail.bikes.splice(i, 1);
          this.getAvailableBikes();
        },
        err => {
          console.log(err);
        });

  }

}
