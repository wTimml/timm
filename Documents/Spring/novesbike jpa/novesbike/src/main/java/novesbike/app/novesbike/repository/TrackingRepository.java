package novesbike.app.novesbike.repository;

import novesbike.app.novesbike.domain.Tracking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrackingRepository extends JpaRepository<Tracking,Long> {
    List<Tracking> findByUserId(long userId);
}
