package com.HMS.HospitalManagementSystem.doctorlogin.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "patient_name")
    private String patientName;

    @Column(name = "doctor_name")
    private String doctorName;

    @Column(name = "appointment_date")
    private LocalDate appointmentDate;

    @Column(name = "appointment_time")
    private String appointmentTime;

    private String reason;
    @Column(length = 1000)
    private String prescription; 


    public Long getId() {
    	return id; 
    }
    public void setId(Long id) { 
    	this.id = id; 
    }

    public String getPatientName() { 
    	return patientName; 
    }
    public void setPatientName(String patientName) { 
    	this.patientName = patientName;
    }

    public String getDoctorName() { 
    	return doctorName; 
    }
    public void setDoctorName(String doctorName) { 
    	this.doctorName = doctorName; 
    	}

    public LocalDate getAppointmentDate() { 
    	return appointmentDate; 
    }
    public void setAppointmentDate(LocalDate appointmentDate) { 
    	this.appointmentDate = appointmentDate;
    	}

    public String getAppointmentTime() { 
    	return appointmentTime; 
    	}
    public void setAppointmentTime(String appointmentTime) {
    	this.appointmentTime = appointmentTime; 
    	}

    public String getReason() { 
    	return reason;
    	}
    public void setReason(String reason) { 
    	this.reason = reason; 
    	}
	public String getPrescription() {
		return prescription;
	}
	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}
    
}
