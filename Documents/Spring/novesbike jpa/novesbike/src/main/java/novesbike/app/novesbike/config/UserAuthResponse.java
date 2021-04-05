package novesbike.app.novesbike.config;

import java.io.Serializable;

public class UserAuthResponse implements Serializable {

    private static final long serialVersionUID = -1588003174L;
    private final String jwttoken;

    public UserAuthResponse(String jwttoken) {
        this.jwttoken = jwttoken;
    }

    public String getToken() {
        return this.jwttoken;
    }
}
