package nando.proyect.entornoServidor.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Compra;

public interface CompraRepository extends JpaRepository<Compra, Integer> {
    
    Optional<Compra> findById(Integer id);
}

