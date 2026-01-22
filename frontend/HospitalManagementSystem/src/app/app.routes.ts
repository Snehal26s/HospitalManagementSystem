import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';

// ✅ Export the routes
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'doctor-login', component: DoctorLoginComponent },
 // { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
 // { path: 'add-patient', component: AddPatientComponent },

  { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'add-patient', component: AddPatientComponent },
  { path: 'appointment', component: AppointmentComponent },
];




// import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
// import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
// import { AddPatientComponent } from './components/add-patient/add-patient.component';
// import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
// import { PatientComponent } from './components/patient/patient.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'admin-login', component: AdminLoginComponent },
//   { path: 'doctor-login', component: DoctorLoginComponent },
//   { path: 'doctor-dashboard', component: DoctorDashboardComponent },
//   { path: 'admin-dashboard', component: AdminDashboardComponent, children: [
//       { path: 'add-patient', component: AddPatientComponent },
//       { path: 'patients', component: PatientComponent },
//         { path: 'doctor-dashboard', component: DoctorDashboardComponent }, // ✅ must match exact path

//       { path: '', redirectTo: '/patients', pathMatch: 'full' }
//   ]}
// ];
