import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleSummary } from 'src/app/models/VehicleSummary';
import { Observable } from 'rxjs';

const getVehiclesByStatus: string = 'https://api-frotas.herokuapp.com/vehicle/v1/vehicles/status';

const headersOptions = new HttpHeaders({
  'Content-Type':'application/json; charset=utf-8',
  'Authorization': 'Basic cG9ydGFsOkZmUW9YZ2JCUTZWajROM01RS2o='
});


@Injectable({
  providedIn: 'root',
})
export class VehiclesService {

  constructor(private httpClient: HttpClient) {}

  getUnavailable(): Observable<VehicleSummary[]> {
    console.log("Cheguei aqui no service")
    return this.httpClient.get<VehicleSummary[]>(getVehiclesByStatus + '/unavailable', {headers: headersOptions});
  }

  getAvailable(): Observable<VehicleSummary[]> {
    console.log("Cheguei aqui no service")
    return this.httpClient.get<VehicleSummary[]>(getVehiclesByStatus + '/available', {headers: headersOptions});
  }

}
