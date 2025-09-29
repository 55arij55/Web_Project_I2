package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.User;
import tn.esprit.examen.nomPrenomClasseExamen.services.IUserService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final IUserService userService;

    // Signup
    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User user) {
        return ResponseEntity.ok(userService.saveUser(user));
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam long password) {
        User user = userService.getUserByEmail(email);
        if (user != null && user.getPwd() == password) {
            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
