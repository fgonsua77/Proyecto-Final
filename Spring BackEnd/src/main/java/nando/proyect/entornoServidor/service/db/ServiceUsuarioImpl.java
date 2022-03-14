package nando.proyect.entornoServidor.service.db;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nando.proyect.entornoServidor.model.Perfil;
import nando.proyect.entornoServidor.model.Usuarios;
import org.springframework.security.crypto.password.PasswordEncoder;
import nando.proyect.entornoServidor.repository.PerfilRepository;
import nando.proyect.entornoServidor.repository.UsuariosRepository;
import nando.proyect.entornoServidor.service.IServiceUsuario;

@Service @Transactional @Slf4j @RequiredArgsConstructor
public class ServiceUsuarioImpl implements IServiceUsuario, UserDetailsService {
    @Autowired
    private UsuariosRepository usuarioRepository;
    @Autowired
    private PerfilRepository perfilRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void borrarUsuario(Integer idUser) {
        usuarioRepository.deleteById(idUser);
        
    }

    @Override
    public Usuarios editarUsuario(Usuarios user) {
        Usuarios usuarioEditado = new Usuarios();
        usuarioEditado.setId(user.getId());
        usuarioEditado.setNombre(user.getNombre());
        usuarioEditado.setEmail(user.getEmail());
        usuarioEditado.setPassword(user.getPassword());
        usuarioEditado.setUsername(user.getUsername());
        usuarioEditado.setEstatus(user.getEstatus());
        usuarioEditado.setFechaRegistro(user.getFechaRegistro());
        return usuarioRepository.save(usuarioEditado);
    }

    @Override
    public List<Usuarios> encontrarTodoslosUsuarios() {
        // TODO Auto-generated method stub
        return usuarioRepository.findAll();
    }

    @Override
    public Usuarios encontrarUsuarioPorId(Integer id) {
        // TODO Auto-generated method stub
        return usuarioRepository.findById(id).get();
    }
    @Override
    public Usuarios guardarUsuario(Usuarios user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        usuarioRepository.save(user);
        return usuarioRepository.findById(user.getId()).get();
    }
    @Override
    public void añadirPerfilAUsuario(String username, String perfilname){
        Usuarios usuario = usuarioRepository.findByUsername(username);
        Perfil perfil = perfilRepository.findByPerfil(perfilname);
        usuario.getPerfiles().add(perfil);
    }

    @Override
    public UserDetails loadUserByUsernameLogin(String username) throws UsernameNotFoundException {
        Usuarios user = usuarioRepository.findByUsername(username);
        System.out.println("user: " + user);
        if (user == null) {
            log.error("Error en el login: no existe el usuario '" + username + "' en el sistema.");
            throw new UsernameNotFoundException(username);
        }else{
            log.info("Usuario '" + username + "' autenticado correctamente.");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getPerfiles().forEach(perfil -> {
            authorities.add(new SimpleGrantedAuthority(perfil.getPerfil()));
        });
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public Usuarios encontrarPorNombreUsuario(String username) {
        // TODO Auto-generated method stub
        return usuarioRepository.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }
    
}
