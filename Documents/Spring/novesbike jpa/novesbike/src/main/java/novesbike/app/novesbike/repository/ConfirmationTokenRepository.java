package novesbike.app.novesbike.repository;

import novesbike.app.novesbike.domain.ConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken,String> {
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
