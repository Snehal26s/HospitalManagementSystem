import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../services/patient';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient: Patient = new Patient();
  patients: Patient[] = [];
  successMsg = '';
  errorMsg = '';
  editPatient: Patient | null = null;
  showPatientList: boolean = false; // for toggle list

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  // Load patients from backend
  loadPatients() {
    this.patientService.getPatientList().subscribe({
      next: (res) => this.patients = res,
      error: () => this.errorMsg = 'Failed to load patients'
    });
  }

  togglePatientList() {
    this.showPatientList = !this.showPatientList;
    if (this.showPatientList) {
      this.loadPatients(); // refresh list when shown
    }
  }

  onSubmit() {
    if (!this.patient.name || !this.patient.age || !this.patient.bloodGroup || !this.patient.prescription
        || !this.patient.dose || !this.patient.fees || !this.patient.urgency) {
      this.errorMsg = 'Please fill all the fields';
      this.successMsg = '';
      return;
    }

    if (this.editPatient) {
      this.patientService.updatePatient(this.editPatient.id!, this.patient).subscribe({
        next: () => {
          this.successMsg = 'Patient updated successfully!';
          this.errorMsg = '';
          this.editPatient = null;
          this.resetForm();
          if (this.showPatientList) this.loadPatients();
        },
        error: () => this.errorMsg = 'Failed to update patient'
      });
    } else {
      this.patientService.addPatient(this.patient).subscribe({
        next: () => {
          this.successMsg = 'Patient added successfully!';
          this.errorMsg = '';
          this.resetForm();
          if (this.showPatientList) this.loadPatients();
        },
        error: () => this.errorMsg = 'Failed to add patient'
      });
    }
  }

  edit(p: Patient) {
    this.editPatient = { ...p };
    this.patient = { ...p };
  }

  deletePatient(id: number) {
    if (!confirm('Are you sure to delete?')) return;
    this.patientService.deletePatient(id).subscribe({
      next: () => {
        this.successMsg = 'Patient deleted successfully!';
        this.errorMsg = '';
        if (this.showPatientList) this.loadPatients();
      },
      error: () => this.errorMsg = 'Failed to delete patient'
    });
  }

  cancelEdit() {
    this.editPatient = null;
    this.resetForm();
  }

  resetForm() {
    this.patient = new Patient();
  }
}
