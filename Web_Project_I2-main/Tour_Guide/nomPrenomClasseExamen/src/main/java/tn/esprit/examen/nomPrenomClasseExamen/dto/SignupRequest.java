package tn.esprit.examen.nomPrenomClasseExamen.dto;

import lombok.Getter;
import lombok.Setter;
import tn.esprit.examen.nomPrenomClasseExamen.entities.EnumRole;

@Setter
@Getter
public class SignupRequest {
    private String firstName;
    private String lastName;
    private String email;
    private long phoneNumber;
    private long pwd; // must match name used in service
    private EnumRole role;

}
