import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { AddFlightScheduleComponent } from './add-flight-schedule/add-flight-schedule.component';
import { ViewFlightScheduleComponent } from './view-flight-schedule/view-flight-schedule.component';

import { AddCarrierComponent } from './add-carrier/add-carrier.component';
import { EditCarrierComponent } from './edit-carrier/edit-carrier.component';
import { DeleteCarrierComponent } from './delete-carrier/delete-carrier.component';
import { ViewCarrierComponent } from './view-carrier/view-carrier.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserLoginComponent,
    UserDashboardComponent,
    RegistrationComponent,
    AdminNavbarComponent,
    FooterComponent,
    UserBookingsComponent,
    FlightBookingComponent,
    ViewCustomerComponent,
    AddFlightComponent,
    DeleteFlightComponent,
    ViewBookingComponent,
    EditFlightComponent,
    ViewFlightComponent,
    AddFlightScheduleComponent,
    ViewFlightScheduleComponent,
    AddCarrierComponent,
    EditCarrierComponent,
    DeleteCarrierComponent,
    ViewCarrierComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



