package novesbike.app.novesbike.controller;


import lombok.AllArgsConstructor;
import novesbike.app.novesbike.domain.Tracking;
import novesbike.app.novesbike.service.TrackingService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/tracking")
@AllArgsConstructor
public class TrackingController {
    private final TrackingService trackingService;


    @GetMapping("/{id}")
    public ResponseEntity<Tracking> findById(@PathVariable Long id) {
        return ResponseEntity.ok(trackingService.findById(id));
    }

    //    @GetMapping("/find-by-date")
//    public ResponseEntity<Tracking> findByDate() {
//        return ResponseEntity.ok(trackingService.findByDate());
//    }

    @GetMapping
    public ResponseEntity<Page<Tracking>> listAll(Pageable pageable){
        return ResponseEntity.ok(trackingService.listAll(pageable));
    }

    @PostMapping
    public ResponseEntity<Tracking> save(@Valid @RequestBody Tracking tracking, Principal principal) {
        return ResponseEntity.ok(trackingService.save(tracking, principal));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tracking> update(@RequestBody Tracking tracking,
                                           @PathVariable Long id) {
        return ResponseEntity.ok(trackingService.update(tracking, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        trackingService.delete(id);
        return ResponseEntity.ok(null);
    }
}
