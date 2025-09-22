package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;

import java.util.ArrayList;

@Entity
@Table(name = "guideCredentials")
public class GuideCredentials {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int idU;
    public String agency;
    public ArrayList<City> cities;

    public ArrayList<Languages> languages;

    public ArrayList<Specialties> specialties;
    public String aboutYou;
    public String experience;
    public ArrayList<String> certifications;

    public int getIdU() {
        return idU;
    }

    public void setIdU(int idU) {
        this.idU = idU;
    }

    public String getAgency() {
        return agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }

    public ArrayList<City> getCities() {
        return cities;
    }

    public void setCities(ArrayList<City> cities) {
        this.cities = cities;
    }

    public ArrayList<Languages> getLanguages() {
        return languages;
    }

    public void setLanguages(ArrayList<Languages> languages) {
        this.languages = languages;
    }

    public ArrayList<Specialties> getSpecialties() {
        return specialties;
    }

    public void setSpecialties(ArrayList<Specialties> specialties) {
        this.specialties = specialties;
    }

    public String getAboutYou() {
        return aboutYou;
    }

    public void setAboutYou(String aboutYou) {
        this.aboutYou = aboutYou;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public ArrayList<String> getCertifications() {
        return certifications;
    }

    public void setCertifications(ArrayList<String> certifications) {
        this.certifications = certifications;
    }
}
