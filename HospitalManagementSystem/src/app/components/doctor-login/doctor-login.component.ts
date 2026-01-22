import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

onSubmit() {
  const payload = {
    username: this.username.trim(),
    password: this.password.trim(),
    role: 'doctor'
  };

  this.auth.login(payload).subscribe({
    next: (res) => {
      if (res.role === 'doctor') {
        localStorage.setItem('userRole', 'doctor'); // ✅ store role
        alert('Doctor login successful');
        this.router.navigate(['/doctor-dashboard']);
      } else {
        this.errorMsg = 'Not a doctor account';
      }
    },
    error: () => this.errorMsg = 'Invalid username or password'
  });
}
}







// import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';    // 👈 import Router

// @Component({
//   selector: 'app-doctor-login',
//   standalone: true,   // ✅ standalone component
//   imports: [FormsModule, CommonModule],
//   templateUrl: './doctor-login.component.html',
//   styleUrls: ['./doctor-login.component.css']
// })
// export class DoctorLoginComponent {
//   username = '';
//   password = '';
//   errorMsg = '';

//   constructor(private auth: AuthService, private router: Router) {}

//   onSubmit() {
//     const payload = {
//       username: this.username.trim(),
//       password: this.password.trim(),
//       role: 'doctor'   // ✅ role is always doctor
//     };

//     console.log("Sending doctor login payload:", payload);

//     this.auth.login(payload).subscribe({
//       next: (res) => {
//         if (res.role === 'doctor') {
//           alert('Doctor login successful');
//           this.router.navigate(['/doctor-dashboard']);   // ✅ redirect to doctor dashboard
//         } else {
//           this.errorMsg = 'Not a doctor account';
//         }
//       },
//       error: () => this.errorMsg = 'Invalid username or password'
//     });
//   }
// }


