package novesbike.app.novesbike.controller;


import lombok.AllArgsConstructor;
import novesbike.app.novesbike.domain.Training;
import novesbike.app.novesbike.service.TrainingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/training")
@AllArgsConstructor
public class TrainingController {
    private final TrainingService trainingService;

    @GetMapping("/{id}")
    public ResponseEntity<Training> findById(@PathVariable Long id) {
        return ResponseEntity.ok(trainingService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Training>> listAll(){
        return ResponseEntity.ok(trainingService.listAll());
    }

    @PostMapping
    public ResponseEntity<Training> save(@Valid @RequestBody Training training) {
        return ResponseEntity.ok(trainingService.save(training));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Training> update(@RequestBody Training training,
                                              @PathVariable Long id) {
        return ResponseEntity.ok(trainingService.update(training, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        trainingService.delete(id);
        return ResponseEntity.ok(null);
    }

}
