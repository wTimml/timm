package novesbike.app.novesbike.config;

import novesbike.app.novesbike.domain.UserAuth;
import novesbike.app.novesbike.repository.UserAuthRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UserAuthRequestFilter extends OncePerRequestFilter {


    private final Logger logger = LoggerFactory.getLogger(UserAuthRequestFilter.class);
    private TokenService tokenService;
    private UserAuthRepository credentialsRepository;

    public UserAuthRequestFilter(TokenService tokenService, UserAuthRepository credentialsRepository) {
        this.tokenService = tokenService;
        this.credentialsRepository = credentialsRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String token = extractTokenFromHeader(httpServletRequest);
        Boolean validToken = tokenService.isValid(token);
        if (validToken) {
            authenticateCredentials(token);
        }
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }

    private void authenticateCredentials(String token) {
        Long credentialsId = tokenService.getCredentialsId(token);
        UserAuth credential = credentialsRepository.findById(credentialsId).get();
        System.out.println("authenticate get token id: "+ credential);
        System.out.println("authenticate get token id: "+ credentialsId);
        System.out.println("authenticate get token id: "+ token);
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(credential, null, credential.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    private String extractTokenFromHeader(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        if (header == null || header.isEmpty() || !header.startsWith("Bearer ")) {
            logger.error("[JWT] Missing JWT in request headers");
            return null;
        }
        return header.substring(7);
    }
}
