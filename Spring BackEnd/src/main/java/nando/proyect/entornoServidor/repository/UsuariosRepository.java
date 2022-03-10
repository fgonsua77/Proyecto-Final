package nando.proyect.entornoServidor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nando.proyect.entornoServidor.model.Usuarios;

public interface UsuariosRepository extends JpaRepository<Usuarios, Integer> {
    Usuarios findByUsername(String username);
}
