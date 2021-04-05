package novesbike.app.novesbike.service;

import lombok.RequiredArgsConstructor;
import novesbike.app.novesbike.config.TokenService;
import novesbike.app.novesbike.domain.ConfirmationToken;
import novesbike.app.novesbike.domain.UserAuth;
import novesbike.app.novesbike.domain.UserDTO;
import novesbike.app.novesbike.exception.BadRequestException;
import novesbike.app.novesbike.repository.ConfirmationTokenRepository;
import novesbike.app.novesbike.repository.UserAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class UserAuthService  {

    private final UserAuthRepository userAuthRepository;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;


    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    EmailSenderService emailSenderService;

    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;


    public UserDTO findByEmail(String email) {
        UserAuth userAuth = userAuthRepository.findByEmail(email);

        UserDTO userDTO = new UserDTO();
        userDTO.setId(userAuth.getId());
        userDTO.setEmail(userAuth.getEmail());
        userDTO.setUser_authorities(userAuth.getUserAuthorities());
        userDTO.setEnabled(userAuth.isEnabled());

        if(userAuth.getUserProfile() != null) {
            userDTO.setFirstName(userAuth.getUserProfile().getFirstName());
            userDTO.setLastName(userAuth.getUserProfile().getLastName());
            userDTO.setPicture(userAuth.getUserProfile().getPicture());
        }


        return userDTO;
    }

    public UserDTO findById(Long id) {
        UserAuth userAuth = userAuthRepository.findById(id).orElseThrow(() -> new BadRequestException("User Not Found"));

        UserDTO userDTO = new UserDTO();
        userDTO.setId(userAuth.getId());
        userDTO.setEmail(userAuth.getEmail());
        userDTO.setUser_authorities(userAuth.getUserAuthorities());
        userDTO.setEnabled(userAuth.isEnabled());

        if(userAuth.getUserProfile() != null) {
            userDTO.setFirstName(userAuth.getUserProfile().getFirstName());
            userDTO.setLastName(userAuth.getUserProfile().getLastName());
            userDTO.setPicture(userAuth.getUserProfile().getPicture());

        }
        return userDTO;
    }

    @Transactional
    public UserAuth save(UserAuth userAuth)  {
        Pattern pattern = Pattern.compile("^(.+)@(.+)$");
        if(userAuth.getEmail() != null) userAuth.setEmail(userAuth.getEmail().toLowerCase());
        if(!pattern.matcher(userAuth.getEmail()).matches()) {
            throw new BadRequestException("Invalid email format");
        }
        else if(checkIfUserExist(userAuth.getEmail())){
            throw new BadRequestException("Email já existe");
        }else{
            userAuth.setPassword(passwordEncoder.encode(userAuth.getPassword()));
            UserAuth userAuthToSave = userAuthRepository.save(userAuth);

            ConfirmationToken confirmationToken = new ConfirmationToken(userAuth);

            confirmationTokenRepository.save(confirmationToken);

            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(userAuth.getEmail());
            mailMessage.setSubject("Registro Completo!");
            mailMessage.setFrom("MailTest.com <auto-confirm@mailtest.com>");
            mailMessage.setText("Para confirmar sua conta, clique no link: "
                + "http://192.168.1.40:8090/users/confirm-account?token="+ confirmationToken.getConfirmationToken());

            emailSenderService.sendEmail(mailMessage);

            return userAuthToSave;
        }
}


    public boolean checkIfUserExist(String email) {
        if(email != null) email = email.toLowerCase();
        return userAuthRepository.findByEmail(email) != null;
    }

    public UserAuth update(UserAuth userAuth, long id) {
        UserDTO userSaved = findById(id);
        userAuth.setId(userSaved.getId());
        userAuth.setPassword(passwordEncoder.encode(userAuth.getPassword()));
        return userAuthRepository.save(userAuth);
    }

    public void delete(Long id ){
        userAuthRepository.deleteById(id);
    }
}
