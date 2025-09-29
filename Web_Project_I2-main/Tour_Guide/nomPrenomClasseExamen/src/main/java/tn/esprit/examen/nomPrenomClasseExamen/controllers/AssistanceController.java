package tn.esprit.examen.nomPrenomClasseExamen.controllers;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Assistance;
import tn.esprit.examen.nomPrenomClasseExamen.services.IAssistanceService;
import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/assistances")
public class AssistanceController {

    private final IAssistanceService assistanceService;

    public AssistanceController(IAssistanceService assistanceService) {
        this.assistanceService = assistanceService;
    }

    @PostMapping
    public ResponseEntity<Assistance> createAssistance(@RequestBody Assistance assistance) {
        return ResponseEntity.ok(assistanceService.saveAssistance(assistance));
    }

    @GetMapping
    public ResponseEntity<List<Assistance>> getAllAssistances() {
        return ResponseEntity.ok(assistanceService.getAllAssistances());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Assistance> getAssistanceById(@PathVariable int id) {
        Assistance assistance = assistanceService.getAssistanceById(id);
        return (assistance != null) ? ResponseEntity.ok(assistance) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Assistance> updateAssistance(@PathVariable int id, @RequestBody Assistance updatedAssistance) {
        Assistance existingAssistance = assistanceService.getAssistanceById(id);
        if (existingAssistance == null) {
            return ResponseEntity.notFound().build();
        }
        updatedAssistance.setIdAss(id);
        return ResponseEntity.ok(assistanceService.saveAssistance(updatedAssistance));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssistance(@PathVariable int id) {
        assistanceService.deleteAssistance(id);
        return ResponseEntity.noContent().build();
    }
}
