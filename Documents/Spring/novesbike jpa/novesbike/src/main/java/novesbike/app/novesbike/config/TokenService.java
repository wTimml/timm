package novesbike.app.novesbike.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import novesbike.app.novesbike.domain.UserAuth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;

@Service
public class TokenService {
    private final Logger logger = LoggerFactory.getLogger(TokenService.class);


    public static final Long expiration = 5l * 60l * 60l;;

    @Value("{jwt.secret}")
    private String secret;

    public String generateToken(Authentication authentication) {
        UserAuth logged = (UserAuth) authentication.getPrincipal();
        Date today = new Date();
        Instant expirationTime = Instant.now()
                .plusSeconds(expiration);

        Date expirationDate = Date.from(expirationTime);

        Claims claims = Jwts.claims().setSubject(logged.getUsername());
        claims.put("roles", logged.getAuthorities());
        claims.put("userId", logged.getId());

        return Jwts.builder()
                .setIssuer("API Authentication")
                .setSubject(logged.getId().toString())
                .setIssuedAt(today)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS256, secret)
                .setClaims(claims)
                .compact();
    }

    public Boolean isValid(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            logger.error("[JWT] {}", e.getMessage());
            return false;
        }
    }

    public Long getCredentialsId(String token) {
        Claims body = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();

        return Long.valueOf((Integer) body.get("userId"));
    }
}
