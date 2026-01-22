// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Patient } from './patient'; // adjust path

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientService {
//   private baseURL = 'http://localhost:8080/api/v1/patients';

//   constructor(private httpClient: HttpClient) {}

//   // Get all patients
//   getPatientList(): Observable<Patient[]> {
//     return this.httpClient.get<Patient[]>(this.baseURL);
//   }

//   // Add patient
//   addPatient(patient: Patient): Observable<Patient> {
//     return this.httpClient.post<Patient>(this.baseURL, patient);
//   }

//   // ✅ Update patient
//   updatePatient(id: number, patient: Patient): Observable<Patient> {
//     return this.httpClient.put<Patient>(`${this.baseURL}/${id}`, patient);
//   }

//   // ✅ Delete patient
//   deletePatient(id: number): Observable<void> {
//     return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
//   }
// }

// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { Patient } from './patient';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class PatientService {
// //   private baseURL = 'http://localhost:8080/api/v1/patients';

// //   constructor(private httpClient: HttpClient) {}

// //   getPatientList(): Observable<Patient[]> {
// //     return this.httpClient.get<Patient[]>(this.baseURL);
// //   }

// //   addPatient(patient: Patient): Observable<Patient> {
// //     return this.httpClient.post<Patient>(this.baseURL, patient);
// //   }
// // }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient'; 

@Injectable({
  providedIn: 'root'
})
export class PatientService {

private baseURL = 'http://localhost:8080/api/v1/patients';

constructor(private http: HttpClient) {}

  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseURL);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseURL, patient);
  }

  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.baseURL}/${id}`, patient);
  }

  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }

  updatePrescription(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(
      `${this.baseURL}/${patient.id}/prescription`,
      {
        prescription: patient.prescription,
        dose: patient.dose,
        urgency: patient.urgency
      }
    );
  }

  getAppointments(patientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/${patientId}/appointments`);
  }

addPrescription(patientId: number, prescriptionData: any): Observable<any> {
  return this.http.post(`${this.baseURL}/${patientId}/prescriptions`, prescriptionData);
}

getPrescriptions(patientId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseURL}/${patientId}/prescriptions`);
}


}

