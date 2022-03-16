import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleSummary } from 'src/app/models/VehicleSummary';
import { Vehicle } from 'src/app/models/Vehicle';
import { Observable } from 'rxjs';

const getVehiclesByStatus: string = 'https://api-frotas.herokuapp.com/vehicle/v1/vehicles/status';
const getVehicleById: string = 'https://api-frotas.herokuapp.com/vehicle/v1/';
const createVehicle: string = 'https://api-frotas.herokuapp.com/vehicle/v1'

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
    return this.httpClient.get<VehicleSummary[]>(getVehiclesByStatus + '/unavailable', {headers: headersOptions});
  }

  getAvailable(): Observable<VehicleSummary[]> {
    return this.httpClient.get<VehicleSummary[]>(getVehiclesByStatus + '/available', {headers: headersOptions});
  }

  getById(id: string): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(getVehicleById + id, {headers: headersOptions});
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.post<Vehicle>(createVehicle, vehicle, {headers: headersOptions});
  }

}
