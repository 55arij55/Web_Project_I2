package tn.esprit.examen.nomPrenomClasseExamen.services;

import tn.esprit.examen.nomPrenomClasseExamen.entities.Reservation;

import java.util.List;

public interface IReservationService {
    Reservation saveReservation(Reservation reservation);
    List<Reservation> getAllReservations();
    Reservation getReservationById(int id);
    void deleteReservation(int id);
}
