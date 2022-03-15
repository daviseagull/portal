import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoutesComponent } from './routes/routes.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: '#', component: AppComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'routes', component: RoutesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
