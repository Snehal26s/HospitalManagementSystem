import { Component } from '@angular/core';
import { Router } from '@angular/router';   // 👈 import Router
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,   // ✅ same fix as doctor
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
  const payload = {
    username: this.username.trim(),
    password: this.password.trim(),
    role: 'admin'
  };

  this.auth.login(payload).subscribe({
    next: (res) => {
      if (res.role === 'admin') {
        localStorage.setItem('userRole', 'admin'); 
        alert('Admin login successful');
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.errorMsg = 'Not an admin account';
      }
    },
    error: () => this.errorMsg = 'Invalid username or password'
  });
}
}