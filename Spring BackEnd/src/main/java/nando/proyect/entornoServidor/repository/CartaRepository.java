package nando.proyect.entornoServidor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Carta;

public interface CartaRepository extends JpaRepository<Carta, Integer> {
}