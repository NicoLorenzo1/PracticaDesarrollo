import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZoomCarComponentComponent } from './zoom-car-component/zoom-car-component.component';

const routes: Routes = [{path: "", component: HomeComponent}, {path: "zoomCar/:imgURL/:model/:description/:type", component: ZoomCarComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
