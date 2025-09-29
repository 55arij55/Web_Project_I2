package tn.esprit.examen.nomPrenomClasseExamen.services;

import tn.esprit.examen.nomPrenomClasseExamen.entities.Assistance;

import java.util.List;

public interface IAssistanceService {
    Assistance saveAssistance(Assistance assistance);
    List<Assistance> getAllAssistances();
    Assistance getAssistanceById(int id);
    void deleteAssistance(int id);
}
