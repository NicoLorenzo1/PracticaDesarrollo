import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponentComponent } from './car-component/car-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CarContainerComponent } from './car-container/car-container.component';
import { ZoomCarComponentComponent } from './zoom-car-component/zoom-car-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponentComponent,
    NavBarComponent,
    HomeComponent,
    CarContainerComponent,
    ZoomCarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
