import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {RoutesComponent} from './components/routes/routes.component';
import {VehicleFormComponent} from './components/vehicles/vehicle-form/vehicle-form.component';
import {VehiclesComponent} from './components/vehicles/vehicles.component';
import {RouteFormComponent} from "./components/routes/route-form/route-form.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'vehicle-form/add', component: VehicleFormComponent},
  {path: 'vehicle-form/view/:id', component: VehicleFormComponent},
  {path: 'routes', component: RoutesComponent},
  {path: 'route-form/add', component: RouteFormComponent},
  {path: 'route-form/view/:id', component: RouteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
