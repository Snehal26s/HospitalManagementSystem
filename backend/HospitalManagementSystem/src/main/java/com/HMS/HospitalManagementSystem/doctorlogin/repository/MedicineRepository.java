package com.HMS.HospitalManagementSystem.doctorlogin.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMS.HospitalManagementSystem.doctorlogin.entity.Medicine;


@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}
