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
        User existingUser = userRepository.findByUsername(userDTO.getUsername());

        if (existingUser != null) {
            return "Username already exists!";
        }

        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setRole(userDTO.getRole());

        userRepository.save(user);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    public String login(@RequestBody UserDTO userDTO) {
        User user = userRepository.findByUsername(userDTO.getUsername());

        if (user == null) {
            return "User not found!";
        }

        if (!user.getPassword().equals(userDTO.getPassword())) {
            return "Invalid password!";
        }

        return "Login successful! Role: " + user.getRole();
    }
}