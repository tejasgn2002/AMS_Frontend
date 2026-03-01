import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { AddFlightScheduleComponent } from './add-flight-schedule/add-flight-schedule.component';
import { ViewFlightScheduleComponent } from './view-flight-schedule/view-flight-schedule.component';

import { AddCarrierComponent } from './add-carrier/add-carrier.component';
import { EditCarrierComponent } from './edit-carrier/edit-carrier.component';
import { DeleteCarrierComponent } from './delete-carrier/delete-carrier.component';
import { ViewCarrierComponent } from './view-carrier/view-carrier.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'admin-login', component:AdminLoginComponent },
  {path: 'admin-dashboard', component:AdminDashboardComponent },
  {path: 'user-login',component:UserLoginComponent},
  {path:'user-dashboard/:userId',component:UserDashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'flight-booking/:userId',component:FlightBookingComponent},
  {path: 'user-bookings/:userId',component:UserBookingsComponent},
  {path: 'view-customer', component:ViewCustomerComponent },
  {path:'add-flight', component:AddFlightComponent},
  {path:'delete-flight', component:DeleteFlightComponent},
  {path:'edit-flight', component:EditFlightComponent},
  {path:'view-booking', component:ViewBookingComponent},
  {path:'view-flight', component:ViewFlightComponent},
  {path:'add-flight-schedule', component:AddFlightScheduleComponent},
  {path:'view-flight-schedule', component:ViewFlightScheduleComponent},
  {path:'add-carrier', component:AddCarrierComponent},
  {path:'edit-carrier', component:EditCarrierComponent},
  {path:'delete-carrier', component:DeleteCarrierComponent},
  {path:'view-carrier', component:ViewCarrierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
