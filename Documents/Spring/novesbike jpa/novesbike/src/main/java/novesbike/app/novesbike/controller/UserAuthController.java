package novesbike.app.novesbike.controller;

import lombok.extern.log4j.Log4j2;
import novesbike.app.novesbike.config.TokenService;
import novesbike.app.novesbike.domain.ConfirmationToken;
import novesbike.app.novesbike.domain.TokenDTO;
import novesbike.app.novesbike.domain.UserAuth;
import novesbike.app.novesbike.domain.UserDTO;
import novesbike.app.novesbike.repository.ConfirmationTokenRepository;
import novesbike.app.novesbike.repository.UserAuthRepository;
import novesbike.app.novesbike.service.AuthService;
import novesbike.app.novesbike.service.UserAuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("users")
@Log4j2
@CrossOrigin
public class UserAuthController {

    private final UserAuthService userAuthService;
    private final AuthenticationManager authenticationManager;
    private final AuthService authService;
    private final TokenService tokenService;
    private final Logger logger = LoggerFactory.getLogger(UserAuthController.class);

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    private UserAuthRepository userAuthRepository;

    public UserAuthController(AuthenticationManager authenticationManager, TokenService tokenService, UserAuthService userAuthService, AuthService authService) {
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
        this.authService = authService;
        this.userAuthService = userAuthService;
    }

    @GetMapping(path = "/by-email")
    public ResponseEntity<UserDTO> findByEmail(@RequestParam String email) {
        return ResponseEntity.ok(userAuthService.findByEmail(email));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable long id) {
        return ResponseEntity.ok(userAuthService.findById(id));
    }

    @PostMapping
    public ResponseEntity<UserAuth> save(@RequestBody @Valid UserAuth userAuth) {
        return new ResponseEntity<>(userAuthService.save(userAuth), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        userAuthService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserAuth> replace(@RequestBody UserAuth userAuth,
                                            @PathVariable long id) {
        userAuthService.update(userAuth, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDTO> createAuthenticationToken(@RequestBody UserAuth userAuth) {
        UsernamePasswordAuthenticationToken login = userAuth.converter();
        try {
            Authentication authentication = authenticationManager.authenticate(login);
            String token = tokenService.generateToken(authentication);
            return ResponseEntity.ok(new TokenDTO(token, "Bearer"));
        } catch (AuthenticationException e) {
            logger.error("[BAD REQUEST] Invalid data {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(value = "/confirm-account", method = {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity<UserAuth> confirmUserAccount(@RequestParam("token") String confirmationToken){
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
        if(token != null){
            UserAuth userAuth = userAuthRepository.findByEmail(token.getUserAuth().getEmail());
            userAuth.setEnabled(true);
            return new ResponseEntity<>(userAuthRepository.save(userAuth), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
