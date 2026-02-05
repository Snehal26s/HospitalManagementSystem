package com.HMS.HospitalManagementSystem.doctorlogin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HMS.HospitalManagementSystem.doctorlogin.entity.PrescriptionHistory;

public interface PrescriptionHistoryRepository extends JpaRepository<PrescriptionHistory, Long> {
    List<PrescriptionHistory> findByPatientId(Long patientId);
}

