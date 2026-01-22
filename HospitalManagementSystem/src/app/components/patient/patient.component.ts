import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../services/patient';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patients: Patient[] = [];
  newPatient: Patient = {
    id: 0,
    name: '',
    age: '',
    bloodGroup: '',
    prescription: '',
    dose: '',
    fees: '',
    urgency: ''
  };
  errorMsg = '';

  constructor(private patientService: PatientService) {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getPatientList().subscribe({
      next: (data) => this.patients = data,
      error: () => this.errorMsg = 'Failed to load patients'
    });
  }

  addPatient() {
    this.patientService.addPatient(this.newPatient).subscribe({
      next: (data) => {
        this.patients.push(data); // update list
        this.newPatient = { id: 0, name: '', age: '', bloodGroup: '', prescription: '', dose: '', fees: '', urgency: '' }; // reset form
      },
      error: () => this.errorMsg = 'Failed to add patient'
    });
  }
}
