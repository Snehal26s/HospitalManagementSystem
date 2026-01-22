import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.css']

})
export class AppointmentComponent implements OnInit {
  appointments: any[] = [];
  newAppointment: any = {
    patientName: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: ''
  };
constructor(
  private appointmentService: AppointmentService,
  private router: Router
) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  addAppointment() {
    this.appointmentService.createAppointment(this.newAppointment).subscribe(() => {
      alert('Appointment booked successfully!');
      this.loadAppointments();
      this.newAppointment = { patientName: '', doctorName: '', appointmentDate: '', appointmentTime: '', reason: '' };
    });
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }
   goBack() {
    this.router.navigate(['/admindash']); // ✅ Navigate programmatically
  }
}
