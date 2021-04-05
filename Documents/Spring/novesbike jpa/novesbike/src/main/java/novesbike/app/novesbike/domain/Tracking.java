package novesbike.app.novesbike.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "training")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Tracking {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String title;
    private String description;
    private String distance;
    private String timing;

    @Column(name = "average_speed")
    private int averageSpeed;

    private int elevation;
    private String route;

    private Long userId;

    private String date;
}
