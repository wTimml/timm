package novesbike.app.novesbike.service;

import lombok.AllArgsConstructor;
import novesbike.app.novesbike.domain.Tracking;
import novesbike.app.novesbike.exception.BadRequestException;
import novesbike.app.novesbike.repository.TrackingRepository;
import novesbike.app.novesbike.repository.UserAuthRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
@AllArgsConstructor
public class TrackingService {
    private final TrackingRepository trackingRepository;
    private final UserAuthRepository userAuthRepository;

    public Tracking save(Tracking tracking, Principal principal){
        //UserAuth userAuth = userAuthRepository.findByEmail(principal.getName());

//        System.out.println("profile service " +userAuth.getId());
//        System.out.println(principal);
//        tracking.setUserId(userAuth.getId());

        return trackingRepository.save(tracking);
    }

    public Tracking findById(long id){
        return trackingRepository.findById(id).orElseThrow(()-> new BadRequestException("User Not Found"));
    }
    public List<Tracking> findByUserId(long id){
        return trackingRepository.findByUserId(id);
    }

    public Page<Tracking> listAll(Pageable pageable){
        return trackingRepository.findAll(pageable);
    }
//
//    public List<Tracking> findByDate(){
//        Tracking tracking = listAll();
//        return trackingRepository.findByDate();
//    }

    public Tracking update(Tracking tracking, long id){
        Tracking trackingToSave = findById(id);

        tracking.setId(trackingToSave.getId());
        return trackingRepository.save(tracking);
    }

    public void delete(long id){
        trackingRepository.deleteById(id);
    }
}
