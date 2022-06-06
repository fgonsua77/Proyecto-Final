package nando.proyect.entornoServidor.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Evaluacion;

public interface EvaluacionRepository extends JpaRepository<Evaluacion, Integer> {
    
    Optional<Evaluacion> findById(Integer id);
}
