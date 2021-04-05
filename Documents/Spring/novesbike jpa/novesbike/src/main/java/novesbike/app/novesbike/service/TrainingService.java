package novesbike.app.novesbike.service;

import lombok.AllArgsConstructor;
import novesbike.app.novesbike.domain.Training;
import novesbike.app.novesbike.exception.BadRequestException;
import novesbike.app.novesbike.repository.TrainingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TrainingService {

    private final TrainingRepository trainingRepository;

    public Training save(Training training){
        return trainingRepository.save(training);
    }

    public Training findById(long id){
        return trainingRepository.findById(id).orElseThrow(()-> new BadRequestException("User Not Found"));
    }

    public List<Training> listAll(){
        return trainingRepository.findAll();
    }

    public Training update(Training training, long id){
        Training trainingToSave = findById(id);

        training.setId(trainingToSave.getId());
        return trainingRepository.save(training);
    }

    public void delete(long id){
        trainingRepository.deleteById(id);
    }
}
