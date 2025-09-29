package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.City;
import tn.esprit.examen.nomPrenomClasseExamen.services.ICityService;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/cities")
public class CityController {

    private final ICityService cityService;

    public CityController(ICityService cityService) {
        this.cityService = cityService;
    }

    @PostMapping
    public ResponseEntity<City> createCity(@RequestBody City city) {
        return ResponseEntity.ok(cityService.saveCity(city));
    }

    @GetMapping
    public ResponseEntity<List<City>> getAllCities() {
        return ResponseEntity.ok(cityService.getAllCities());
    }

    @GetMapping("/{id}")
    public ResponseEntity<City> getCityById(@PathVariable int id) {
        City city = cityService.getCityById(id);
        return (city != null) ? ResponseEntity.ok(city) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<City> updateCity(@PathVariable int id, @RequestBody City updatedCity) {
        City existingCity = cityService.getCityById(id);
        if (existingCity == null) {
            return ResponseEntity.notFound().build();
        }
        updatedCity.setLieuId(id);
        return ResponseEntity.ok(cityService.saveCity(updatedCity));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCity(@PathVariable int id) {
        cityService.deleteCity(id);
        return ResponseEntity.noContent().build();
    }
}
