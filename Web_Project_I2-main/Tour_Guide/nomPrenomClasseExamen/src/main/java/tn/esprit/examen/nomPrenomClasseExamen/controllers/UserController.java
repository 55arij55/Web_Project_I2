package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.User;
import tn.esprit.examen.nomPrenomClasseExamen.services.IUserService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private final IUserService userService;

    // Create user
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.saveUser(user));
    }

    // Get all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    // Get user by id
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        User user = userService.getUserById(id);
        return (user != null) ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    // Update user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User updatedUser) {
        User existingUser = userService.getUserById(id);
        if (existingUser == null) return ResponseEntity.notFound().build();

        updatedUser.setIdU(id);
        return ResponseEntity.ok(userService.saveUser(updatedUser));
    }

    // Delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    // Change password
    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestParam String email, @RequestParam long newPassword) {
        User user = userService.getUserByEmail(email);
        if (user == null) return ResponseEntity.notFound().build();

        user.setPwd(newPassword);
        userService.saveUser(user);
        return ResponseEntity.ok("Password changed successfully");
    }

    // Verify account
    @GetMapping("/verify")
    public ResponseEntity<String> verifyAccount(@RequestParam String email) {
        User user = userService.getUserByEmail(email);
        if (user == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok("Account verified successfully");
    }
}
