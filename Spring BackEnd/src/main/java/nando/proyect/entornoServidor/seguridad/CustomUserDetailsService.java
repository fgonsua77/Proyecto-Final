package nando.proyect.entornoServidor.seguridad;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Perfil;
import nando.proyect.entornoServidor.model.Usuarios;
import nando.proyect.entornoServidor.repository.UsuariosRepository;



@Service
public class CustomUserDetailsService implements UserDetailsService{

	@Autowired
	private UsuariosRepository usuarioRepositorio;
	
	@Override
	public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
		Usuarios usuario = usuarioRepositorio.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail);
	
		return new User(usuario.getEmail(), usuario.getPassword(), mapearRoles(usuario.getPerfiles()));
	}

	private Collection<? extends GrantedAuthority> mapearRoles(Collection<Perfil> perfiles){
		return perfiles.stream().map(perfil -> new SimpleGrantedAuthority(perfil.getProfile())).collect(Collectors.toList());
	}
}
