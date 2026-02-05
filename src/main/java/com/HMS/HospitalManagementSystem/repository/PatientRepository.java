package com.HMS.HospitalManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMS.HospitalManagementSystem.entity.Patient;
@Repository
public interface PatientRepository extends JpaRepository<Patient,Long>{

}
