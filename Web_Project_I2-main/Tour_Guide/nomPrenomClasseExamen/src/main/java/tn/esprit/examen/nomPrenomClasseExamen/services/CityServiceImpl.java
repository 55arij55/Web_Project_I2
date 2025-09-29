package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.stereotype.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.City;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.CityRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements ICityService {

    private final CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public City saveCity(City city) {
        return cityRepository.save(city);
    }

    @Override
    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

    @Override
    public City getCityById(int id) {
        Optional<City> optionalCity = cityRepository.findById(id);
        return optionalCity.orElse(null);
    }

    @Override
    public void deleteCity(int id) {
        cityRepository.deleteById(id);
    }
}
