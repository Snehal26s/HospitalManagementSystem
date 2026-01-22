package com.HMS.HospitalManagementSystem.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HMS.HospitalManagementSystem.entity.User;
import com.HMS.HospitalManagementSystem.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // ✅ Updated method to include role
    public User validateLogin(String username, String password, String role) {
        if (username == null || password == null || role == null) return null;

        User user = userRepository.findByUsername(username.trim()).orElse(null);

        if (user != null) {
            String dbPass = user.getPassword().trim();
            String dbRole = user.getRole().trim();

            if (dbPass.equals(password.trim()) && dbRole.equalsIgnoreCase(role.trim())) {
                return user;
            }
        }
        return null;
    }
}



