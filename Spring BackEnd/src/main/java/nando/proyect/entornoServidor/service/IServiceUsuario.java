package nando.proyect.entornoServidor.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;

import nando.proyect.entornoServidor.model.Usuarios;

public interface IServiceUsuario {
    Usuarios guardarUsuario(Usuarios user);
    void borrarUsuario(Integer idUser);
    Usuarios editarUsuario(Usuarios user);
    List<Usuarios> encontrarTodoslosUsuarios();
    Usuarios encontrarUsuarioPorId(Integer id);
    void añadirPerfilAUsuario(String username, String perfilname);
    public UserDetails loadUserByUsernameLogin(String username);
    Usuarios encontrarPorNombreUsuario(String username);
}
