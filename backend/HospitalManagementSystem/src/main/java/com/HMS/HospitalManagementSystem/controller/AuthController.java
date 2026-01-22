package com.HMS.HospitalManagementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMS.HospitalManagementSystem.dto.LoginRequest;
import com.HMS.HospitalManagementSystem.entity.User;
import com.HMS.HospitalManagementSystem.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        System.out.println("== Received login request ==");
        System.out.println("username: '" + request.getUsername() + "'");
        System.out.println("password: '" + request.getPassword() + "'");
        System.out.println("role: '" + request.getRole() + "'");

        User user = authService.validateLogin(request.getUsername(), request.getPassword(), request.getRole());
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials or role");
        }
    
    
    }
}
