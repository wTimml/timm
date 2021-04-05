package novesbike.app.novesbike.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
public class ConfirmationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "token_id")
    private long token_id;

    @Column(name = "confirmation_token")
    private String confirmationToken;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @OneToOne(targetEntity = UserAuth.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "id")
    private UserAuth userAuth;

    public ConfirmationToken(UserAuth userAuth){
        this.createdDate= new Date();
        this.confirmationToken = UUID.randomUUID().toString();
        this.userAuth = userAuth;
    }
}
