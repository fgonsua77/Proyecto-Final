package nando.proyect.entornoServidor.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Direccion;

public interface DireccionRepository extends JpaRepository<Direccion, Integer> {
    
    Optional<Direccion> findById(Integer id);
    List<Direccion> findByUsuarioId(Integer id);
    
}
