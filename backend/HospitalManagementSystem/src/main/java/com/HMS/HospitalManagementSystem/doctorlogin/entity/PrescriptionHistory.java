package com.HMS.HospitalManagementSystem.doctorlogin.entity;
import java.time.LocalDate;

import com.HMS.HospitalManagementSystem.entity.Patient;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "prescription_history")
public class PrescriptionHistory {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    private String medicineName;
    private String dosage;
    private LocalDate datePrescribed;
    public PrescriptionHistory() {
		super();
		// TODO Auto-generated constructor stub
	}
    public PrescriptionHistory(Long id, Patient patient, String medicineName, String dosage, LocalDate datePrescribed) {
		super();
		this.id = id;
		this.patient = patient;
		this.medicineName = medicineName;
		this.dosage = dosage;
		this.datePrescribed = datePrescribed;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public String getMedicineName() {
		return medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	public String getDosage() {
		return dosage;
	}
	public void setDosage(String dosage) {
		this.dosage = dosage;
	}
	public LocalDate getDatePrescribed() {
		return datePrescribed;
	}
	public void setDatePrescribed(LocalDate datePrescribed) {
		this.datePrescribed = datePrescribed;
	}
	@Override
	public String toString() {
		return "PrescriptionHistory [id=" + id + ", patient=" + patient + ", medicineName=" + medicineName + ", dosage="
				+ dosage + ", datePrescribed=" + datePrescribed + "]";
	}
    
    
}
