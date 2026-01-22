import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post(this.baseUrl, appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // ✅ Add this missing function
  addAppointment(appointment: any): Observable<any> {
    return this.http.post(this.baseUrl, appointment);
  }


  updatePrescription(id: number, prescription: string) {
  return this.http.put(`${this.baseUrl}/${id}/prescription`, prescription, {
    headers: { 'Content-Type': 'application/json' }
  });
}
getTodayAppointments(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/today`);
}

  savePrescription(id: number, prescription: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/prescription`, prescription, {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}