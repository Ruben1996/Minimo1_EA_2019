import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {Station} from '../../models/station';
import {Router} from '@angular/router';
import {StationService} from '../../services/station.service';
import {Bike} from '../../models/bike';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BikeService]
})
export class DashboardComponent implements OnInit {

  stations: Station[];
  singleStation: Station;
  bikes: Bike[];
  idSelectedStation: string;
  body: object;
  stationName: string;
  stationState: string;
  stationDescription: string;

  constructor(private bikeService: BikeService, private router: Router,
              private stationService: StationService) {
    this.singleStation = new Station();
  }



  ngOnInit() {
    this.getStations();
    this.getBikes();
  }
  deleteStation(id: string, i: number) {
    if (confirm('Are yo sure you want to delete it?')) {
      this.stationService.deleteStation(id)
        .subscribe(res => {
            this.stations.splice(i, 1);
          },
          err => {
            console.log(err);
          });
    }
  }

  deleteBike(id: string, i: number) {
    if (confirm('Are yo sure you want to delete it?')) {
      this.bikeService.deleteBike(id)
        .subscribe(res => {
            this.bikes.splice(i, 1);
          },
          err => {
            console.log(err);
          });
    }
  }

  getStations() {
    this.stationService.getStations()
      .subscribe(res => {
        console.log(res);
        this.stations = res as Station[];
      });
  }

  getBikes() {
    this.bikeService.getBikes()
      .subscribe(res => {
        console.log(res);
        this.bikes = res as Bike[];
      });
  }

  stationDetail(id: string) {
    this.stationService.getBikeStationDetail(id)
      .subscribe( res => {
          console.log(res);
          this.singleStation = res as Station;
        },
        err => {
          console.log(err);
        });
  }

  bikeStationDetail(id: string) {
    console.log(id);
    this.stationService.getBikeStationDetail(id)
      .subscribe( res => {
          console.log(res);
          this.router.navigate(['/bikelist', id]);
        },
        err => {
          console.log(err);
        });
  }

  assignStationId(id: string) {
    this.idSelectedStation = id;
  }

  addBikeStation(id: string) {
    this.body = {
      stationId: this.idSelectedStation,
      bikeId: id
    };
    console.log(this.body);
    this.stationService.postBikeStation(this.body)
      .subscribe( res => {
          console.log(res);
          confirm('Added successfully');
        },
        err => {
          console.log(err);
        });
  }

  /*
  addNewStation() {
    const station = new Station (),

      station.name = this.stationName,
      station.state =  this.stationState,
      station.description = this.stationDescription,

    console.log(this.stationName);
    this.stationService.postStation(station)
      .subscribe( res => {
          console.log(res);
          this.getStations();
        },
        err => {
          console.log(err);
          confirm('Name must be unique');
        });
  }
*/
  addNewBike() {
    this.router.navigateByUrl('/addbike');
  }
}
