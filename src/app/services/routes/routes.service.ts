import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RouteSummary} from 'src/app/models/RouteSummary';
import {Route} from 'src/app/models/Route';

const getRoutesByStatus: string = 'https://api-rotas.herokuapp.com/route/v1/routes/status/';
const getRouteById: string = 'https://api-rotas.herokuapp.com/route/v1/';
const createRoute: string = 'https://api-rotas.herokuapp.com/route/v1'

const headersOptions = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Authorization': 'Basic cG9ydGFsOkZmUW9YZ2JCUTZWajROM01RS2o='
});

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private httpClient: HttpClient) {
  }

  getWaiting(): Observable<RouteSummary[]> {
    return this.httpClient.get<RouteSummary[]>(getRoutesByStatus + 'waiting', {headers: headersOptions});
  }

  getInProgress(): Observable<RouteSummary[]> {
    return this.httpClient.get<RouteSummary[]>(getRoutesByStatus + 'inProgress', {headers: headersOptions});
  }

  getEnded(): Observable<RouteSummary[]> {
    return this.httpClient.get<RouteSummary[]>(getRoutesByStatus + 'ended', {headers: headersOptions});
  }

  getById(id: string): Observable<Route> {
    return this.httpClient.get<Route>(getRouteById + id, {headers: headersOptions});
  }

  createRoute(route: Route): Observable<Route> {
    return this.httpClient.post<Route>(createRoute, route, {headers: headersOptions});
  }
}
