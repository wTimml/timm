package novesbike.app.novesbike.service;

import lombok.AllArgsConstructor;
import novesbike.app.novesbike.repository.UserAuthRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@AllArgsConstructor
@Service
public class AuthService implements UserDetailsService {

    private final UserAuthRepository userAuthRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        email = email.toLowerCase();
        return Optional.ofNullable(userAuthRepository.findByEmail(email))
                .orElseThrow(()-> new UsernameNotFoundException("User Not Found"));
    }
}
