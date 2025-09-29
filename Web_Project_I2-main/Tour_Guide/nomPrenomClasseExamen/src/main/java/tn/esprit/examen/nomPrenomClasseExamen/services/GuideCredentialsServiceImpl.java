package tn.esprit.examen.nomPrenomClasseExamen.services;

import org.springframework.stereotype.Service;
import tn.esprit.examen.nomPrenomClasseExamen.entities.GuideCredentials;
import tn.esprit.examen.nomPrenomClasseExamen.repositories.GuideCredentialsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class GuideCredentialsServiceImpl implements IGuideCredentialsService {

    private final GuideCredentialsRepository guideCredentialsRepository;

    public GuideCredentialsServiceImpl(GuideCredentialsRepository guideCredentialsRepository) {
        this.guideCredentialsRepository = guideCredentialsRepository;
    }

    @Override
    public GuideCredentials saveGuideCredentials(GuideCredentials guideCredentials) {
        return guideCredentialsRepository.save(guideCredentials);
    }

    @Override
    public List<GuideCredentials> getAllGuideCredentials() {
        return guideCredentialsRepository.findAll();
    }

    @Override
    public GuideCredentials getGuideCredentialsById(int id) {
        Optional<GuideCredentials> optional = guideCredentialsRepository.findById(id);
        return optional.orElse(null);
    }

    @Override
    public void deleteGuideCredentials(int id) {
        guideCredentialsRepository.deleteById(id);
    }
}
