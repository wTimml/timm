package novesbike.app.novesbike.repository;

import novesbike.app.novesbike.domain.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAuthRepository extends JpaRepository<UserAuth,Long> {
    UserAuth findByEmail(String email);

}
