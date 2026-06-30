 package com.canteen.backend.controller;

import com.canteen.backend.dto.UserDTO;
import com.canteen.backend.entity.User;
import com.canteen.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody UserDTO userDTO) {

        try {

            System.out.println("===== REGISTER REQUEST =====");
            System.out.println("Username : " + userDTO.getUsername());
            System.out.println("Password : " + userDTO.getPassword());
            System.out.println("Role     : " + userDTO.getRole());

            User existingUser = userRepository.findByUsername(userDTO.getUsername());

            if (existingUser != null) {
                return "Username already exists!";
            }

            User user = new User();
            user.setUsername(userDTO.getUsername());
            user.setPassword(userDTO.getPassword());
            user.setRole(userDTO.getRole());

            userRepository.save(user);

            System.out.println("User Registered Successfully!");

            return "User registered successfully!";

        } catch (Exception e) {

            System.out.println("===== ERROR =====");
            e.printStackTrace();

            return "ERROR : " + e.getClass().getSimpleName() + " - " + e.getMessage();
        }
    }

    @PostMapping("/login")
    public String login(@RequestBody UserDTO userDTO) {

        try {

            User user = userRepository.findByUsername(userDTO.getUsername());

            if (user == null) {
                return "User not found!";
            }

            if (!user.getPassword().equals(userDTO.getPassword())) {
                return "Invalid password!";
            }

            return "Login successful! Role: " + user.getRole();

        } catch (Exception e) {

            e.printStackTrace();

            return "ERROR : " + e.getClass().getSimpleName() + " - " + e.getMessage();
        }
    }
}