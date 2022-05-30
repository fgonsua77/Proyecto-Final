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
import nando.proyect.entornoServidor.model.Carta;
import nando.proyect.entornoServidor.model.Perfil;
import nando.proyect.entornoServidor.model.Usuarios;
import org.springframework.security.crypto.password.PasswordEncoder;

import nando.proyect.entornoServidor.repository.CartaRepository;
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
    private CartaRepository cartaRepository;
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
        usuarioEditado.setName(user.getName());
        usuarioEditado.setEmail(user.getEmail());
        usuarioEditado.setPassword(user.getPassword());
        usuarioEditado.setUsername(user.getUsername());
        usuarioEditado.setStatus(user.getStatus());
        usuarioEditado.setRegisterdate(user.getRegisterdate());
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
        Perfil perfil = perfilRepository.findByProfile(perfilname);
        usuario.getPerfiles().add(perfil);
    }
    @Override
    public void añadirCartaFavoritaAlUsuario(Integer idUser, Integer idCarta){
        Usuarios usuario = usuarioRepository.findById(idUser).get();
        Carta carta = cartaRepository.findById(idCarta).get();
        usuario.getFavorites().add(carta);
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuarios user = usuarioRepository.findByUsername(username);
        System.out.println("user: " + user);
        if (user == null) {
            System.out.println("Error en el login: no existe el usuario '" + username + "' en el sistema.");
            throw new UsernameNotFoundException(username);
        }else{
        	System.out.println("Usuario '" + username + "' autenticado correctamente.");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getPerfiles().forEach(perfil -> {
            authorities.add(new SimpleGrantedAuthority(perfil.getProfile()));
        });
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public Usuarios encontrarPorNombreUsuario(String username) {
        // TODO Auto-generated method stub
        return usuarioRepository.findByUsername(username);
    }
    
}
