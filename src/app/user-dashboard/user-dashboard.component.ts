import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Bean/user';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-user-dashboard',
  standalone: false,
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  userId: number = 0;
  placeHolder: number = 0;
  user: User = {
    "userID": 0,
    "userName": "",
    "password": "",
    "role": "",
    "customerCategory": "",
    "phone": 0,
    "emailId": "",
    "address1": "",
    "address2": "",
    "city": "",
    "state": "",
    "country": "",
    "zipCode": 0,
    "dOB": "" 
  };
  url: string = '';
  isEditable: boolean = false;
  validCheck: string = '';
  message: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }


  onMyTrip(){
    this.placeHolder = 2;
  }

  onHome() {
    this.placeHolder = 0;
  }

  onProfile() {
    this.placeHolder = 1;
  }

  onLogout() {
    if (confirm("Do you want to logout")) {
      alert("User Logout successfully");
      this.router.navigate(['']);
    }
  }

  onSave() {

    this.url = "http://localhost:8082/edituser";
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>(this.url, this.user, { headers }).subscribe({

      next: data => {
        this.validCheck = JSON.stringify(data);
        if (this.validCheck === "\"Details are updated successfully\"") {
          alert("Saved Successfully");
          this.isEditable = false;
        }
        else {
          alert(this.validCheck);
        }
      },
      error: error => {
        alert(JSON.stringify(error));
      }
    });
  }

  onEdit() {
    this.isEditable = true;
    alert("Enabled Editing");
    return;
  }

  goToFlightBooking(){
    this.router.navigate(['/flight-booking',this.userId]);
  }
  
  goToUserBookings(){
    this.router.navigate(['/user-bookings',this.userId]);
  }



  ngOnInit() {
    const userID = this.route.snapshot.paramMap.get('userId');
    if (userID) {
      this.userId = +userID;
    }
    this.url = "http://localhost:8082/searchuser/" + this.userId;
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.user = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }
}
