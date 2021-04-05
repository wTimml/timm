package novesbike.app.novesbike.repository;

import novesbike.app.novesbike.domain.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile,Long> {
    UserProfile findByFirstName(String firstName);
}
