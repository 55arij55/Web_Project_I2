package tn.esprit.examen.nomPrenomClasseExamen.services;

import tn.esprit.examen.nomPrenomClasseExamen.entities.Planning;

import java.util.List;

public interface IPlanningService {
    Planning savePlanning(Planning planning);
    List<Planning> getAllPlannings();
    Planning getPlanningById(int id);
    void deletePlanning(int id);
}
