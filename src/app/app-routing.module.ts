import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FrotasComponent } from './frotas/frotas.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RotasComponent } from './rotas/rotas.component';

const routes: Routes = [
  { path: '#', component: AppComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'frotas', component: FrotasComponent },
  { path: 'rotas', component: RotasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
