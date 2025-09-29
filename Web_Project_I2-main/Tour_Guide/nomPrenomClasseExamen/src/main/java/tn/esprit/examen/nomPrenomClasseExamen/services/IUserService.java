package tn.esprit.examen.nomPrenomClasseExamen.services;

import tn.esprit.examen.nomPrenomClasseExamen.entities.User;

import java.util.List;

public interface IUserService {
    User saveUser(User user);
    List<User> getAllUsers();
    User getUserById(int id);
    void deleteUser(int id);
    User getUserByEmail(String email);
}
