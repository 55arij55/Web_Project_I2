package tn.esprit.examen.nomPrenomClasseExamen.services;

import tn.esprit.examen.nomPrenomClasseExamen.entities.GuideCredentials;
import java.util.List;

public interface IGuideCredentialsService {
    GuideCredentials saveGuideCredentials(GuideCredentials guideCredentials);
    List<GuideCredentials> getAllGuideCredentials();
    GuideCredentials getGuideCredentialsById(int id);
    void deleteGuideCredentials(int id);
}
