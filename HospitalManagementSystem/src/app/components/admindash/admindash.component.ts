import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../services/patient';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admindash',
  standalone: true,
   imports: [CommonModule, FormsModule],
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  patients: Patient[] = [];
patient: Patient = new Patient();  // ✅ for [(ngModel)]

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }
}
