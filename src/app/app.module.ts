import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FrotasComponent } from './frotas/frotas.component';
import { RotasComponent } from './rotas/rotas.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomepageComponent, FrotasComponent, RotasComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
