package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Planning;
import tn.esprit.examen.nomPrenomClasseExamen.services.IPlanningService;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/plannings")
public class PlanningController {

    private final IPlanningService planningService;

    public PlanningController(IPlanningService planningService) {
        this.planningService = planningService;
    }

    @PostMapping
    public ResponseEntity<Planning> createPlanning(@RequestBody Planning planning) {
        return ResponseEntity.ok(planningService.savePlanning(planning));
    }

    @GetMapping
    public ResponseEntity<List<Planning>> getAllPlannings() {
        return ResponseEntity.ok(planningService.getAllPlannings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Planning> getPlanningById(@PathVariable int id) {
        Planning planning = planningService.getPlanningById(id);
        return (planning != null) ? ResponseEntity.ok(planning) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Planning> updatePlanning(@PathVariable int id, @RequestBody Planning updatedPlanning) {
        Planning existingPlanning = planningService.getPlanningById(id);
        if (existingPlanning == null) {
            return ResponseEntity.notFound().build();
        }
        updatedPlanning.setIdPlanning(id);
        return ResponseEntity.ok(planningService.savePlanning(updatedPlanning));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlanning(@PathVariable int id) {
        planningService.deletePlanning(id);
        return ResponseEntity.noContent().build();
    }
}
