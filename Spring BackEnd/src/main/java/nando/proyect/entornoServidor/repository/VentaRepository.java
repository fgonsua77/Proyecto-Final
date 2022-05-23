package nando.proyect.entornoServidor.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Venta;

public interface VentaRepository extends JpaRepository<Venta, Integer> {
    
    Optional<Venta> findById(Integer id);
}
