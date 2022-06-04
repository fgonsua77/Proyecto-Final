package nando.proyect.entornoServidor.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nando.proyect.entornoServidor.model.Envio;
@Repository
public interface EnvioRepository extends JpaRepository<Envio, Integer> {
    
    Optional<Envio> findById(Integer id);
    
}
    

