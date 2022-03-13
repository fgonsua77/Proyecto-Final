package nando.proyect.entornoServidor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Expansion;
import nando.proyect.entornoServidor.model.Juego;

public interface ExpansionRepository extends JpaRepository<Expansion, Integer> {
    List<Expansion> findAllByJuego(Juego juego);
}
