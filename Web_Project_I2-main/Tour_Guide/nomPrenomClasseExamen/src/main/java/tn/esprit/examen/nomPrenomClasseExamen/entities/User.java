package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idU;

    private String firstName;
    private String lastName;
    private String email;

    @Enumerated(EnumType.STRING)
    private EnumRole role;

    private long phoneNumber;
    private long pwd;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Assistance> assistanceRequests = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Reservation> reservations = new ArrayList<>();

    // Inverse side of Many-to-Many with Planning
    @ManyToMany(mappedBy = "clients")
    private List<Planning> plannings = new ArrayList<>();

    // --- Getters & Setters ---
    public int getIdU() {
        return idU;
    }

    public void setIdU(int idU) {
        this.idU = idU;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public EnumRole getRole() {
        return role;
    }

    public void setRole(EnumRole role) {
        this.role = role;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public long getPwd() {
        return pwd;
    }

    public void setPwd(long pwd) {
        this.pwd = pwd;
    }

    public List<Assistance> getAssistanceRequests() {
        return assistanceRequests;
    }

    public void setAssistanceRequests(List<Assistance> assistanceRequests) {
        this.assistanceRequests = assistanceRequests;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public List<Planning> getPlannings() {
        return plannings;
    }

    public void setPlannings(List<Planning> plannings) {
        this.plannings = plannings;
    }
}
