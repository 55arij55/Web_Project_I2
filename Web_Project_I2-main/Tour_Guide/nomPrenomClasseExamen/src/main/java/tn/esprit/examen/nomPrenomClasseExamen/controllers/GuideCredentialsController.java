package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.examen.nomPrenomClasseExamen.entities.GuideCredentials;
import tn.esprit.examen.nomPrenomClasseExamen.services.IGuideCredentialsService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/guideCredentials")
public class GuideCredentialsController {

    private final IGuideCredentialsService guideCredentialsService;

    public GuideCredentialsController(IGuideCredentialsService guideCredentialsService) {
        this.guideCredentialsService = guideCredentialsService;
    }

    @PostMapping
    public ResponseEntity<GuideCredentials> createGuideCredentials(@RequestBody GuideCredentials guideCredentials) {
        return ResponseEntity.ok(guideCredentialsService.saveGuideCredentials(guideCredentials));
    }

    @GetMapping
    public ResponseEntity<List<GuideCredentials>> getAllGuideCredentials() {
        return ResponseEntity.ok(guideCredentialsService.getAllGuideCredentials());
    }

    @GetMapping("/{id}")
    public ResponseEntity<GuideCredentials> getGuideCredentialsById(@PathVariable int id) {
        GuideCredentials guideCredentials = guideCredentialsService.getGuideCredentialsById(id);
        return (guideCredentials != null) ? ResponseEntity.ok(guideCredentials) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GuideCredentials> updateGuideCredentials(@PathVariable int id, @RequestBody GuideCredentials updatedGuideCredentials) {
        GuideCredentials existing = guideCredentialsService.getGuideCredentialsById(id);
        if (existing == null) {
            return ResponseEntity.notFound().build();
        }
        updatedGuideCredentials.setIdU(id);
        return ResponseEntity.ok(guideCredentialsService.saveGuideCredentials(updatedGuideCredentials));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGuideCredentials(@PathVariable int id) {
        guideCredentialsService.deleteGuideCredentials(id);
        return ResponseEntity.noContent().build();
    }
}
