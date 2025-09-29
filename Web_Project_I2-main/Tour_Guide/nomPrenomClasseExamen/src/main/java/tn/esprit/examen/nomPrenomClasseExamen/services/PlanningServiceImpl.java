package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.stereotype.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Planning;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.PlanningRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PlanningServiceImpl implements IPlanningService {

    private final PlanningRepository planningRepository;

    public PlanningServiceImpl(PlanningRepository planningRepository) {
        this.planningRepository = planningRepository;
    }

    @Override
    public Planning savePlanning(Planning planning) {
        return planningRepository.save(planning);
    }

    @Override
    public List<Planning> getAllPlannings() {
        return planningRepository.findAll();
    }

    @Override
    public Planning getPlanningById(int id) {
        Optional<Planning> optionalPlanning = planningRepository.findById(id);
        return optionalPlanning.orElse(null);
    }

    @Override
    public void deletePlanning(int id) {
        planningRepository.deleteById(id);
    }
}
