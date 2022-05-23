package nando.proyect.entornoServidor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Perfil;

public interface PerfilRepository extends JpaRepository<Perfil, Integer> {
    Perfil findByProfile(String perfil);
}

