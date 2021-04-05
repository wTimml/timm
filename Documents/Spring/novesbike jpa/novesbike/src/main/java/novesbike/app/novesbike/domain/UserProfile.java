package novesbike.app.novesbike.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user_profile")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserProfile {

    @Id
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    private String picture;

}
