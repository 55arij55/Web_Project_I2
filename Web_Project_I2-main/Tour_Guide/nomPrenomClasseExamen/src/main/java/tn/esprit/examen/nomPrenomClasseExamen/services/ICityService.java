package tn.esprit.examen.nomPrenomClasseExamen.services;

import tn.esprit.examen.nomPrenomClasseExamen.entities.City;

import java.util.List;

public interface ICityService {
    City saveCity(City city);
    List<City> getAllCities();
    City getCityById(int id);
    void deleteCity(int id);
}
