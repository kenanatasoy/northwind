import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component:CarComponent},
  {path: "cars", component:CarComponent},
  {path: "rentals", component:RentalComponent},
  {path: "customers", component:CustomerComponent},
  {path: "cars/brands/:brandId",component:CarComponent},
  {path: "cars/colors/:colorId",component:CarComponent},
  {path: "cars/colors/:colorId/brands/:brandId", component:CarComponent},
  {path: "cars/cardetail/:carId", component:CarDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
