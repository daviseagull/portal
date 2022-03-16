import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RoutesComponent } from './components/routes/routes.component';
import { VehicleFormComponent } from './components/vehicles/vehicle-form/vehicle-form.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'vehicle-form', component: VehicleFormComponent },
  { path: 'routes', component: RoutesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
