package novesbike.app.novesbike.service;

import novesbike.app.novesbike.domain.UserAuth;
import novesbike.app.novesbike.domain.UserProfile;
import novesbike.app.novesbike.exception.BadRequestException;
import novesbike.app.novesbike.repository.UserAuthRepository;
import novesbike.app.novesbike.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class UserProfileService {

    private final UserProfileRepository userProfileRepository;
    private final UserAuthRepository userAuthRepository;

    @Autowired
    public UserProfileService(UserProfileRepository userProfileRepository, UserAuthRepository userAuthRepository) {
        this.userProfileRepository = userProfileRepository;
        this.userAuthRepository = userAuthRepository;
    }

    public UserProfile save(UserProfile userProfile, Principal principal){

        UserAuth userAuth = userAuthRepository.findByEmail(principal.getName());
        System.out.println("profile service " +userAuth.getId());
        System.out.println(principal);
        userProfile.setId(userAuth.getId());

        return userProfileRepository.save(userProfile);
    }

    public UserProfile findByUserAuthId(Long id){
        return userProfileRepository.findById(id).orElseThrow(()-> new BadRequestException("User Not Found"));
    }

    public UserProfile update(UserProfile userProfile,long id){
        UserProfile userProfileSaved = findByUserAuthId(id);

        userProfile.setId(userProfileSaved.getId());
        return userProfileRepository.save(userProfile);
    }

    public void  delete(long id ){
        userProfileRepository.deleteById(id);
    }

}
