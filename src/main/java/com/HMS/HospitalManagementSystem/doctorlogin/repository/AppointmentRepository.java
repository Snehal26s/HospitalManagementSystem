package com.HMS.HospitalManagementSystem.doctorlogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.HMS.HospitalManagementSystem.doctorlogin.entity.Appointment;
import java.time.LocalDate;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByAppointmentDate(LocalDate appointmentDate);
}
