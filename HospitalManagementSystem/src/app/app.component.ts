import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // ✅ import this
import { HttpClientModule } from '@angular/common/http';
import {  NavigationEnd } from '@angular/router'; // ✅ import NavigationEnd
import { AppointmentComponent } from './components/appointment/appointment.component'; // ✅ Your component

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
    imports: [CommonModule, FormsModule,RouterModule,HttpClientModule],

  templateUrl: './app.component.html'
})
export class AppComponent {
  showNavbar = false;
  isAdmin = false;
  isDoctor = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide navbar on login pages
        const hiddenRoutes = ['/admin-login', '/doctor-login', '/login'];
        this.showNavbar = !hiddenRoutes.includes(event.url);

        // Check user role from localStorage
        const role = localStorage.getItem('userRole');
        this.isAdmin = role === 'admin';
        this.isDoctor = role === 'doctor';
      }
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}