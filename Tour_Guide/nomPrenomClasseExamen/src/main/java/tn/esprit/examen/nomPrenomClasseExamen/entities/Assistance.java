package tn.esprit.examen.nomPrenomClasseExamen.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "assistance")
public class Assistance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int idAss;
    public String Message;
    public String Subject;

    public Date Date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    public int getIdAss() {
        return idAss;
    }

    public void setIdAss(int idAss) {
        this.idAss = idAss;
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String message) {
        Message = message;
    }

    public String getSubject() {
        return Subject;
    }

    public void setSubject(String subject) {
        Subject = subject;
    }

    public java.util.Date getDate() {
        return Date;
    }

    public void setDate(java.util.Date date) {
        Date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
