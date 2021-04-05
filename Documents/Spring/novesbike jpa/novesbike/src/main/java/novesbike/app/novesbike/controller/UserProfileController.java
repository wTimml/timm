package novesbike.app.novesbike.controller;

import novesbike.app.novesbike.domain.UserProfile;
import novesbike.app.novesbike.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/profile")
public class UserProfileController {

    private final UserProfileService userProfileService;

    @Autowired
    public UserProfileController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserProfile> findById(@PathVariable Long id) {
        return ResponseEntity.ok(userProfileService.findByUserAuthId(id));
    }

    @PostMapping
    public ResponseEntity<UserProfile> save(@Valid @RequestBody UserProfile userProfile,Principal principal) {
        return ResponseEntity.ok(userProfileService.save(userProfile, principal));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserProfile> update(@RequestBody UserProfile userProfile,
                                              @PathVariable Long id) {
        return ResponseEntity.ok(userProfileService.update(userProfile, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        userProfileService.delete(id);
        return ResponseEntity.ok(null);
    }

}
