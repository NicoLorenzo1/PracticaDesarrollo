import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { RouterModule } from '@angular/router';
import { CarTargetComponent } from './car-target/car-target.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarTargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
