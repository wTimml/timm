package novesbike.app.novesbike.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TokenDTO {

    private String token;
    private String authType;

}
