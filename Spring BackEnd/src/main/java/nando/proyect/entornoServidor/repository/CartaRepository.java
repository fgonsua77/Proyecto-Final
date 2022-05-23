package nando.proyect.entornoServidor.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import nando.proyect.entornoServidor.model.Carta;

public interface CartaRepository extends JpaRepository<Carta, Integer> {
    List<Carta> findAllByExpansion(Integer expansion);
    List<Carta> findByNameContaining(String parteNombre);
    List<Carta> findByCode(String codigo);
    List<Carta> findByReprint(String reprint);
    List<Carta> findByHighlighted(Boolean destacado);

}