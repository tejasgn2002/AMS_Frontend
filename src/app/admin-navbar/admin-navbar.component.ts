import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: false,
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  showAlert = false;

  constructor(private router: Router) {}

  showAlertBox(event: Event) {
    event.preventDefault();
    this.showAlert = true;
  }

  logout() {
    this.showAlert = false;
    this.router.navigate(['/']); 
  }

  cancel() {
    this.showAlert = false;
  }
}