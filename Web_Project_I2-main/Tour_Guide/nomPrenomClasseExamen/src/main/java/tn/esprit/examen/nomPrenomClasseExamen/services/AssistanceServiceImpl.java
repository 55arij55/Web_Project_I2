package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.stereotype.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.Assistance;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.AssistanceRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AssistanceServiceImpl implements IAssistanceService {

    private final AssistanceRepository assistanceRepository;

    public AssistanceServiceImpl(AssistanceRepository assistanceRepository) {
        this.assistanceRepository = assistanceRepository;
    }

    @Override
    public Assistance saveAssistance(Assistance assistance) {
        return assistanceRepository.save(assistance);
    }

    @Override
    public List<Assistance> getAllAssistances() {
        return assistanceRepository.findAll();
    }

    @Override
    public Assistance getAssistanceById(int id) {
        Optional<Assistance> optionalAssistance = assistanceRepository.findById(id);
        return optionalAssistance.orElse(null);
    }

    @Override
    public void deleteAssistance(int id) {
        assistanceRepository.deleteById(id);
    }
}
