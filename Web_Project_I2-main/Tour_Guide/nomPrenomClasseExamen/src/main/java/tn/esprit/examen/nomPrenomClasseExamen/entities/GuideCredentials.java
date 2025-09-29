package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "guide_credentials")
public class GuideCredentials {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idU;

    private String agency;
    private String aboutYou;
    private String experience;

    @ManyToMany
    @JoinTable(
            name = "guide_cities",
            joinColumns = @JoinColumn(name = "guide_id"),
            inverseJoinColumns = @JoinColumn(name = "city_id")
    )
    private List<City> cities;

    @ElementCollection(targetClass = Languages.class)
    @CollectionTable(name = "guide_languages", joinColumns = @JoinColumn(name = "guide_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "language")
    private List<Languages> languages;

    @ElementCollection(targetClass = Specialties.class)
    @CollectionTable(name = "guide_specialties", joinColumns = @JoinColumn(name = "guide_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "specialty")
    private List<Specialties> specialties;

    @ElementCollection
    @CollectionTable(name = "guide_certifications", joinColumns = @JoinColumn(name = "guide_id"))
    @Column(name = "certification")
    private List<String> certifications;

    // Getters & Setters
    public int getIdU() { return idU; }
    public void setIdU(int idU) { this.idU = idU; }
    public String getAgency() { return agency; }
    public void setAgency(String agency) { this.agency = agency; }
    public String getAboutYou() { return aboutYou; }
    public void setAboutYou(String aboutYou) { this.aboutYou = aboutYou; }
    public String getExperience() { return experience; }
    public void setExperience(String experience) { this.experience = experience; }
    public List<City> getCities() { return cities; }
    public void setCities(List<City> cities) { this.cities = cities; }
    public List<Languages> getLanguages() { return languages; }
    public void setLanguages(List<Languages> languages) { this.languages = languages; }
    public List<Specialties> getSpecialties() { return specialties; }
    public void setSpecialties(List<Specialties> specialties) { this.specialties = specialties; }
    public List<String> getCertifications() { return certifications; }
    public void setCertifications(List<String> certifications) { this.certifications = certifications; }
}
