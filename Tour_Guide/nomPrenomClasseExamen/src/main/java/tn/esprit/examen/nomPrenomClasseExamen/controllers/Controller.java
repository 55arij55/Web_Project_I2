package tn.esprit.examen.nomPrenomClasseExamen.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.examen.nomPrenomClasseExamen.services.IServices;

import java.time.LocalDate;

@RestController
public class Controller {

    @Autowired
    IServices services;




}
