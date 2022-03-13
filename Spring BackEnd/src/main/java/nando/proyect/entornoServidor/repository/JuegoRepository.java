package nando.proyect.entornoServidor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Juego;

public interface JuegoRepository extends JpaRepository<Juego, Integer> {
    Juego findByNombre(String nombre);
}
    

